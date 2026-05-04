// ════════════════════════════════════════════════════════
// HULLOR — Firebase Data Service
// Loads products & delivery options from Firestore
// Falls back to static defaults if offline
// ════════════════════════════════════════════════════════

// ── Firebase SDK (compat) ──────────────────────────────
// Loaded via CDN in each HTML page before this script

// ── Default seed data (used on first run) ─────────────
const DEFAULT_PRODUCTS = [
  {
    id: "premium-turbo-fan",
    name: "Premium Turbo Fan",
    badge: "Best Seller",
    category: "fans",
    price: 490,
    desc: "Compact powerhouse with Type-C fast charging. Perfect for everyday use on the go.",
    longDesc: "The Premium Turbo Fan delivers powerful airflow in a sleek, pocket-sized body. Equipped with USB Type-C fast charging, a 3-speed wind mode, and whisper-quiet motor — it's the ultimate everyday companion for hot days anywhere.",
    images: [
      "assets/images/products/premium-fan-1.png",
      "assets/images/products/premium-fan-2.png",
      "assets/images/products/premium-fan-3.png"
    ],
    colors: [
      { name: "Forest Green",  hex: "#2C4A35", enabled: true  },
      { name: "Midnight Black",hex: "#1B1E19", enabled: true  },
      { name: "Pearl White",   hex: "#F5F1E8", enabled: true  },
      { name: "Dusty Rose",    hex: "#C4896F", enabled: false }
    ],
    specs: ["Type-C Charging", "3-Speed Modes", "Whisper Quiet", "6h Battery"],
    order: 0,
    visible: true
  },
  {
    id: "highvoltage-turbo-fan",
    name: "HighVoltage Turbo Fan",
    badge: "New Arrival",
    category: "fans",
    price: 590,
    desc: "LED battery display with powerful airflow. Built for performance and long-lasting comfort.",
    longDesc: "The HighVoltage Turbo Fan features a bright LED battery indicator so you always know your charge level. With a high-RPM motor and extended 2500mAh cell, it powers through the day without complaint.",
    images: [
      "assets/images/product2.png",
      "assets/images/product1.png",
      "assets/images/products/highvoltage-fan-3.png"
    ],
    colors: [
      { name: "Forest Green",  hex: "#2C4A35", enabled: true  },
      { name: "Midnight Black",hex: "#1B1E19", enabled: true  },
      { name: "Pearl White",   hex: "#F5F1E8", enabled: false },
      { name: "Sky Blue",      hex: "#4A7FA5", enabled: true  }
    ],
    specs: ["LED Battery Display", "2500mAh Cell", "High-RPM Motor", "8h Battery"],
    order: 1,
    visible: true
  },
  {
    id: "pocket-neck-fan",
    name: "Pocket Neck Fan",
    badge: "Popular",
    category: "fans",
    price: 750,
    desc: "Hands-free wearable neck fan with 270° airflow coverage and silent motor.",
    longDesc: "Wear it around your neck and enjoy cool air wherever you go. The dual-motor design provides 270° bladeless airflow, keeping you fresh without tangling your hair.",
    images: [
      "assets/images/products/neck-fan-1.png",
      "assets/images/products/neck-fan-2.png",
      "assets/images/products/neck-fan-3.png"
    ],
    colors: [
      { name: "Forest Green",  hex: "#2C4A35", enabled: true },
      { name: "Midnight Black",hex: "#1B1E19", enabled: true },
      { name: "Pearl White",   hex: "#F5F1E8", enabled: true },
      { name: "Sky Blue",      hex: "#4A7FA5", enabled: true }
    ],
    specs: ["Hands-Free", "270° Airflow", "Bladeless", "10h Battery"],
    order: 2,
    visible: true
  },
  {
    id: "magnetic-cable-set",
    name: "Magnetic Cable Set",
    badge: "Limited",
    category: "cables",
    price: 320,
    desc: "3-in-1 fast charging magnetic cable. Works with Type-C, Lightning & Micro USB.",
    longDesc: "One cable, every device. The Magnetic Cable Set snaps into place in under a second and supports 60W fast charging. Braided nylon exterior with zinc alloy connectors built to last.",
    images: [
      "assets/images/products/magnetic-cable-1.png",
      "assets/images/products/magnetic-cable-2.png",
      "assets/images/products/magnetic-cable-3.png"
    ],
    colors: [
      { name: "Silver",     hex: "#A8A8A8", enabled: true  },
      { name: "Space Gray", hex: "#5A5A5A", enabled: true  },
      { name: "Rose Gold",  hex: "#C49A6C", enabled: false }
    ],
    specs: ["60W Fast Charge", "3-in-1 Tips", "Braided Nylon", "1.2m Length"],
    order: 3,
    visible: true
  },
  {
    id: "power-bank-10k",
    name: "PowerBank 10000",
    badge: "Top Rated",
    category: "power",
    price: 1290,
    desc: "Slim 10,000mAh powerbank with dual USB-A and one USB-C output.",
    longDesc: "Travel light without sacrificing charge. The PowerBank 10000 fits in your shirt pocket while packing enough juice for 3 full phone charges. Dual output lets two devices charge simultaneously.",
    images: [
      "assets/images/products/powerbank-1.png",
      "assets/images/products/powerbank-2.png",
      "assets/images/products/powerbank-3.png"
    ],
    colors: [
      { name: "Midnight Black",hex: "#1B1E19", enabled: true },
      { name: "Pearl White",   hex: "#F5F1E8", enabled: true },
      { name: "Navy Blue",     hex: "#2C3E6A", enabled: true }
    ],
    specs: ["10,000mAh", "Dual USB-A", "USB-C PD", "Slim 12mm"],
    order: 4,
    visible: true
  },
  {
    id: "led-desk-lamp",
    name: "LED Desk Lamp",
    badge: "New",
    category: "accessories",
    price: 890,
    desc: "Touch-dimmer LED lamp with warm/cool modes and USB charging port built in.",
    longDesc: "The perfect study companion. Three color temperatures and 5 brightness levels controlled by a single touch. Built-in USB port means one less adapter on your desk.",
    images: [
      "assets/images/products/desk-lamp-1.png",
      "assets/images/products/desk-lamp-2.png",
      "assets/images/products/desk-lamp-3.png"
    ],
    colors: [
      { name: "Matte White", hex: "#EEEEEE", enabled: true },
      { name: "Matte Black", hex: "#2A2A2A", enabled: true },
      { name: "Dusty Rose",  hex: "#C4896F", enabled: true }
    ],
    specs: ["Touch Dimmer", "3 Color Temps", "5 Brightness", "USB Port"],
    order: 5,
    visible: true
  }
];

const DEFAULT_DELIVERY_OPTIONS = [
  { label: "Inside Dhaka",  charge: 80  },
  { label: "Outside Dhaka", charge: 150 }
];

// ── Runtime globals (populated from Firestore) ─────────
let PRODUCTS         = [];
let DELIVERY_OPTIONS = [];
let _dataLoaded      = false;
let _dataCallbacks   = [];

function onDataReady(cb) {
  if (_dataLoaded) { cb(); return; }
  _dataCallbacks.push(cb);
}

function _fireDataReady() {
  _dataLoaded = true;
  _dataCallbacks.forEach(cb => cb());
  _dataCallbacks = [];
}

// ── Seed Firestore with defaults (first run) ──────────
async function seedIfEmpty(db) {
  try {
    const snap = await db.collection("products").limit(1).get();
    if (!snap.empty) return;
    console.log("[Hullor] Seeding Firestore with default data…");
    const batch = db.batch();
    DEFAULT_PRODUCTS.forEach(p => {
      batch.set(db.collection("products").doc(p.id), p);
    });
    await batch.commit();

    const dSnap = await db.collection("settings").doc("delivery").get();
    if (!dSnap.exists) {
      await db.collection("settings").doc("delivery").set({ options: DEFAULT_DELIVERY_OPTIONS });
    }
    console.log("[Hullor] Seeding complete.");
  } catch (e) {
    console.warn("[Hullor] Seed skipped:", e.message);
  }
}

// ── Load all data from Firestore ──────────────────────
async function loadHullorData() {
  try {
    // Check if Firebase is available
    if (typeof firebase === "undefined") {
      throw new Error("Firebase SDK not loaded");
    }

    const app = firebase.apps.length
      ? firebase.app()
      : firebase.initializeApp(FIREBASE_CONFIG);
    const db = firebase.firestore();

    await seedIfEmpty(db);

    // Load products (visible only for storefront)
    const pSnap = await db.collection("products")
      .where("visible", "==", true)
      .orderBy("order")
      .get();

    PRODUCTS = pSnap.docs.map(d => ({ ...d.data(), id: d.id }));

    // Load delivery options
    const dSnap = await db.collection("settings").doc("delivery").get();
    DELIVERY_OPTIONS = dSnap.exists
      ? (dSnap.data().options || DEFAULT_DELIVERY_OPTIONS)
      : DEFAULT_DELIVERY_OPTIONS;

  } catch (err) {
    console.warn("[Hullor] Firestore load failed, using defaults.", err.message);
    PRODUCTS         = DEFAULT_PRODUCTS.filter(p => p.visible !== false);
    DELIVERY_OPTIONS = DEFAULT_DELIVERY_OPTIONS;
  }

  _fireDataReady();
}

// ── Auto-init when DOM is ready ────────────────────────
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadHullorData);
} else {
  loadHullorData();
}
