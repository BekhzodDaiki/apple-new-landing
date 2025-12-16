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
    tagline: "Титан. Такой прочный. Такой лёгкий. Такой Pro.",
    description: "iPhone 15 Pro имеет прочную и лёгкую конструкцию из титана аэрокосмического класса с текстурированной матовой стеклянной задней панелью. Также в нём установлен чип A17 Pro, более продвинутая система камер и настраиваемая кнопка Action.",
    price: 999,
    image: heroIphone,
    colors: [
      { name: "Натуральный титан", hex: "#8F8A81" },
      { name: "Синий титан", hex: "#3D4F5C" },
      { name: "Белый титан", hex: "#F5F5F0" },
      { name: "Чёрный титан", hex: "#3C3C3C" },
    ],
    specs: [
      { label: "Дисплей", value: '6.1" Super Retina XDR с ProMotion' },
      { label: "Чип", value: "A17 Pro с 6-ядерным GPU" },
      { label: "Камера", value: "48 МП основная | 12 МП сверхширокая | 12 МП телефото" },
      { label: "Батарея", value: "До 23 часов воспроизведения видео" },
      { label: "Память", value: "128 ГБ / 256 ГБ / 512 ГБ / 1 ТБ" },
      { label: "Связь", value: "5G, Wi-Fi 6E, Bluetooth 5.3" },
    ],
    features: [
      "Корпус из титана аэрокосмического класса",
      "Кнопка Action для быстрого доступа",
      "USB-C со скоростью USB 3",
      "Экстренный вызов SOS через спутник",
      "Обнаружение аварий",
      "Фронтальная панель Ceramic Shield",
    ],
    category: "apple",
  },
  ipad: {
    id: "ipad",
    name: "iPad Air",
    tagline: "С новым чипом M3.",
    description: "iPad Air — идеальный способ ощутить мощь Apple M3. Он оснащён великолепным дисплеем Liquid Retina 10,9 дюйма, продвинутыми камерами и поддержкой Apple Pencil и Magic Keyboard.",
    price: 599,
    image: ipadImage,
    colors: [
      { name: "Серый космос", hex: "#717378" },
      { name: "Сияющая звезда", hex: "#F9F3EE" },
      { name: "Розовый", hex: "#F4D2D0" },
      { name: "Фиолетовый", hex: "#B8B1D1" },
      { name: "Синий", hex: "#6C9BC4" },
    ],
    specs: [
      { label: "Дисплей", value: '10,9" Liquid Retina' },
      { label: "Чип", value: "Apple M3" },
      { label: "Камера", value: "12 МП широкоугольная | 12 МП сверхширокая фронтальная" },
      { label: "Батарея", value: "До 10 часов работы в интернете" },
      { label: "Память", value: "64 ГБ / 256 ГБ" },
      { label: "Связь", value: "Wi-Fi 6, опционально 5G" },
    ],
    features: [
      "Touch ID для безопасной аутентификации",
      "Поддержка Apple Pencil (2-го поколения)",
      "Совместим с Magic Keyboard",
      "Разъём USB-C",
      "Альбомные стереодинамики",
      "Center Stage для видеозвонков",
    ],
    category: "apple",
  },
  watch: {
    id: "watch",
    name: "Apple Watch Series 9",
    tagline: "Умнее. Ярче. Мощнее.",
    description: "Apple Watch Series 9 оснащён мощным чипом S9 для невероятных возможностей, новым волшебным жестом двойного касания, более ярким дисплеем и продвинутыми функциями для здоровья.",
    price: 399,
    image: watchImage,
    colors: [
      { name: "Тёмная ночь", hex: "#1D1D1F" },
      { name: "Сияющая звезда", hex: "#F9F3EE" },
      { name: "Серебристый", hex: "#E3E3E8" },
      { name: "Розовый", hex: "#FADDD9" },
      { name: "Product Red", hex: "#BA0C2F" },
    ],
    specs: [
      { label: "Дисплей", value: "Always-On Retina LTPO OLED" },
      { label: "Чип", value: "S9 SiP с 64-битным двухъядерным процессором" },
      { label: "Датчики", value: "Кислород в крови, ЭКГ, пульс, температура" },
      { label: "Батарея", value: "До 18 часов работы" },
      { label: "Водозащита", value: "50 метров" },
      { label: "Связь", value: "GPS, опционально сотовая связь" },
    ],
    features: [
      "Жест двойного касания",
      "Точный поиск iPhone",
      "Обнаружение аварий",
      "Обнаружение падений",
      "Отслеживание сна",
      "Фитнес-трекинг с кольцами",
    ],
    category: "apple",
  },
  airpods: {
    id: "airpods",
    name: "AirPods Pro",
    tagline: "Переосмысленный звук.",
    description: "AirPods Pro обеспечивают до 2 раз более эффективное активное шумоподавление, адаптивное аудио, персонализированное пространственное аудио и функцию распознавания разговора для непревзойдённого качества прослушивания.",
    price: 249,
    image: airpodsImage,
    colors: [
      { name: "Белый", hex: "#F5F5F7" },
    ],
    specs: [
      { label: "Чип", value: "Apple H2" },
      { label: "Аудио", value: "Активное шумоподавление, адаптивное аудио" },
      { label: "Батарея", value: "До 6 часов прослушивания" },
      { label: "Батарея кейса", value: "До 30 часов с кейсом" },
      { label: "Защита", value: "IP54 от пыли, пота и воды" },
      { label: "Связь", value: "Bluetooth 5.3" },
    ],
    features: [
      "Персонализированное пространственное аудио с отслеживанием головы",
      "Распознавание разговора",
      "Сенсорное управление музыкой и звонками",
      "Кейс MagSafe с динамиком",
      "Точный поиск с чипом U1",
      "Защита от пота и воды",
    ],
    category: "apple",
  },
  macbook: {
    id: "macbook",
    name: "MacBook Pro",
    tagline: "Невероятный. Впечатляющий.",
    description: "MacBook Pro взлетает с чипом M3 Pro или M3 Max. Ускоряет самые сложные рабочие процессы с рекордной скоростью. Новый уровень производительности в невероятно тонком корпусе.",
    price: 1999,
    image: macbookImage,
    colors: [
      { name: "Космический чёрный", hex: "#1D1D1F" },
      { name: "Серебристый", hex: "#E3E3E8" },
    ],
    specs: [
      { label: "Дисплей", value: '14,2" или 16,2" Liquid Retina XDR' },
      { label: "Чип", value: "Apple M3 Pro или M3 Max" },
      { label: "Память", value: "До 128 ГБ унифицированной памяти" },
      { label: "Батарея", value: "До 22 часов работы" },
      { label: "Хранилище", value: "До 8 ТБ SSD" },
      { label: "Порты", value: "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3" },
    ],
    features: [
      "Дисплей Liquid Retina XDR",
      "Технология ProMotion до 120 Гц",
      "Камера FaceTime HD 1080p",
      "Шестидинамиковая аудиосистема",
      "Студийный массив из трёх микрофонов",
      "Touch ID для безопасной разблокировки",
    ],
    category: "apple",
  },
  dyson: {
    id: "dyson",
    name: "Dyson V15 Detect",
    tagline: "Видит то, что пропускают другие.",
    description: "Пылесос Dyson V15 Detect использует лазер для обнаружения микроскопической пыли и показывает научное подтверждение глубокой очистки на LCD-экране. Мощное всасывание для всех типов полов.",
    price: 749,
    originalPrice: 849,
    image: dysonImage,
    colors: [
      { name: "Никель/Жёлтый", hex: "#FFD700" },
      { name: "Железо/Синий", hex: "#4A5568" },
    ],
    specs: [
      { label: "Мотор", value: "Dyson Hyperdymium™" },
      { label: "Мощность", value: "240 Вт" },
      { label: "Время работы", value: "До 60 минут" },
      { label: "Объём контейнера", value: "0,76 л" },
      { label: "Вес", value: "3,1 кг" },
      { label: "Фильтрация", value: "Полная HEPA-фильтрация" },
    ],
    features: [
      "Насадка Laser Slim Fluffy",
      "Пьезодатчик подсчёта частиц",
      "LCD-экран с данными в реальном времени",
      "Насадка Anti-tangle Hair screw",
      "Съёмная батарея для замены",
      "Трансформируется в ручной пылесос",
    ],
    category: "partner",
  },
  alisa: {
    id: "alisa",
    name: "Alisa Station Max",
    tagline: "Ваш умный помощник для дома.",
    description: "Alisa Station Max — премиальная умная колонка с голосовым помощником. Управляйте умным домом, слушайте музыку, устанавливайте напоминания и получайте ответы на вопросы.",
    price: 199,
    image: alisaImage,
    colors: [
      { name: "Графит", hex: "#4A4A4A" },
      { name: "Серебристый", hex: "#C4C4C4" },
      { name: "Тёмно-синий", hex: "#1A365D" },
    ],
    specs: [
      { label: "Динамик", value: "50 Вт вуфер + 2x 10 Вт твитера" },
      { label: "Микрофоны", value: "7 дальних микрофонов" },
      { label: "Связь", value: "Wi-Fi 6, Bluetooth 5.2, Zigbee" },
      { label: "Дисплей", value: "Светодиодное кольцо-индикатор" },
      { label: "Размеры", value: "150 x 150 x 180 мм" },
      { label: "Вес", value: "1,8 кг" },
    ],
    features: [
      "Объёмный звук 360°",
      "Голосовое управление умным домом",
      "Поддержка мультирум аудио",
      "Встроенный хаб умного дома",
      "Кнопка отключения микрофона",
      "Персональное распознавание голоса",
    ],
    category: "partner",
  },
  hoop: {
    id: "hoop",
    name: "Hoop Ring Pro",
    tagline: "Отслеживание здоровья. Просто.",
    description: "Hoop Ring Pro — умное кольцо, которое отслеживает показатели здоровья 24/7. Следите за сном, активностью, пульсом и восстановлением с помощью удобного и стильного кольца.",
    price: 299,
    image: hoopImage,
    colors: [
      { name: "Титановый серебристый", hex: "#C0C0C0" },
      { name: "Чёрный стелс", hex: "#2D2D2D" },
      { name: "Розовое золото", hex: "#B76E79" },
    ],
    specs: [
      { label: "Материал", value: "Титан с PVD-покрытием" },
      { label: "Водозащита", value: "100 м (10 ATM)" },
      { label: "Батарея", value: "До 7 дней" },
      { label: "Датчики", value: "PPG, температура, акселерометр" },
      { label: "Вес", value: "4-6 г в зависимости от размера" },
      { label: "Размеры", value: "US 6-13" },
    ],
    features: [
      "Круглосуточный мониторинг пульса",
      "Измерение кислорода в крови",
      "Анализ качества сна",
      "Отслеживание активности и тренировок",
      "Оценка восстановления",
      "Отслеживание менструального цикла",
    ],
    category: "partner",
  },
};

export const getProductsByCategory = (category: "apple" | "partner") => {
  return Object.values(products).filter((p) => p.category === category);
};
