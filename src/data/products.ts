import heroIphone from "@/assets/hero-iphone.png";
import iphone17ProMaxNaturalImage from "@/assets/iphone-17-pro-max-natural.png";
import iphone17ProMaxBlueImage from "@/assets/iphone-17-pro-max-blue.png";
import iphone17ProMaxWhiteImage from "@/assets/iphone-17-pro-max-white.png";
import iphone17ProMaxBlackImage from "@/assets/iphone-17-pro-max-black.png";
import iphone17ProNaturalImage from "@/assets/iphone-17-pro-natural.png";
import iphone17ProBlueImage from "@/assets/iphone-17-pro-blue.png";
import iphone17ProWhiteImage from "@/assets/iphone-17-pro-white.png";
import iphone17ProBlackImage from "@/assets/iphone-17-pro-black.png";
import watchImage from "@/assets/watch.png";
import watchSeries10JetBlackImage from "@/assets/watch-series10-jetblack.png";
import watchSeries10RoseGoldImage from "@/assets/watch-series10-rosegold.png";
import watchSeries10SilverImage from "@/assets/watch-series10-silver.png";
import ipadImage from "@/assets/ipad.png";
import ipadAirSpaceGrayImage from "@/assets/ipad-air-space-gray.png";
import ipadAirStarlightImage from "@/assets/ipad-air-starlight.png";
import ipadAirPurpleImage from "@/assets/ipad-air-purple.png";
import ipadAirBlueImage from "@/assets/ipad-air-blue.png";
import airpodsImage from "@/assets/airpods.png";
import macbookImage from "@/assets/macbook.png";
import macbookSpaceGrayImage from "@/assets/macbook-space-gray.png";
import macbookSilverImage from "@/assets/macbook-silver.png";
import macbookAirMidnightImage from "@/assets/macbook-air-midnight.png";
import macbookAirSilverImage from "@/assets/macbook-air-silver.png";
import macbookAirStarlightImage from "@/assets/macbook-air-starlight.png";
import macbookAirSpaceGrayImage from "@/assets/macbook-air-space-gray.png";
import imacBlueImage from "@/assets/imac-blue.png";
import imacPurpleImage from "@/assets/imac-purple.png";
import imacPinkImage from "@/assets/imac-pink.png";
import imacOrangeImage from "@/assets/imac-orange.png";
import imacYellowImage from "@/assets/imac-yellow.png";
import imacGreenImage from "@/assets/imac-green.png";
import imacSilverImage from "@/assets/imac-silver.png";
import dysonV15Image from "@/assets/dyson-v15.png";
import dysonSupersonicImage from "@/assets/dyson-supersonic.png";
import dysonAirwrapImage from "@/assets/dyson-airwrap.png";
import dysonPurifierImage from "@/assets/dyson-purifier.png";
import dysonCorraleImage from "@/assets/dyson-corrale.png";
import dysonWashg1Image from "@/assets/dyson-washg1.png";
import dysonBigQuietImage from "@/assets/dyson-big-quiet.png";
import dysonZoneImage from "@/assets/dyson-zone.png";
import dysonSolarcycleImage from "@/assets/dyson-solarcycle.png";
import yandexStationMaxImage from "@/assets/yandex-max-new.png";
import yandexStation2Image from "@/assets/yandex-station2-new.png";
import yandexStationMini3Image from "@/assets/yandex-mini3-clock.png";
import yandexStationMiniImage from "@/assets/yandex-station-mini-new.png";
import whoop4Image from "@/assets/whoop-4.png";
import whoopBandImage from "@/assets/whoop-band.png";
import whoopBodyImage from "@/assets/whoop-body.png";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
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
    name: "iPhone 17 Pro",
    tagline: "Титан. Такой прочный. Такой лёгкий. Такой Pro.",
    description: "iPhone 17 Pro имеет прочную и лёгкую конструкцию из титана аэрокосмического класса с текстурированной матовой стеклянной задней панелью. Также в нём установлен чип A21 Pro, более продвинутая система камер и настраиваемая кнопка Action.",
    price: 999,
    image: heroIphone,
    colors: [
      { name: "Натуральный титан", hex: "#8F8A81", image: iphone17ProNaturalImage },
      { name: "Синий титан", hex: "#3D4F5C", image: iphone17ProBlueImage },
      { name: "Белый титан", hex: "#F5F5F0", image: iphone17ProWhiteImage },
      { name: "Чёрный титан", hex: "#3C3C3C", image: iphone17ProBlackImage },
    ],
    specs: [
      { label: "Дисплей", value: '6.3" Super Retina XDR с ProMotion' },
      { label: "Чип", value: "A21 Pro с 6-ядерным GPU" },
      { label: "Камера", value: "48 МП основная | 48 МП сверхширокая | 12 МП телефото" },
      { label: "Батарея", value: "До 27 часов воспроизведения видео" },
      { label: "Память", value: "256 ГБ / 512 ГБ / 1 ТБ / 2 ТБ" },
      { label: "Связь", value: "5G, Wi-Fi 7, Bluetooth 5.4" },
    ],
    features: [
      "Корпус из титана аэрокосмического класса",
      "Кнопка Action для быстрого доступа",
      "USB-C со скоростью USB 4",
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
      { name: "Серый космос", hex: "#717378", image: ipadAirSpaceGrayImage },
      { name: "Сияющая звезда", hex: "#F9F3EE", image: ipadAirStarlightImage },
      { name: "Фиолетовый", hex: "#B8B1D1", image: ipadAirPurpleImage },
      { name: "Синий", hex: "#6C9BC4", image: ipadAirBlueImage },
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
    name: "Apple Watch Series 10",
    tagline: "Тоньше. Больше. Быстрее.",
    description: "Представляем самые тонкие Apple Watch с самым большим и продвинутым дисплеем. Широкоугольный OLED-дисплей стал на 40% ярче при взгляде сбоку. Новый чип S10 с 4-ядерным Neural Engine обеспечивает молниеносную работу. Уведомления об апноэ во сне. Датчики глубины и температуры воды для любителей плавания. Зарядка от 0 до 80% всего за 30 минут.",
    price: 399,
    image: watchSeries10JetBlackImage,
    colors: [
      { name: "Чёрный Jet Black", hex: "#1D1D1F", image: watchSeries10JetBlackImage },
      { name: "Розовое золото", hex: "#E8C4B8", image: watchSeries10RoseGoldImage },
      { name: "Серебристый", hex: "#E3E3E8", image: watchSeries10SilverImage },
    ],
    specs: [
      { label: "Дисплей", value: "Wide-angle OLED, на 40% ярче сбоку" },
      { label: "Чип", value: "S10 SiP с 4-ядерным Neural Engine" },
      { label: "Датчики", value: "Глубина до 6 м, температура воды, SpO₂, ЭКГ" },
      { label: "Батарея", value: "До 18 часов, зарядка 0–80% за 30 мин" },
      { label: "Водозащита", value: "WR50, погружение до 6 м" },
      { label: "Размеры", value: "42 мм или 46 мм" },
    ],
    features: [
      "Уведомления об апноэ во сне",
      "Датчик глубины и температуры воды",
      "Приложение «Приливы» для сёрферов и пловцов",
      "Жест двойного касания",
      "Обнаружение аварий и падений",
      "Фитнес-кольца и отслеживание тренировок",
    ],
    category: "apple",
  },
  airpods: {
    id: "airpods",
    name: "AirPods Pro",
    tagline: "Переосмысленный звук.",
    description: "AirPods Pro обеспечивают до 2 раз более эффективное активное шумоподавление, адаптивное аудио, персонализированное пространственное аудио и функцию распознавания разговора для непревзойдённого качества прослушивания.",
    price: 249,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=png-alpha&.v=1",
    colors: [
      { name: "Белый", hex: "#F5F5F7", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=png-alpha&.v=1" },
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
  "airpods-pro": {
    id: "airpods-pro",
    name: "AirPods Pro 2",
    tagline: "Адаптивный звук. Новый уровень.",
    description: "AirPods Pro 2-го поколения с чипом H2 обеспечивают в 2 раза более эффективное шумоподавление, адаптивное аудио и прозрачный режим. Защита слуха и точный поиск через приложение Локатор.",
    price: 249,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=png-alpha&.v=1",
    colors: [
      { name: "Белый", hex: "#F5F5F7", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=png-alpha&.v=1" },
    ],
    specs: [
      { label: "Чип", value: "Apple H2" },
      { label: "Шумоподавление", value: "В 2 раза эффективнее" },
      { label: "Батарея", value: "До 6 часов (30 часов с кейсом)" },
      { label: "Защита", value: "IP54" },
      { label: "Порт", value: "USB-C" },
      { label: "Функции", value: "Адаптивное аудио, прозрачность" },
    ],
    features: [
      "Чип H2 с машинным обучением",
      "Адаптивное аудио",
      "Защита слуха в режиме реального времени",
      "Персонализированное пространственное аудио",
      "Сенсорное управление",
      "Кейс с динамиком для поиска",
    ],
    category: "apple",
  },
  "airpods-3": {
    id: "airpods-3",
    name: "AirPods 3",
    tagline: "Пространственное аудио для всех.",
    description: "AirPods 3-го поколения с пространственным аудио, адаптивным эквалайзером и защитой от пота и воды. До 6 часов прослушивания и MagSafe зарядка.",
    price: 179,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-3rd-gen-2-hero-select?wid=400&hei=400&fmt=png-alpha&.v=1",
    colors: [
      { name: "Белый", hex: "#F5F5F7", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-3rd-gen-2-hero-select?wid=400&hei=400&fmt=png-alpha&.v=1" },
    ],
    specs: [
      { label: "Чип", value: "Apple H1" },
      { label: "Аудио", value: "Пространственное аудио с отслеживанием головы" },
      { label: "Батарея", value: "До 6 часов (30 часов с кейсом)" },
      { label: "Защита", value: "IPX4 от пота и воды" },
      { label: "Зарядка", value: "MagSafe, Qi, Lightning" },
      { label: "Датчик", value: "Датчик нажатия" },
    ],
    features: [
      "Пространственное аудио с Dolby Atmos",
      "Адаптивный эквалайзер",
      "Датчик нажатия для управления",
      "Привет, Siri",
      "Автопереключение между устройствами",
      "Быстрая зарядка — 5 минут = 1 час",
    ],
    category: "apple",
  },
  "airpods-max": {
    id: "airpods-max",
    name: "AirPods Max",
    tagline: "Звук высокой верности.",
    description: "AirPods Max — премиальные накладные наушники с чипом H1, активным шумоподавлением и пространственным аудио. Алюминиевые чашки, дышащий вязаный ободок и до 20 часов работы.",
    price: 549,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=400&hei=400&fmt=png-alpha&.v=1",
    colors: [
      { name: "Серый космос", hex: "#717378", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=400&hei=400&fmt=png-alpha&.v=1" },
      { name: "Серебристый", hex: "#E3E3E8", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=400&hei=400&fmt=png-alpha&.v=1" },
      { name: "Небесно-голубой", hex: "#6C9BC4", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=400&hei=400&fmt=png-alpha&.v=1" },
      { name: "Фиолетовый", hex: "#B8B1D1", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-purple-202409?wid=400&hei=400&fmt=png-alpha&.v=1" },
      { name: "Тёмная ночь", hex: "#3C3C3C", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-midnight-202409?wid=400&hei=400&fmt=png-alpha&.v=1" },
    ],
    specs: [
      { label: "Чип", value: "Apple H1 (два чипа)" },
      { label: "Драйверы", value: "40 мм динамические" },
      { label: "Батарея", value: "До 20 часов" },
      { label: "Материалы", value: "Алюминий, нержавеющая сталь" },
      { label: "Зарядка", value: "Lightning" },
      { label: "Вес", value: "384,8 г" },
    ],
    features: [
      "Вычислительное аудио с H1",
      "Активное шумоподавление",
      "Режим прозрачности",
      "Пространственное аудио с Dolby Atmos",
      "Digital Crown для управления",
      "Smart Case для ультранизкого энергопотребления",
    ],
    category: "apple",
  },
  macbook: {
    id: "macbook",
    name: "MacBook Pro",
    tagline: "Невероятный. Впечатляющий.",
    description: "MacBook Pro взлетает с чипом M3 Pro или M3 Max. Ускоряет самые сложные рабочие процессы с рекордной скоростью. Новый уровень производительности в невероятно тонком корпусе.",
    price: 1999,
    image: macbookSpaceGrayImage,
    colors: [
      { name: "Космический чёрный", hex: "#1D1D1F", image: macbookSpaceGrayImage },
      { name: "Серебристый", hex: "#E3E3E8", image: macbookSilverImage },
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
  "macbook-pro": {
    id: "macbook-pro",
    name: "MacBook Pro 16\"",
    tagline: "Максимальная мощь для профессионалов.",
    description: "MacBook Pro 16 дюймов с чипом M3 Max — это самый мощный ноутбук Apple. Идеален для разработчиков, видеомонтажёров и 3D-художников. До 128 ГБ памяти и невероятная графика.",
    price: 2499,
    image: macbookSpaceGrayImage,
    colors: [
      { name: "Космический чёрный", hex: "#1D1D1F", image: macbookSpaceGrayImage },
      { name: "Серебристый", hex: "#E3E3E8", image: macbookSilverImage },
    ],
    specs: [
      { label: "Дисплей", value: '16,2" Liquid Retina XDR' },
      { label: "Чип", value: "Apple M3 Max до 16 ядер CPU" },
      { label: "Память", value: "До 128 ГБ унифицированной памяти" },
      { label: "Батарея", value: "До 22 часов работы" },
      { label: "Хранилище", value: "До 8 ТБ SSD" },
      { label: "Порты", value: "3x Thunderbolt 4, HDMI 2.1, SDXC" },
    ],
    features: [
      "Дисплей Liquid Retina XDR 3456x2234",
      "ProMotion 120 Гц",
      "40-ядерный GPU",
      "Шестидинамиковая система с пространственным звуком",
      "MagSafe 3 быстрая зарядка",
      "Wi-Fi 6E и Bluetooth 5.3",
    ],
    category: "apple",
  },
  "macbook-air": {
    id: "macbook-air",
    name: "MacBook Air",
    tagline: "Невероятно тонкий. Невероятно быстрый.",
    description: "MacBook Air с чипом M3 — это самый тонкий и лёгкий ноутбук Apple. Бесшумная работа без вентилятора, дисплей Liquid Retina 13,6 или 15,3 дюйма и до 18 часов автономной работы.",
    price: 1099,
    image: macbookAirMidnightImage,
    colors: [
      { name: "Тёмная ночь", hex: "#1D1D1F", image: macbookAirMidnightImage },
      { name: "Серебристый", hex: "#E3E3E8", image: macbookAirSilverImage },
      { name: "Сияющая звезда", hex: "#F9F3EE", image: macbookAirStarlightImage },
      { name: "Космический серый", hex: "#7D7E80", image: macbookAirSpaceGrayImage },
    ],
    specs: [
      { label: "Дисплей", value: '13,6" или 15,3" Liquid Retina' },
      { label: "Чип", value: "Apple M3 с 8-ядерным CPU" },
      { label: "Память", value: "До 24 ГБ унифицированной памяти" },
      { label: "Батарея", value: "До 18 часов работы" },
      { label: "Хранилище", value: "До 2 ТБ SSD" },
      { label: "Вес", value: "Всего 1,24 кг" },
    ],
    features: [
      "Бесшумная работа без вентилятора",
      "MagSafe для зарядки",
      "Камера FaceTime HD 1080p",
      "Четырёхдинамиковая аудиосистема",
      "Touch ID",
      "Два порта Thunderbolt / USB 4",
    ],
    category: "apple",
  },
  "imac": {
    id: "imac",
    name: "iMac 24\"",
    tagline: "Яркий. Мощный. Незаменимый.",
    description: "iMac 24 дюйма с чипом M3 — идеальный настольный компьютер. Потрясающий дисплей Retina 4.5K, семь ярких цветов корпуса и невероятно тонкий профиль всего 11,5 мм.",
    price: 1299,
    image: imacBlueImage,
    colors: [
      { name: "Синий", hex: "#6C9BC4", image: imacBlueImage },
      { name: "Фиолетовый", hex: "#B8B1D1", image: imacPurpleImage },
      { name: "Розовый", hex: "#F4D2D0", image: imacPinkImage },
      { name: "Оранжевый", hex: "#F5A962", image: imacOrangeImage },
      { name: "Жёлтый", hex: "#F5D96A", image: imacYellowImage },
      { name: "Зелёный", hex: "#A3C9A8", image: imacGreenImage },
      { name: "Серебристый", hex: "#E3E3E8", image: imacSilverImage },
    ],
    specs: [
      { label: "Дисплей", value: '24" Retina 4.5K, 500 нит' },
      { label: "Чип", value: "Apple M3 с 8-ядерным CPU" },
      { label: "Память", value: "До 24 ГБ унифицированной памяти" },
      { label: "Хранилище", value: "До 2 ТБ SSD" },
      { label: "Камера", value: "FaceTime HD 1080p с Center Stage" },
      { label: "Звук", value: "Шестидинамиковая система" },
    ],
    features: [
      "Дисплей Retina 4.5K с True Tone",
      "Толщина профиля всего 11,5 мм",
      "Камера 1080p с Center Stage",
      "Пространственный звук с Dolby Atmos",
      "Magic Keyboard с Touch ID",
      "До 4 портов Thunderbolt / USB 4",
    ],
    category: "apple",
  },
  "mac-studio": {
    id: "mac-studio",
    name: "Mac Studio",
    tagline: "Студийная мощь. Компактный размер.",
    description: "Mac Studio с чипом M2 Ultra — это невероятная производительность в компактном корпусе. До 192 ГБ унифицированной памяти и 76-ядерный GPU для самых требовательных профессиональных задач.",
    price: 1999,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-select-202306?wid=400&hei=400&fmt=png-alpha&.v=1",
    colors: [
      { name: "Серебристый", hex: "#E3E3E8", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-select-202306?wid=400&hei=400&fmt=png-alpha&.v=1" },
    ],
    specs: [
      { label: "Чип", value: "Apple M2 Max или M2 Ultra" },
      { label: "CPU", value: "До 24 ядер" },
      { label: "GPU", value: "До 76 ядер" },
      { label: "Память", value: "До 192 ГБ унифицированной" },
      { label: "Хранилище", value: "До 8 ТБ SSD" },
      { label: "Порты", value: "6x Thunderbolt 4, 2x USB-A, HDMI, 10Gb Ethernet" },
    ],
    features: [
      "Тепловая система с продвинутым охлаждением",
      "Поддержка до 8 дисплеев",
      "SD-слот UHS-II",
      "Высокоскоростной SSD до 7,4 ГБ/с",
      "Pro и Ultra конфигурации",
      "Идеален для видеопроизводства и 3D",
    ],
    category: "apple",
  },
  "mac-mini": {
    id: "mac-mini",
    name: "Mac mini",
    tagline: "Больше мощи. Меньше места.",
    description: "Mac mini с чипом M2 или M2 Pro — это мощный настольный компьютер в невероятно компактном корпусе. Идеален для дома, офиса или как сервер.",
    price: 599,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301?wid=400&hei=400&fmt=png-alpha&.v=1",
    colors: [
      { name: "Серебристый", hex: "#E3E3E8", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301?wid=400&hei=400&fmt=png-alpha&.v=1" },
    ],
    specs: [
      { label: "Чип", value: "Apple M2 или M2 Pro" },
      { label: "Память", value: "До 32 ГБ унифицированной" },
      { label: "Хранилище", value: "До 8 ТБ SSD" },
      { label: "Порты", value: "2x Thunderbolt 4, 2x USB-A, HDMI, Ethernet" },
      { label: "Wi-Fi", value: "Wi-Fi 6E" },
      { label: "Размер", value: "19,7 x 19,7 x 3,5 см" },
    ],
    features: [
      "Компактный алюминиевый корпус",
      "Поддержка до 3 дисплеев",
      "10 Gigabit Ethernet опционально",
      "Энергоэффективность",
      "Тихая работа",
      "Идеален как медиасервер",
    ],
    category: "apple",
  },
  // Dyson Products
  dyson: {
    id: "dyson",
    name: "Dyson V15 Detect",
    tagline: "Самый мощный беспроводной пылесос.",
    description: "Мотор Dyson Hyperdymium™ вращается со скоростью до 125 000 об/мин, генерируя мощность всасывания 240 воздушных ватт. Лазерная насадка Fluffy Optic™ выявляет в 2 раза больше невидимой пыли на твёрдых полах. Пьезодатчик классифицирует и подсчитывает частицы 15 000 раз в секунду, отображая данные на LCD-экране в реальном времени.",
    price: 749,
    originalPrice: 849,
    image: dysonV15Image,
    colors: [
      { name: "Никель/Жёлтый", hex: "#FFD700", image: dysonV15Image },
      { name: "Железо/Синий", hex: "#4A5568", image: dysonV15Image },
    ],
    specs: [
      { label: "Мотор", value: "Dyson Hyperdymium™ 125 000 об/мин" },
      { label: "Мощность всасывания", value: "240 AW (воздушных ватт)" },
      { label: "Время работы", value: "До 60 минут в режиме Eco" },
      { label: "Объём контейнера", value: "0,76 л" },
      { label: "Вес", value: "3,1 кг" },
      { label: "Фильтрация", value: "Полностью герметичная HEPA" },
    ],
    features: [
      "Насадка Fluffy Optic™ с лазером",
      "Пьезодатчик подсчёта частиц",
      "LCD-экран с данными в реальном времени",
      "Насадка Digital Motorbar™ с автоматическим удалением волос",
      "Съёмная батарея с возможностью замены",
      "Трансформируется в ручной пылесос",
    ],
    category: "partner",
  },
  "dyson-supersonic": {
    id: "dyson-supersonic",
    name: "Dyson Supersonic",
    tagline: "Быстрая сушка. Без повреждений.",
    description: "Мотор Dyson Hyperdymium™ вращается со скоростью до 110 000 об/мин, создавая высокоскоростной контролируемый воздушный поток 13 л/сек. Интеллектуальный датчик температуры измеряет температуру воздуха 40 раз в секунду, регулируя нагревательный элемент для защиты волос от экстремального теплового повреждения.",
    price: 429,
    image: dysonSupersonicImage,
    colors: [
      { name: "Никель/Медь", hex: "#D4A574", image: dysonSupersonicImage },
      { name: "Прусский синий/Медь", hex: "#003153", image: dysonSupersonicImage },
      { name: "Розовый/Никель", hex: "#FF69B4", image: dysonSupersonicImage },
    ],
    specs: [
      { label: "Мотор", value: "Dyson Hyperdymium™ V9 110 000 об/мин" },
      { label: "Воздушный поток", value: "13 литров в секунду" },
      { label: "Температурный контроль", value: "40 измерений в секунду" },
      { label: "Режимы скорости", value: "3 скорости + холодный обдув" },
      { label: "Длина кабеля", value: "2,7 м" },
      { label: "Вес", value: "659 г" },
    ],
    features: [
      "Интеллектуальный контроль температуры 40×/сек",
      "5 магнитных насадок в комплекте",
      "Технология Air Multiplier™",
      "Акустическая оптимизация шума",
      "Быстрая сушка без повреждений",
      "Сбалансированный центр тяжести",
    ],
    category: "partner",
  },
  "dyson-airwrap": {
    id: "dyson-airwrap",
    name: "Dyson Airwrap",
    tagline: "Эффект Коанда. Стайлинг воздухом.",
    description: "Мультистайлер Dyson Airwrap использует эффект Коанда — аэродинамический феномен, при котором высокоскоростной воздушный поток притягивает и накручивает волосы на цилиндр. Завивка, объём и разглаживание без экстремального теплового повреждения. Максимальная температура не превышает 150°C.",
    price: 599,
    originalPrice: 649,
    image: dysonAirwrapImage,
    colors: [
      { name: "Никель/Медь", hex: "#D4A574", image: dysonAirwrapImage },
      { name: "Прусский синий/Медь", hex: "#003153", image: dysonAirwrapImage },
      { name: "Розовый/Никель", hex: "#FF69B4", image: dysonAirwrapImage },
    ],
    specs: [
      { label: "Мотор", value: "Dyson Hyperdymium™ 110 000 об/мин" },
      { label: "Макс. температура", value: "150°C (без экстремального тепла)" },
      { label: "Режимы", value: "3 скорости × 3 температуры" },
      { label: "Длина кабеля", value: "2,7 м" },
      { label: "Вес", value: "662 г" },
      { label: "Комплект", value: "6+ сменных насадок" },
    ],
    features: [
      "Эффект Коанда — притягивает волосы воздухом",
      "Без экстремального теплового повреждения",
      "Насадки Coanda для завивки в обе стороны",
      "Щётка Round Volumising для объёма",
      "Расчёска Smoothing для разглаживания",
      "Адаптировано для всех типов волос",
    ],
    category: "partner",
  },
  "dyson-purifier": {
    id: "dyson-purifier",
    name: "Dyson Purifier Cool",
    tagline: "HEPA H13. Полностью герметичная фильтрация.",
    description: "Очиститель воздуха Dyson Purifier Cool захватывает 99,97% частиц размером до 0,3 микрона. Полностью герметичная система фильтрации соответствует стандарту HEPA H13. Четыре датчика постоянно анализируют качество воздуха: PM2.5, PM10, летучие органические соединения и NO₂. Технология Air Multiplier™ проецирует очищенный воздух на площадь до 81 м².",
    price: 549,
    image: dysonPurifierImage,
    colors: [
      { name: "Белый/Серебристый", hex: "#E3E3E8", image: dysonPurifierImage },
      { name: "Никель/Синий", hex: "#003153", image: dysonPurifierImage },
    ],
    specs: [
      { label: "Фильтрация", value: "HEPA H13 + активированный уголь" },
      { label: "Покрытие", value: "До 81 м² помещения" },
      { label: "Воздушный поток", value: "350 литров в секунду" },
      { label: "Датчики", value: "PM2.5, PM10, VOC, NO₂" },
      { label: "Уровень шума", value: "33-63 дБ" },
      { label: "Габариты", value: "105 × 22 × 22 см" },
    ],
    features: [
      "Полностью герметичная HEPA H13 фильтрация",
      "Угольный фильтр Tris-coated для газов и запахов",
      "Автоматический режим реагирования на загрязнение",
      "Режим рассеивания Diffused Mode",
      "Ночной режим с затемнением дисплея",
      "Управление через приложение MyDyson",
    ],
    category: "partner",
  },
  "dyson-purifier-hot": {
    id: "dyson-purifier-hot",
    name: "Dyson Purifier Hot+Cool",
    tagline: "Очищает. Охлаждает. Обогревает.",
    description: "Dyson Purifier Hot+Cool — три устройства в одном корпусе. Захватывает 99,97% частиц размером 0,3 микрона с HEPA H13 фильтрацией. Керамический нагревательный элемент мощностью 2000 Вт обеспечивает быстрый и равномерный обогрев помещения. Термостат с точностью до 1°C поддерживает выбранную температуру от 1°C до 37°C.",
    price: 749,
    image: dysonPurifierImage,
    colors: [
      { name: "Белый/Серебристый", hex: "#E3E3E8", image: dysonPurifierImage },
      { name: "Никель/Синий", hex: "#003153", image: dysonPurifierImage },
    ],
    specs: [
      { label: "Фильтрация", value: "HEPA H13 + активированный уголь" },
      { label: "Мощность обогрева", value: "2000 Вт керамический элемент" },
      { label: "Диапазон температур", value: "1°C – 37°C с точностью 1°C" },
      { label: "Датчики", value: "PM2.5, PM10, VOC, NO₂, температура" },
      { label: "Покрытие", value: "До 81 м²" },
      { label: "Уровень шума", value: "35-62 дБ" },
    ],
    features: [
      "3 в 1: очиститель, обогреватель, вентилятор",
      "Полностью герметичная HEPA H13 фильтрация",
      "Керамический обогрев с термостатом ±1°C",
      "Таймер отключения до 9 часов",
      "Инфракрасный пульт дистанционного управления",
      "Управление через приложение MyDyson",
    ],
    category: "partner",
  },
  "dyson-corrale": {
    id: "dyson-corrale",
    name: "Dyson Corrale",
    tagline: "Гибкие пластины. Меньше повреждений.",
    description: "Dyson Corrale — единственный выпрямитель с гибкими пластинами из марганцево-медного сплава, которые адаптируются к форме пряди и удерживают волосы с меньшим натяжением. Снижение повреждения волос на 50% по сравнению с жёсткими пластинами. Беспроводная работа до 30 минут с 4-ячеечной литий-ионной батареей.",
    price: 499,
    image: dysonCorraleImage,
    colors: [
      { name: "Никель/Медь", hex: "#D4A574", image: dysonCorraleImage },
      { name: "Прусский синий/Медь", hex: "#003153", image: dysonCorraleImage },
      { name: "Розовый/Никель", hex: "#FF69B4", image: dysonCorraleImage },
    ],
    specs: [
      { label: "Пластины", value: "Гибкие марганцево-медные" },
      { label: "Температура", value: "165°C / 185°C / 210°C" },
      { label: "Беспроводная работа", value: "До 30 минут" },
      { label: "Время зарядки", value: "70 минут полная зарядка" },
      { label: "Вес", value: "561 г" },
      { label: "Кабель", value: "3,6 м магнитный" },
    ],
    features: [
      "Гибкие пластины — на 50% меньше повреждений",
      "Беспроводная работа с Li-ion батареей",
      "Интеллектуальный контроль температуры 100×/сек",
      "Функция Flight-ready для путешествий",
      "Автоотключение через 10 минут бездействия",
      "Термостойкий дорожный чехол в комплекте",
    ],
    category: "partner",
  },
  "dyson-v15s-submarine": {
    id: "dyson-v15s-submarine",
    name: "Dyson V15s Detect Submarine",
    tagline: "Сухая + влажная уборка. Один пылесос.",
    description: "Dyson V15s Detect Submarine — первый беспроводной пылесос Dyson для сухой и влажной уборки. Насадка Submarine™ с микроволокнистым валиком и автоматической подачей воды глубоко очищает твёрдые полы. Система Fluffy Optic™ с лазером выявляет невидимую пыль. Мотор Hyperdymium™ генерирует 240 AW мощности всасывания.",
    price: 849,
    image: dysonV15Image,
    colors: [
      { name: "Золотой/Никель", hex: "#FFD700", image: dysonV15Image },
      { name: "Синий/Никель", hex: "#4A5568", image: dysonV15Image },
    ],
    specs: [
      { label: "Мотор", value: "Dyson Hyperdymium™ 125 000 об/мин" },
      { label: "Мощность всасывания", value: "240 AW (воздушных ватт)" },
      { label: "Время работы", value: "До 60 минут в режиме Eco" },
      { label: "Бак для воды", value: "300 мл чистой воды" },
      { label: "Вес", value: "3,2 кг" },
      { label: "Фильтрация", value: "Полностью герметичная HEPA" },
    ],
    features: [
      "Насадка Submarine™ для влажной уборки",
      "Fluffy Optic™ с лазерным обнаружением пыли",
      "LCD-экран с данными в реальном времени",
      "Автоматическая подача воды на валик",
      "Digital Motorbar™ для ковров",
      "Док-станция для зарядки и хранения",
    ],
    category: "partner",
  },
  "dyson-v12-slim": {
    id: "dyson-v12-slim",
    name: "Dyson V12 Detect Slim",
    tagline: "Мощность V15. Вес на 30% меньше.",
    description: "Dyson V12 Detect Slim — самый лёгкий пылесос в линейке Detect. Мотор Hyperdymium™ генерирует 150 AW мощности при весе всего 2,2 кг. Лазерная насадка Slim Fluffy™ выявляет невидимую пыль. Пьезодатчик определяет размер и количество частиц, автоматически регулируя мощность.",
    price: 379,
    originalPrice: 729,
    image: dysonV15Image,
    colors: [
      { name: "Жёлтый/Никель", hex: "#FFD700", image: dysonV15Image },
      { name: "Фиолетовый/Никель", hex: "#8B5CF6", image: dysonV15Image },
    ],
    specs: [
      { label: "Мотор", value: "Dyson Hyperdymium™ 125 000 об/мин" },
      { label: "Мощность всасывания", value: "150 AW (воздушных ватт)" },
      { label: "Время работы", value: "До 60 минут в режиме Eco" },
      { label: "Объём контейнера", value: "0,35 л компактный" },
      { label: "Вес", value: "2,2 кг — на 30% легче V15" },
      { label: "Фильтрация", value: "Полностью герметичная HEPA" },
    ],
    features: [
      "Лазерная насадка Slim Fluffy™",
      "Пьезодатчик с автоматической регулировкой мощности",
      "LCD-дисплей в реальном времени",
      "Компактный и маневренный дизайн",
      "Идеален для небольших помещений",
      "Трансформируется в ручной пылесос",
    ],
    category: "partner",
  },
  "dyson-washg1": {
    id: "dyson-washg1",
    name: "Dyson WashG1",
    tagline: "Революция в влажной уборке.",
    description: "Dyson WashG1 — специализированное устройство для влажной уборки твёрдых полов. Два микроволокнистых валика и система разделения чистой и грязной воды.",
    price: 569,
    originalPrice: 769,
    image: dysonWashg1Image,
    colors: [
      { name: "Чёрный/Синий", hex: "#1A365D", image: dysonWashg1Image },
    ],
    specs: [
      { label: "Валики", value: "2 микроволокнистых валика" },
      { label: "Бак чистой воды", value: "1 л" },
      { label: "Бак грязной воды", value: "0,9 л" },
      { label: "Время работы", value: "До 25 минут" },
      { label: "Вес", value: "4,8 кг" },
      { label: "Ширина уборки", value: "29 см" },
    ],
    features: [
      "Разделение чистой и грязной воды",
      "Два вращающихся валика",
      "Удаление пятен и грязи",
      "Подходит для всех твёрдых полов",
      "Самоочистка валиков",
      "Удаление волос и шерсти",
    ],
    category: "partner",
  },
  "dyson-airwrap-id": {
    id: "dyson-airwrap-id",
    name: "Dyson Airwrap i.d.",
    tagline: "Персонализированная укладка.",
    description: "Dyson Airwrap i.d. — новейший мультистайлер с интеллектуальным определением типа волос. Автоматически настраивает параметры для идеальной укладки.",
    price: 479,
    originalPrice: 649,
    image: dysonAirwrapImage,
    colors: [
      { name: "Прусский синий/Медь", hex: "#003153", image: dysonAirwrapImage },
      { name: "Янтарный шёлк", hex: "#FFBF00", image: dysonAirwrapImage },
      { name: "Никель/Медь", hex: "#B87333", image: dysonAirwrapImage },
    ],
    specs: [
      { label: "Мотор", value: "Dyson Hyperdymium™" },
      { label: "Технология", value: "i.d. сенсор" },
      { label: "Режимы", value: "Персонализированные настройки" },
      { label: "Длина кабеля", value: "2,7 м" },
      { label: "Вес", value: "662 г" },
      { label: "Комплект", value: "6+ насадок" },
    ],
    features: [
      "Технология i.d. для определения типа волос",
      "Автоматическая настройка температуры",
      "Приложение MyDyson",
      "Персонализированные рекомендации",
      "Эффект Коанда",
      "Без экстремального тепла",
    ],
    category: "partner",
  },
  "dyson-big-quiet": {
    id: "dyson-big-quiet",
    name: "Dyson Purifier Big+Quiet",
    tagline: "Мощная очистка. Тихая работа.",
    description: "Dyson Purifier Big+Quiet Formaldehyde — самый тихий и мощный очиститель воздуха Dyson. Очищает большие помещения от формальдегида и других загрязнителей.",
    price: 999,
    image: dysonBigQuietImage,
    colors: [
      { name: "Никель/Синий", hex: "#003153", image: dysonBigQuietImage },
      { name: "Никель/Золотой", hex: "#FFD700", image: dysonBigQuietImage },
    ],
    specs: [
      { label: "Фильтрация", value: "HEPA H13 + каталитический" },
      { label: "Площадь", value: "До 100 м²" },
      { label: "Воздушный поток", value: "500 л/сек" },
      { label: "Датчики", value: "PM2.5, VOC, NO2, формальдегид" },
      { label: "Шум", value: "20-47 дБ" },
      { label: "Размеры", value: "120 x 31 x 31 см" },
    ],
    features: [
      "Уничтожение формальдегида",
      "Самый тихий очиститель Dyson",
      "HEPA H13 фильтрация",
      "Cone Aerodynamics",
      "Управление через MyDyson",
      "Ночной режим",
    ],
    category: "partner",
  },
  "dyson-zone": {
    id: "dyson-zone",
    name: "Dyson Zone",
    tagline: "Наушники с очисткой воздуха.",
    description: "Dyson Zone — первые наушники Dyson с технологией очистки воздуха. Активное шумоподавление и персональная очистка воздуха в одном устройстве.",
    price: 699,
    image: dysonZoneImage,
    colors: [
      { name: "Прусский синий/Медь", hex: "#003153", image: dysonZoneImage },
      { name: "Ультра синий/Голубой", hex: "#0066CC", image: dysonZoneImage },
      { name: "Оникс/Чёрный", hex: "#2D2D2D", image: dysonZoneImage },
    ],
    specs: [
      { label: "Звук", value: "40 мм неодимовые драйверы" },
      { label: "Шумоподавление", value: "Активное ANC" },
      { label: "Фильтрация", value: "Электростатические фильтры" },
      { label: "Батарея", value: "До 50 часов (только аудио)" },
      { label: "Вес", value: "595 г" },
      { label: "Связь", value: "Bluetooth 5.0" },
    ],
    features: [
      "Активное шумоподавление",
      "Персональная очистка воздуха",
      "Hi-Fi звук",
      "Съёмный визор",
      "Приложение MyDyson",
      "До 4 часов с очисткой воздуха",
    ],
    category: "partner",
  },
  "dyson-solarcycle": {
    id: "dyson-solarcycle",
    name: "Dyson Solarcycle Morph",
    tagline: "Свет, который адаптируется.",
    description: "Dyson Solarcycle Morph — интеллектуальная лампа, которая адаптируется к вашим потребностям. Отслеживает естественный свет и автоматически настраивает яркость и цветовую температуру.",
    price: 649,
    image: dysonSolarcycleImage,
    colors: [
      { name: "Белый/Серебристый", hex: "#E3E3E8", image: dysonSolarcycleImage },
      { name: "Чёрный", hex: "#2D2D2D", image: dysonSolarcycleImage },
    ],
    specs: [
      { label: "Яркость", value: "До 1000 люкс" },
      { label: "Цветовая температура", value: "2700K-6500K" },
      { label: "Срок службы", value: "60 лет*" },
      { label: "Режимы", value: "4 трансформации" },
      { label: "Датчики", value: "Свет, движение, присутствие" },
      { label: "Связь", value: "Bluetooth, приложение" },
    ],
    features: [
      "4 режима трансформации",
      "Отслеживание дневного света",
      "Защита глаз от мерцания",
      "60 лет работы*",
      "Сенсор движения",
      "Управление через приложение",
    ],
    category: "partner",
  },
  alisa: {
    id: "alisa",
    name: "Яндекс Станция Макс",
    tagline: "Премиальный звук и умный хаб.",
    description: "Яндекс Станция Макс — флагманская умная колонка с мощным звуком 65 Вт и встроенным хабом умного дома. Управляйте всеми устройствами голосом.",
    price: 249,
    image: yandexStationMaxImage,
    colors: [
      { name: "Графит", hex: "#1A1A1A", image: yandexStationMaxImage },
      { name: "Серый", hex: "#8A8A8A", image: yandexStationMaxImage },
    ],
    specs: [
      { label: "Динамик", value: "65 Вт (50 Вт вуфер + 2x7.5 Вт твитера)" },
      { label: "Микрофоны", value: "7 дальних микрофонов" },
      { label: "Связь", value: "Wi-Fi 6, Bluetooth 5.0, Zigbee 3.0" },
      { label: "LED-панель", value: "Анимированная подсветка" },
      { label: "Размеры", value: "141 x 141 x 231 мм" },
      { label: "Вес", value: "2,9 кг" },
    ],
    features: [
      "Объёмный звук 360°",
      "Встроенный хаб Zigbee",
      "Голосовой помощник Алиса",
      "Мультирум",
      "HDMI для ТВ",
      "Распознавание голоса владельца",
    ],
    category: "partner",
  },
  "alisa-station-2": {
    id: "alisa-station-2",
    name: "Яндекс Станция 2",
    tagline: "Мощный звук для дома.",
    description: "Яндекс Станция 2 — умная колонка с качественным звуком 30 Вт и голосовым помощником Алиса. Идеальна для гостиной.",
    price: 169,
    image: yandexStation2Image,
    colors: [
      { name: "Антрацит", hex: "#2D2D2D", image: yandexStation2Image },
      { name: "Кобальт", hex: "#7B68EE", image: yandexStation2Image },
      { name: "Песочный", hex: "#C4A77D", image: yandexStation2Image },
    ],
    specs: [
      { label: "Динамик", value: "30 Вт широкополосный" },
      { label: "Микрофоны", value: "4 дальних микрофона" },
      { label: "Связь", value: "Wi-Fi 5, Bluetooth 5.0" },
      { label: "LED-кольцо", value: "Индикатор состояния" },
      { label: "Размеры", value: "123 x 123 x 199 мм" },
      { label: "Вес", value: "1,5 кг" },
    ],
    features: [
      "Чистый мощный звук",
      "Голосовой помощник Алиса",
      "Управление умным домом",
      "Музыка и подкасты",
      "Мультирум",
      "Звонки через колонку",
    ],
    category: "partner",
  },
  "alisa-mini": {
    id: "alisa-mini",
    name: "Яндекс Станция Мини 3 с часами",
    tagline: "Компактный помощник с дисплеем и ZigBee.",
    description: "Умная колонка Яндекс Станция Мини 3 с часами, Алиса, ZigBee, Wi-Fi, Bluetooth. Компактный размер с улучшенным звуком.",
    price: 89,
    image: yandexStationMini3Image,
    colors: [
      { name: "Графит", hex: "#1A1A1A", image: yandexStationMini3Image },
      { name: "Серый", hex: "#8A8A8A", image: yandexStationMini3Image },
    ],
    specs: [
      { label: "Динамик", value: "10 Вт" },
      { label: "Микрофоны", value: "4 микрофона" },
      { label: "Связь", value: "Wi-Fi, Bluetooth 5.0, ZigBee" },
      { label: "Дисплей", value: "LED-часы" },
      { label: "Размеры", value: "97 x 98 x 55 мм" },
      { label: "Вес", value: "260 г" },
    ],
    features: [
      "LED-дисплей с часами",
      "Встроенный хаб ZigBee",
      "Голосовой помощник Алиса",
      "Умный будильник",
      "Управление умным домом",
      "Музыка и радио",
    ],
    category: "partner",
  },
  "alisa-lite": {
    id: "alisa-lite",
    name: "Яндекс Станция Мини",
    tagline: "Компактная с мощным звуком.",
    description: "Умная колонка Яндекс Станция Мини с Алисой. Компактный дизайн и качественный звук для любой комнаты.",
    price: 69,
    image: yandexStationMiniImage,
    colors: [
      { name: "Графит", hex: "#1A1A1A", image: yandexStationMiniImage },
      { name: "Серый", hex: "#8A8A8A", image: yandexStationMiniImage },
    ],
    specs: [
      { label: "Динамик", value: "10 Вт" },
      { label: "Микрофоны", value: "4 микрофона" },
      { label: "Связь", value: "Wi-Fi, Bluetooth 5.0" },
      { label: "Размеры", value: "90 x 90 x 45 мм" },
      { label: "Вес", value: "200 г" },
    ],
    features: [
      "Компактный размер",
      "Качественный звук 10 Вт",
      "Голосовой помощник Алиса",
      "Управление умным домом",
      "Музыка и радио",
      "Таймеры и будильники",
    ],
    category: "partner",
  },
  // Whoop Products (Fitness Trackers)
  whoop: {
    id: "whoop",
    name: "Whoop 4.0",
    tagline: "Раскройте свой потенциал.",
    description: "Whoop 4.0 — профессиональный фитнес-трекер для мониторинга восстановления, сна и нагрузки. Без экрана, без отвлечений — только данные для роста.",
    price: 239,
    image: whoop4Image,
    colors: [
      { name: "Onyx", hex: "#1A1A1A", image: whoop4Image },
      { name: "Lunar", hex: "#E8E8E8", image: whoopBandImage },
    ],
    specs: [
      { label: "Датчики", value: "5 LEDs, 4 фотодиода, термистор" },
      { label: "Батарея", value: "До 5 дней" },
      { label: "Водозащита", value: "IP68 (до 10 м)" },
      { label: "Память", value: "3 дня локально" },
      { label: "Вес", value: "27,5 г" },
      { label: "Зарядка", value: "Беспроводная, на ходу" },
    ],
    features: [
      "Оценка восстановления Recovery",
      "Анализ нагрузки Strain",
      "Мониторинг сна Sleep Coach",
      "Вариабельность пульса HRV",
      "Дыхательная частота",
      "Персональный AI-коуч",
    ],
    category: "partner",
  },
  "whoop-band": {
    id: "whoop-band",
    name: "Whoop SuperKnit Band",
    tagline: "Комфорт на весь день.",
    description: "Whoop SuperKnit — премиальный ремешок из дышащей ткани. Идеален для круглосуточного ношения, тренировок и сна.",
    price: 49,
    image: whoopBandImage,
    colors: [
      { name: "Onyx", hex: "#1A1A1A", image: whoop4Image },
      { name: "Lunar", hex: "#E8E8E8", image: whoopBandImage },
      { name: "Arctic", hex: "#87CEEB", image: whoopBandImage },
    ],
    specs: [
      { label: "Материал", value: "SuperKnit нейлон" },
      { label: "Совместимость", value: "Whoop 4.0, 3.0" },
      { label: "Размеры", value: "S, M, L, XL" },
      { label: "Стирка", value: "Машинная стирка" },
      { label: "Застёжка", value: "Быстросъёмная" },
    ],
    features: [
      "Дышащий материал",
      "Гипоаллергенный",
      "Быстросохнущий",
      "Удобен для сна",
      "Не раздражает кожу",
    ],
    category: "partner",
  },
  "whoop-body": {
    id: "whoop-body",
    name: "Whoop Body Sensor",
    tagline: "Носите где угодно.",
    description: "Whoop Body — универсальное крепление для ношения сенсора на теле: на бицепсе, лодыжке или в одежде Whoop Body.",
    price: 59,
    image: whoopBodyImage,
    colors: [
      { name: "Onyx", hex: "#1A1A1A", image: whoopBodyImage },
    ],
    specs: [
      { label: "Крепление", value: "Бицепс, лодыжка, одежда" },
      { label: "Материал", value: "Эластичный нейлон" },
      { label: "Совместимость", value: "Whoop 4.0" },
      { label: "Размеры", value: "S, M, L" },
    ],
    features: [
      "Альтернатива ношению на запястье",
      "Точные измерения",
      "Скрытое ношение",
      "Для спортсменов",
    ],
    category: "partner",
  },
};

export const getProductsByCategory = (category: "apple" | "partner") => {
  return Object.values(products).filter((p) => p.category === category);
};
