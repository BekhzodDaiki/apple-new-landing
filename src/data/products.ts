import heroIphone from "@/assets/hero-iphone.png";
import watchImage from "@/assets/watch.png";
import ipadImage from "@/assets/ipad.png";
import airpodsImage from "@/assets/airpods.png";
import macbookImage from "@/assets/macbook.png";
import dysonImage from "@/assets/dyson.png";
import alisaImage from "@/assets/alisa.png";
import hoopImage from "@/assets/hoop.png";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: ProductColor[];
  specs: ProductSpec[];
  features: string[];
  category: "apple" | "partner";
}

export const products: Record<string, Product> = {
  iphone: {
    id: "iphone",
    name: "iPhone 15 Pro",
    tagline: "Titanium. So strong. So light. So Pro.",
    description: "iPhone 15 Pro features a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features the A17 Pro chip, a more advanced camera system, and a customizable Action button.",
    price: 999,
    image: heroIphone,
    colors: [
      { name: "Natural Titanium", hex: "#8F8A81" },
      { name: "Blue Titanium", hex: "#3D4F5C" },
      { name: "White Titanium", hex: "#F5F5F0" },
      { name: "Black Titanium", hex: "#3C3C3C" },
    ],
    specs: [
      { label: "Display", value: '6.1" Super Retina XDR display with ProMotion' },
      { label: "Chip", value: "A17 Pro chip with 6-core GPU" },
      { label: "Camera", value: "48MP Main | 12MP Ultra Wide | 12MP Telephoto" },
      { label: "Battery", value: "Up to 23 hours video playback" },
      { label: "Storage", value: "128GB / 256GB / 512GB / 1TB" },
      { label: "Connectivity", value: "5G, Wi-Fi 6E, Bluetooth 5.3" },
    ],
    features: [
      "Aerospace-grade titanium design",
      "Action button for quick access",
      "USB-C with USB 3 speeds",
      "Emergency SOS via satellite",
      "Crash Detection",
      "Ceramic Shield front",
    ],
    category: "apple",
  },
  ipad: {
    id: "ipad",
    name: "iPad Air",
    tagline: "Supercharged by M3.",
    description: "iPad Air is the perfect way to experience the power of Apple M3. It features a stunning 10.9-inch Liquid Retina display, advanced cameras, and support for Apple Pencil and Magic Keyboard.",
    price: 599,
    image: ipadImage,
    colors: [
      { name: "Space Gray", hex: "#717378" },
      { name: "Starlight", hex: "#F9F3EE" },
      { name: "Pink", hex: "#F4D2D0" },
      { name: "Purple", hex: "#B8B1D1" },
      { name: "Blue", hex: "#6C9BC4" },
    ],
    specs: [
      { label: "Display", value: '10.9" Liquid Retina display' },
      { label: "Chip", value: "Apple M3 chip" },
      { label: "Camera", value: "12MP Wide camera | 12MP Ultra Wide front" },
      { label: "Battery", value: "Up to 10 hours of surfing the web" },
      { label: "Storage", value: "64GB / 256GB" },
      { label: "Connectivity", value: "Wi-Fi 6, optional 5G" },
    ],
    features: [
      "Touch ID for secure authentication",
      "Apple Pencil support (2nd generation)",
      "Magic Keyboard compatible",
      "USB-C connector",
      "Landscape stereo speakers",
      "Center Stage video calls",
    ],
    category: "apple",
  },
  watch: {
    id: "watch",
    name: "Apple Watch Series 9",
    tagline: "Smarter. Brighter. Mightier.",
    description: "Apple Watch Series 9 features the powerful S9 chip for breakthrough capabilities, a magical new double tap gesture, a brighter display, and advanced health features.",
    price: 399,
    image: watchImage,
    colors: [
      { name: "Midnight", hex: "#1D1D1F" },
      { name: "Starlight", hex: "#F9F3EE" },
      { name: "Silver", hex: "#E3E3E8" },
      { name: "Pink", hex: "#FADDD9" },
      { name: "Product Red", hex: "#BA0C2F" },
    ],
    specs: [
      { label: "Display", value: "Always-On Retina LTPO OLED display" },
      { label: "Chip", value: "S9 SiP with 64-bit dual-core processor" },
      { label: "Sensors", value: "Blood oxygen, ECG, Heart rate, Temperature" },
      { label: "Battery", value: "Up to 18 hours of battery life" },
      { label: "Water Resistance", value: "50 meters" },
      { label: "Connectivity", value: "GPS, optional Cellular" },
    ],
    features: [
      "Double Tap gesture control",
      "Precision Finding for iPhone",
      "Crash Detection",
      "Fall Detection",
      "Sleep tracking",
      "Fitness tracking with rings",
    ],
    category: "apple",
  },
  airpods: {
    id: "airpods",
    name: "AirPods Pro",
    tagline: "Rebuilt from the sound up.",
    description: "AirPods Pro feature up to 2x more Active Noise Cancellation, Adaptive Audio, Personalized Spatial Audio, and Conversation Awareness for an unparalleled listening experience.",
    price: 249,
    image: airpodsImage,
    colors: [
      { name: "White", hex: "#F5F5F7" },
    ],
    specs: [
      { label: "Chip", value: "Apple H2 headphone chip" },
      { label: "Audio", value: "Active Noise Cancellation, Adaptive Audio" },
      { label: "Battery", value: "Up to 6 hours listening time" },
      { label: "Case Battery", value: "Up to 30 hours total with case" },
      { label: "Water Resistance", value: "IP54 dust, sweat, and water resistant" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
    ],
    features: [
      "Personalized Spatial Audio with head tracking",
      "Conversation Awareness",
      "Touch control for music and calls",
      "MagSafe Charging Case with speaker",
      "Precision Finding with U1 chip",
      "Sweat and water resistant",
    ],
    category: "apple",
  },
  macbook: {
    id: "macbook",
    name: "MacBook Pro",
    tagline: "Mind-blowing. Head-turning.",
    description: "MacBook Pro blasts off with the M3 Pro or M3 Max chip. Supercharges your most demanding workflows with record-breaking speeds. A new level of performance in an impossibly thin design.",
    price: 1999,
    image: macbookImage,
    colors: [
      { name: "Space Black", hex: "#1D1D1F" },
      { name: "Silver", hex: "#E3E3E8" },
    ],
    specs: [
      { label: "Display", value: '14.2" or 16.2" Liquid Retina XDR display' },
      { label: "Chip", value: "Apple M3 Pro or M3 Max" },
      { label: "Memory", value: "Up to 128GB unified memory" },
      { label: "Battery", value: "Up to 22 hours of battery life" },
      { label: "Storage", value: "Up to 8TB SSD" },
      { label: "Ports", value: "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3" },
    ],
    features: [
      "Liquid Retina XDR display",
      "ProMotion technology up to 120Hz",
      "1080p FaceTime HD camera",
      "Six-speaker sound system",
      "Studio-quality three-mic array",
      "Touch ID for secure unlock",
    ],
    category: "apple",
  },
  dyson: {
    id: "dyson",
    name: "Dyson V15 Detect",
    tagline: "Reveals what other vacuums miss.",
    description: "The Dyson V15 Detect vacuum uses a laser to reveal microscopic dust, and shows scientific proof of a deep clean on an LCD screen. Powerful suction for all floor types.",
    price: 749,
    originalPrice: 849,
    image: dysonImage,
    colors: [
      { name: "Nickel/Yellow", hex: "#FFD700" },
      { name: "Iron/Blue", hex: "#4A5568" },
    ],
    specs: [
      { label: "Motor", value: "Dyson Hyperdymium™ motor" },
      { label: "Suction", value: "240 AW" },
      { label: "Run time", value: "Up to 60 minutes" },
      { label: "Bin volume", value: "0.76L" },
      { label: "Weight", value: "3.1 kg" },
      { label: "Filtration", value: "Whole-machine HEPA filtration" },
    ],
    features: [
      "Laser Slim Fluffy cleaner head",
      "Piezo sensor counts particles",
      "LCD screen shows real-time data",
      "Anti-tangle Hair screw tool",
      "Click-in battery for easy swap",
      "Converts to handheld",
    ],
    category: "partner",
  },
  alisa: {
    id: "alisa",
    name: "Alisa Station Max",
    tagline: "Your intelligent home companion.",
    description: "Alisa Station Max is a premium smart speaker with voice assistant capabilities. Control your smart home, play music, set reminders, and get answers to your questions.",
    price: 199,
    image: alisaImage,
    colors: [
      { name: "Graphite", hex: "#4A4A4A" },
      { name: "Silver", hex: "#C4C4C4" },
      { name: "Midnight Blue", hex: "#1A365D" },
    ],
    specs: [
      { label: "Speaker", value: "50W woofer + 2x 10W tweeters" },
      { label: "Microphones", value: "7 far-field microphones" },
      { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.2, Zigbee" },
      { label: "Display", value: "LED light ring indicator" },
      { label: "Dimensions", value: "150 x 150 x 180 mm" },
      { label: "Weight", value: "1.8 kg" },
    ],
    features: [
      "360° immersive sound",
      "Voice control for smart home",
      "Multi-room audio support",
      "Smart home hub built-in",
      "Privacy mute button",
      "Personalized voice recognition",
    ],
    category: "partner",
  },
  hoop: {
    id: "hoop",
    name: "Hoop Ring Pro",
    tagline: "Health tracking, simplified.",
    description: "Hoop Ring Pro is a smart ring that tracks your health metrics 24/7. Monitor your sleep, activity, heart rate, and recovery all from a comfortable, stylish ring.",
    price: 299,
    image: hoopImage,
    colors: [
      { name: "Titanium Silver", hex: "#C0C0C0" },
      { name: "Stealth Black", hex: "#2D2D2D" },
      { name: "Rose Gold", hex: "#B76E79" },
    ],
    specs: [
      { label: "Material", value: "Titanium with PVD coating" },
      { label: "Water Resistance", value: "100m (10 ATM)" },
      { label: "Battery", value: "Up to 7 days" },
      { label: "Sensors", value: "PPG, Temperature, Accelerometer" },
      { label: "Weight", value: "4-6g depending on size" },
      { label: "Sizes", value: "US 6-13" },
    ],
    features: [
      "24/7 heart rate monitoring",
      "Blood oxygen measurement",
      "Sleep quality analysis",
      "Activity & workout tracking",
      "Recovery score",
      "Menstrual cycle tracking",
    ],
    category: "partner",
  },
};

export const getProductsByCategory = (category: "apple" | "partner") => {
  return Object.values(products).filter((p) => p.category === category);
};
