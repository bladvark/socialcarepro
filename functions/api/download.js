import { verifyDownloadToken, getOrder, messagePage, MAX_DOWNLOADS, BUSINESS } from "../_lib.js";
import { filesForItems } from "../_catalog.js";

const TYPES = {
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

const help = `Email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a> from your order email address and we'll send you a new link.`;

// GET /api/download?token=...
export async function onRequestGet({ request, env }) {
  const token = new URL(request.url).searchParams.get("token");
  const claim = await verifyDownloadToken(env, token);
  if (!claim) {
    return messagePage({ title: "This download link has expired", message: `Links work for 72 hours after purchase. ${help}`, status: 403 });
  }

  const order = await getOrder(env, claim.sessionId);
  if (!order) return messagePage({ title: "Order not found", message: help, status: 404 });
  if (order.refunded) return messagePage({ title: "This order was refunded", message: `Downloads are no longer available for refunded orders. ${help}`, status: 403 });

  const product = filesForItems(order.items.split(",")).find((p) => p.id === claim.productId);
  if (!product) return messagePage({ title: "File not part of this order", message: help, status: 403 });

  // Count the download only if the order is still under the limit (atomic).
  const counted = await env.DB.prepare(
    "UPDATE orders SET download_count = download_count + 1 WHERE session_id = ?1 AND refunded = 0 AND download_count < ?2"
  )
    .bind(order.session_id, MAX_DOWNLOADS)
    .run();
  if (!counted.meta?.changes) {
    return messagePage({ title: "Download limit reached", message: `This order has reached its limit of ${MAX_DOWNLOADS} downloads. ${help}`, status: 403 });
  }

  const object = await env.PRODUCTS.get(product.file);
  if (!object) {
    console.error("missing R2 object for product", product.id);
    await env.DB.prepare("UPDATE orders SET download_count = download_count - 1 WHERE session_id = ?1").bind(order.session_id).run();
    return messagePage({ title: "File temporarily unavailable", message: `We couldn't fetch this file just now. ${help}`, status: 404 });
  }

  const ext = product.file.split(".").pop();
  return new Response(object.body, {
    headers: {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Content-Disposition": `attachment; filename="${product.file}"`,
      "Content-Length": String(object.size),
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
