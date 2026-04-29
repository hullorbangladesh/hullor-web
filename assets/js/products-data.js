// ════════════════════════════════════════════════════════
// HULLOR — Products Data
// Edit this file to add / remove products
// ════════════════════════════════════════════════════════

const PRODUCTS = [
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
    // Colors — set enabled:false to disable a color for this product
    colors: [
      { name: "Forest Green", hex: "#2C4A35", enabled: true },
      { name: "Midnight Black", hex: "#1B1E19", enabled: true },
      { name: "Pearl White",   hex: "#F5F1E8", enabled: true },
      { name: "Dusty Rose",    hex: "#C4896F", enabled: false }
    ],
    specs: ["Type-C Charging", "3-Speed Modes", "Whisper Quiet", "6h Battery"]
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
      "assets/images/products/highvoltage-fan-1.png",
      "assets/images/products/highvoltage-fan-2.png",
      "assets/images/products/highvoltage-fan-3.png"
    ],
    colors: [
      { name: "Forest Green", hex: "#2C4A35", enabled: true },
      { name: "Midnight Black", hex: "#1B1E19", enabled: true },
      { name: "Pearl White",   hex: "#F5F1E8", enabled: false },
      { name: "Sky Blue",      hex: "#4A7FA5", enabled: true }
    ],
    specs: ["LED Battery Display", "2500mAh Cell", "High-RPM Motor", "8h Battery"]
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
      { name: "Forest Green", hex: "#2C4A35", enabled: true },
      { name: "Midnight Black", hex: "#1B1E19", enabled: true },
      { name: "Pearl White",   hex: "#F5F1E8", enabled: true },
      { name: "Sky Blue",      hex: "#4A7FA5", enabled: true }
    ],
    specs: ["Hands-Free", "270° Airflow", "Bladeless", "10h Battery"]
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
      { name: "Silver",        hex: "#A8A8A8", enabled: true },
      { name: "Space Gray",    hex: "#5A5A5A", enabled: true },
      { name: "Rose Gold",     hex: "#C49A6C", enabled: false }
    ],
    specs: ["60W Fast Charge", "3-in-1 Tips", "Braided Nylon", "1.2m Length"]
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
      { name: "Midnight Black", hex: "#1B1E19", enabled: true },
      { name: "Pearl White",    hex: "#F5F1E8", enabled: true },
      { name: "Navy Blue",      hex: "#2C3E6A", enabled: true }
    ],
    specs: ["10,000mAh", "Dual USB-A", "USB-C PD", "Slim 12mm"]
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
      { name: "Matte White",  hex: "#EEEEEE", enabled: true },
      { name: "Matte Black",  hex: "#2A2A2A", enabled: true },
      { name: "Dusty Rose",   hex: "#C4896F", enabled: true }
    ],
    specs: ["Touch Dimmer", "3 Color Temps", "5 Brightness", "USB Port"]
  }
];

// Delivery options — shared across all pages
const DELIVERY_OPTIONS = [
  { label: "Inside Dhaka",  charge: 80  },
  { label: "Outside Dhaka", charge: 150 }
];

// Google Apps Script URL — paste your deployment URL here
const SHEET_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec";