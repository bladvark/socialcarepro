// Single source of truth for products, bundles, prices (in pence) and R2 file keys.
// The server ALWAYS looks prices up here. Never trust prices sent from the browser.

const DOCX = "Editable Word document (.docx)";
const XLSX = "Excel workbook (.xlsx)";

export const CATEGORIES = [
  { id: "compliance", label: "Compliance & policy" },
  { id: "care", label: "Care planning & records" },
  { id: "staff", label: "Staff & recruitment" },
  { id: "training", label: "Training" },
  { id: "business", label: "Running the business" },
];

export const PRODUCTS = [
  {
    id: "1", title: "Mental Capacity Assessment Pack", price: 1499, was: 2200, category: "care",
    file: "01-Mental-Capacity-Assessment-Pack.docx", format: DOCX,
    blurb: "Carry out and record two-stage capacity assessments and best interests decisions in line with the Mental Capacity Act 2005.",
    includes: ["MCA step-by-step guide", "Two-stage capacity assessment form", "Best interests decision record", "Worked case studies", "Legal and guidance references"],
  },
  {
    id: "2", title: "Risk Assessment Bundle", price: 1999, was: null, category: "compliance",
    file: "02-Risk-Assessment-Bundle.docx", format: DOCX,
    blurb: "Five core risk assessments for home care visits, ready to adapt to each person you support.",
    includes: ["Falls risk assessment", "Pressure ulcer risk assessment", "Nutrition and hydration screening record", "Moving and handling risk assessment (TILEO)", "Medication risk assessment"],
  },
  {
    id: "3", title: "Person-Centred Care Plan Template", price: 1299, was: 1800, category: "care",
    file: "03-Person-Centred-Care-Plan.docx", format: DOCX,
    blurb: "A care and support plan built around the person: who they are, what matters to them and how they want to be supported.",
    includes: ["Guidance notes", "About me and one-page profile", "Care and support plan", "Goals and outcomes", "Culture, identity and preferences", "Review schedule"],
  },
  {
    id: "4", title: "Safeguarding Adults Policy & Procedure", price: 1699, was: null, category: "compliance",
    file: "04-Safeguarding-Policy-and-Procedure.docx", format: DOCX,
    blurb: "A safeguarding adults policy with the procedure, forms and records staff and managers need when a concern is raised.",
    includes: ["Safeguarding adults policy (incl. whistleblowing)", "Response procedure", "Concern reporting form", "Manager referral record", "Staff training record", "Manager guidance notes"],
  },
  {
    id: "5", title: "Data Protection & UK GDPR Policy Pack", price: 1499, was: null, category: "compliance",
    file: "05-Data-Protection-GDPR-Pack.docx", format: DOCX,
    blurb: "Policy, privacy notices and procedures for handling personal data in a care service under UK GDPR.",
    includes: ["Data protection policy", "Privacy notice – people using services", "Privacy notice – staff", "Subject access procedure, log and response letter", "Data breach procedure and log"],
  },
  {
    id: "6", title: "Staff Supervision & Appraisal Templates", price: 1199, was: 1600, category: "staff",
    file: "06-Staff-Supervision-Templates.docx", format: DOCX,
    blurb: "Run consistent one-to-ones and annual appraisals, and keep track of who is due.",
    includes: ["Guidance for managers", "One-to-one supervision record", "Annual appraisal", "Supervision action plan", "Supervision tracker"],
  },
  {
    id: "7", title: "Medication Awareness Workbook", price: 999, was: null, category: "training",
    file: "07-Medication-Awareness-Workbook.docx", format: DOCX,
    blurb: "A self-study workbook for care workers, with a knowledge check and competency sign-off.",
    includes: ["Seven learning modules", "Knowledge check", "Answer sheet", "Competency assessment", "Certificate of completion"],
  },
  {
    id: "8", title: "Daily Care Record Pack", price: 899, was: 1200, category: "care",
    file: "08-Daily-Care-Record-Pack.docx", format: DOCX,
    blurb: "Everyday recording forms for care visits, with guidance on writing clear, factual notes.",
    includes: ["Record-keeping guidance", "Daily care notes", "Food and fluid chart", "Continence record", "ABC behaviour chart", "Body map record"],
  },
  {
    id: "9", title: "New Care Business Starter Pack", price: 7999, was: 12000, category: "business",
    file: "09-New-Care-Business-Starter-Pack.docx", format: DOCX,
    blurb: "A practical starting point for setting up a regulated care service, from CQC registration to your first 90 days.",
    includes: ["CQC registration checklist", "Statement of Purpose template", "Business plan outline", "34-policy framework with standard policy structure", "Marketing one-pager", "First 90 days checklist"],
  },
  {
    id: "10", title: "Dementia Care Assessment Toolkit", price: 1799, was: 2400, category: "care",
    file: "10-Dementia-Care-Assessment-Toolkit.docx", format: DOCX,
    blurb: "Observation, life history and communication tools for supporting people living with dementia.",
    includes: ["Cognition and daily living observation record", "Life history profile", "Distress and behaviour monitoring form", "Communication passport", "Family liaison record"],
  },
  {
    id: "11", title: "End of Life Care Plan", price: 1399, was: null, category: "care",
    file: "11-End-of-Life-Care-Plan.docx", format: DOCX,
    blurb: "Plan and record care in the last months and days of life, including advance wishes and bereavement support.",
    includes: ["End of life care plan", "Advance care planning record", "Comfort care checklist", "Bereavement support guide", "CPR decisions information sheet"],
  },
  {
    id: "12", title: "Rota & Workforce Planning Templates", price: 1099, was: 1499, category: "staff",
    file: "12-Rota-and-Workforce-Planning-Templates.xlsx", format: XLSX,
    blurb: "A working rota spreadsheet that calculates paid hours, including overnight shifts, and flags anyone over 48 hours.",
    includes: ["Weekly rota with automatic paid-hours calculation", "Monthly shift planner", "Holiday tracker", "Staffing calculator", "Guidance sheet"],
  },
  {
    id: "13", title: "Pre-Employment Checks Checklist", price: 799, was: null, category: "staff",
    file: "13-Pre-Employment-Checks-Checklist.docx", format: DOCX,
    blurb: "Safer recruitment checks in one place, from references and DBS to right to work and induction.",
    includes: ["Safer recruitment checklist", "Reference request template", "DBS tracking sheet", "Right to work check log", "Induction record"],
  },
  {
    id: "14", title: "Infection Prevention & Control Policy Pack", price: 1399, was: 1800, category: "compliance",
    file: "14-Infection-Control-Policy-Pack.docx", format: DOCX,
    blurb: "IPC policy and protocols for home care, including outbreak management for respiratory infections.",
    includes: ["IPC policy", "Hand hygiene protocol", "PPE guide", "Outbreak management plan incl. respiratory infections such as COVID-19", "Staff IPC training record"],
  },
  {
    id: "15", title: "Moving & Handling Training Pack", price: 1899, was: 2500, category: "training",
    file: "15-Moving-and-Handling-Training-Pack.docx", format: DOCX,
    blurb: "Everything a trainer needs to deliver a moving and handling session and assess competency.",
    includes: ["Trainer session plan", "Slide-by-slide presentation notes", "Learner handout", "Scenario cards", "TILEO risk assessment form", "Competency assessment sheet"],
  },
  {
    id: "16", title: "Environmental Health & Safety Audit", price: 1199, was: null, category: "compliance",
    file: "16-Environmental-Health-and-Safety-Audit.docx", format: DOCX,
    blurb: "Monthly and annual checks for your premises, fire safety and equipment, with an action log.",
    includes: ["Monthly premises check", "Annual health and safety audit", "Fire safety checklist", "Equipment checklist", "Action log"],
  },
  {
    id: "17", title: "Care Provider Marketing Pack", price: 1599, was: 2200, category: "business",
    file: "17-Care-Marketing-Pack.docx", format: DOCX,
    blurb: "Templates to help families and commissioners find your service, from social posts to a brochure.",
    includes: ["Marketing basics", "12 social media post templates", "Newsletter template", "Service brochure template", "Google Business Profile guide", "Review request emails"],
  },
  {
    id: "18", title: "Incident & Accident Report Pack", price: 999, was: null, category: "compliance",
    file: "18-Incident-and-Accident-Report-Pack.docx", format: DOCX,
    blurb: "Report, investigate and learn from incidents and accidents in a consistent way.",
    includes: ["Incident reporting flow chart", "Accident and incident report form", "Serious incident template", "Investigation checklist", "Lessons learned log"],
  },
];

export const BUNDLES = [
  {
    id: "b1", title: "CQC Compliance Bundle", price: 4999, items: ["2", "4", "5", "14", "16"],
    blurb: "Core policies, risk assessments and audits for a well-led, safe service.",
  },
  {
    id: "b2", title: "Care Business Starter Bundle", price: 8999, items: ["3", "6", "8", "9", "11"],
    blurb: "The starter pack plus the care plans, records and supervision tools a new service needs from day one.",
  },
  {
    id: "b3", title: "Staff Training Resource Bundle", price: 4499, items: ["1", "7", "10", "13", "15"],
    blurb: "Workbooks, training packs and toolkits to develop and check your team's skills.",
  },
];

// "Was" prices are kept in the data but hidden until products have genuinely sold at that price.
export const SHOW_WAS_PRICE = false;

const productById = new Map(PRODUCTS.map((p) => [p.id, p]));
const bundleById = new Map(BUNDLES.map((b) => [b.id, b]));

export function findItem(id) {
  return productById.get(id) || bundleById.get(id) || null;
}

export function bundleSaving(bundle) {
  const individual = bundle.items.reduce((sum, id) => sum + productById.get(id).price, 0);
  return individual - bundle.price;
}

// Removes unknown IDs, duplicates, and products already covered by a bundle in the cart.
export function normaliseCart(ids) {
  const clean = [...new Set((Array.isArray(ids) ? ids : []).map(String))].filter((id) => findItem(id));
  const covered = new Set(clean.filter((id) => bundleById.has(id)).flatMap((id) => bundleById.get(id).items));
  const removed = clean.filter((id) => productById.has(id) && covered.has(id));
  return { items: clean.filter((id) => !removed.includes(id)), removed };
}

// Expands a list of purchased IDs into the unique product files the customer may download.
export function filesForItems(ids) {
  const productIds = new Set();
  for (const id of ids) {
    if (bundleById.has(id)) bundleById.get(id).items.forEach((p) => productIds.add(p));
    else if (productById.has(id)) productIds.add(id);
  }
  return [...productIds]
    .sort((a, b) => Number(a) - Number(b))
    .map((id) => productById.get(id));
}

// Public data for the storefront (no file keys).
export function publicCatalog() {
  return {
    categories: CATEGORIES,
    showWasPrice: SHOW_WAS_PRICE,
    products: PRODUCTS.map(({ file, ...rest }) => rest),
    bundles: BUNDLES.map((b) => ({ ...b, saving: bundleSaving(b) })),
  };
}
