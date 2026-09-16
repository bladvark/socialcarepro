(function () {
  "use strict";

  var dataEl = document.getElementById("catalog-data");
  if (!dataEl) return;
  var catalog = JSON.parse(dataEl.textContent);

  var products = catalog.products;
  var bundles = catalog.bundles;
  var byId = {};
  products.forEach(function (p) { byId[p.id] = Object.assign({ type: "product" }, p); });
  bundles.forEach(function (b) { byId[b.id] = Object.assign({ type: "bundle" }, b); });
  var categoryLabel = {};
  catalog.categories.forEach(function (c) { categoryLabel[c.id] = c.label; });

  var CART_KEY = "scp-cart";
  var state = { filter: "all", sort: "default", cart: loadCart() };

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function gbp(pence) { return "£" + (pence / 100).toFixed(2); }
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return node;
  }

  function loadCart() {
    try {
      var saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(saved) ? saved.filter(function (id) { return byId[id]; }) : [];
    } catch (e) { return []; }
  }
  function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(state.cart)); } catch (e) { /* storage unavailable */ }
  }

  // ---------- Products ----------
  function renderFilters() {
    var wrap = $("[data-filters]");
    var options = [{ id: "all", label: "All" }].concat(catalog.categories);
    options.forEach(function (c) {
      var btn = el("button", { type: "button", class: "chip", "data-filter": c.id, "aria-pressed": String(c.id === state.filter), text: c.label });
      btn.addEventListener("click", function () {
        state.filter = c.id;
        $all("[data-filter]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === c.id)); });
        renderProducts();
      });
      wrap.appendChild(btn);
    });
    $("[data-sort]").addEventListener("change", function (e) { state.sort = e.target.value; renderProducts(); });
  }

  function sortedProducts() {
    var list = products.filter(function (p) { return state.filter === "all" || p.category === state.filter; });
    if (state.sort === "price-asc") list.sort(function (a, b) { return a.price - b.price; });
    if (state.sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
    if (state.sort === "title") list.sort(function (a, b) { return a.title.localeCompare(b.title); });
    return list;
  }

  function priceNode(item) {
    var node = el("span", { class: "price" }, [gbp(item.price)]);
    if (catalog.showWasPrice && item.was) node.appendChild(el("s", { class: "was", text: gbp(item.was) }));
    return node;
  }

  function addButton(item) {
    var inCart = state.cart.indexOf(item.id) !== -1;
    var btn = el("button", { type: "button", class: "btn btn-small" + (inCart ? " btn-added" : ""), "data-add": item.id, text: inCart ? "In basket" : "Add to basket" });
    btn.addEventListener("click", function () { addToCart(item.id); });
    return btn;
  }

  function renderProducts() {
    var list = $("[data-products]");
    list.textContent = "";
    sortedProducts().forEach(function (p) {
      var ext = p.format.indexOf("xlsx") !== -1 ? "xlsx" : "docx";
      var more = el("button", { type: "button", class: "link-btn", text: "What's included" });
      more.addEventListener("click", function () { openDetails(p.id, more); });
      list.appendChild(el("li", { class: "doc", id: "item-" + p.id }, [
        el("span", { class: "doc-tab doc-tab-" + ext, text: "." + ext, "aria-hidden": "true" }),
        el("div", { class: "doc-body" }, [
          el("p", { class: "doc-cat", text: categoryLabel[p.category] }),
          el("h3", { text: p.title }),
          el("p", { class: "doc-blurb", text: p.blurb }),
          more,
        ]),
        el("div", { class: "doc-buy" }, [priceNode(p), addButton(p)]),
      ]));
    });
  }

  function renderBundles() {
    var wrap = $("[data-bundles]");
    wrap.textContent = "";
    bundles.forEach(function (b) {
      var contents = el("ul", { class: "bundle-list" }, b.items.map(function (id) { return el("li", { text: byId[id].title }); }));
      wrap.appendChild(el("article", { class: "bundle", id: "item-" + b.id }, [
        el("h3", { text: b.title }),
        el("p", { text: b.blurb }),
        contents,
        el("div", { class: "bundle-foot" }, [
          el("div", {}, [priceNode(b), b.saving > 0 ? el("p", { class: "saving", text: "Save " + gbp(b.saving) + " compared with buying separately" }) : null]),
          addButton(b),
        ]),
      ]));
    });
  }

  // ---------- Details modal ----------
  var lastFocus = null;
  function openDetails(id, trigger) {
    var p = byId[id];
    lastFocus = trigger || null;
    var body = $("[data-modal-body]");
    body.textContent = "";
    body.appendChild(el("p", { class: "doc-cat", text: categoryLabel[p.category] }));
    body.appendChild(el("h2", { id: "modal-title", text: p.title }));
    body.appendChild(el("p", { text: p.blurb }));
    body.appendChild(el("h3", { text: "What's included" }));
    body.appendChild(el("ul", { class: "ticks" }, p.includes.map(function (i) { return el("li", { text: i }); })));
    body.appendChild(el("p", { class: "muted", text: "Format: " + p.format }));
    body.appendChild(el("div", { class: "modal-buy" }, [priceNode(p), addButton(p)]));
    show($("[data-modal]"));
  }

  // ---------- Cart ----------
  function notice(message) {
    var n = $("[data-cart-notice]");
    n.textContent = message || "";
    n.hidden = !message;
  }

  function addToCart(id) {
    if (state.cart.indexOf(id) !== -1) { openCart(); return; }
    var item = byId[id];
    var message = "";
    if (item.type === "bundle") {
      var before = state.cart.length;
      state.cart = state.cart.filter(function (c) { return item.items.indexOf(c) === -1; });
      if (state.cart.length < before) message = "We removed items already included in the " + item.title + ".";
    } else {
      var owner = bundles.filter(function (b) { return state.cart.indexOf(b.id) !== -1 && b.items.indexOf(id) !== -1; })[0];
      if (owner) { notice(item.title + " is already included in the " + owner.title + "."); openCart(); return; }
    }
    state.cart.push(id);
    saveCart();
    refresh();
    notice(message);
    closeModal();
    openCart();
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter(function (c) { return c !== id; });
    saveCart();
    notice("");
    refresh();
  }

  function renderCart() {
    var lines = $("[data-cart-lines]");
    lines.textContent = "";
    var total = 0;
    state.cart.forEach(function (id) {
      var item = byId[id];
      total += item.price;
      var remove = el("button", { type: "button", class: "link-btn", text: "Remove", "aria-label": "Remove " + item.title });
      remove.addEventListener("click", function () { removeFromCart(id); });
      lines.appendChild(el("li", { class: "cart-line" }, [
        el("div", {}, [el("p", { class: "cart-line-title", text: item.title }), el("p", { class: "small muted", text: item.type === "bundle" ? "Bundle of 5 files" : item.format })]),
        el("div", { class: "cart-line-side" }, [el("strong", { text: gbp(item.price) }), remove]),
      ]));
    });
    if (!state.cart.length) lines.appendChild(el("li", { class: "empty", text: "Your basket is empty. Add a template or bundle to get started." }));
    $("[data-cart-total]").textContent = gbp(total);
    $("[data-checkout]").disabled = !state.cart.length;
    $all("[data-cart-count]").forEach(function (c) { c.textContent = String(state.cart.length); });
  }

  function refresh() {
    renderProducts();
    renderBundles();
    renderCart();
  }

  function show(node) {
    node.hidden = false;
    document.body.classList.add("locked");
    var focusable = node.querySelector("button, a, select");
    if (focusable) focusable.focus();
  }
  function hide(node) {
    node.hidden = true;
    if ($("[data-cart]").hidden && $("[data-modal]").hidden) document.body.classList.remove("locked");
  }
  function openCart() { lastFocus = lastFocus || document.activeElement; show($("[data-cart]")); }
  function closeCart() { hide($("[data-cart]")); restoreFocus(); }
  function closeModal() { var m = $("[data-modal]"); if (!m.hidden) { hide(m); } }
  function restoreFocus() { if (lastFocus && lastFocus.focus) lastFocus.focus(); lastFocus = null; }

  async function checkout() {
    var btn = $("[data-checkout]");
    var error = $("[data-cart-error]");
    error.hidden = true;
    btn.disabled = true;
    btn.textContent = "Opening secure checkout…";
    try {
      var res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: state.cart }),
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok || !data.url) throw new Error(data.error || "Checkout couldn't start.");
      window.location.href = data.url;
    } catch (e) {
      error.textContent = e.message + " Please try again, or email hello@socialcarepro.com if it keeps happening.";
      error.hidden = false;
      btn.disabled = !state.cart.length;
      btn.textContent = "Pay securely with Stripe";
    }
  }

  // ---------- Wire up ----------
  var headerCart = $("[data-open-cart]");
  if (headerCart) {
    headerCart.hidden = false;
    headerCart.addEventListener("click", function () { lastFocus = headerCart; openCart(); });
  }
  $all("[data-close-cart]").forEach(function (b) { b.addEventListener("click", closeCart); });
  $all("[data-close-modal]").forEach(function (b) { b.addEventListener("click", function () { closeModal(); restoreFocus(); }); });
  $("[data-checkout]").addEventListener("click", checkout);
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!$("[data-modal]").hidden) { closeModal(); restoreFocus(); }
    else if (!$("[data-cart]").hidden) closeCart();
  });
  // Returning from a cancelled Stripe checkout lands on /#cart
  window.addEventListener("pageshow", function () {
    var btn = $("[data-checkout]");
    btn.textContent = "Pay securely with Stripe";
    btn.disabled = !state.cart.length;
  });

  renderFilters();
  refresh();
  if (window.location.hash === "#cart") openCart();
})();
