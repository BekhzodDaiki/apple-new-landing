import heroIphone from "@/assets/hero-iphone.png";
import iphone17ProMaxNaturalImage from "@/assets/iphone-17-pro-max-natural.png";
import iphone17ProMaxBlueImage from "@/assets/iphone-17-pro-max-blue.png";
import iphone17ProMaxWhiteImage from "@/assets/iphone-17-pro-max-white.png";
import iphone17ProMaxBlackImage from "@/assets/iphone-17-pro-max-black.png";
import iphone17ProNaturalImage from "@/assets/iphone-17-pro-natural.png";
import iphone17ProBlueImage from "@/assets/iphone-17-pro-blue.png";
import iphone17ProWhiteImage from "@/assets/iphone-17-pro-white.png";
import iphone17ProBlackImage from "@/assets/iphone-17-pro-black.png";
import iphone17PinkImage from "@/assets/iphone-17-pink.png";
import iphone17YellowImage from "@/assets/iphone-17-yellow.png";
import iphone17PurpleImage from "@/assets/iphone-17-purple.png";
import iphone17BlueImage from "@/assets/iphone-17-blue.png";
import iphone17BlackImage from "@/assets/iphone-17-black.png";
import iphone17AirBlueImage from "@/assets/iphone-17-air-blue.png";
import iphone17AirSilverImage from "@/assets/iphone-17-air-silver.png";
import iphone17AirBlackImage from "@/assets/iphone-17-air-black.png";
import watchImage from "@/assets/watch.png";
import watchSeries10JetBlackImage from "@/assets/watch-series10-jetblack.png";
import watchSeries10RoseGoldImage from "@/assets/watch-series10-rosegold.png";
import watchSeries10SilverImage from "@/assets/watch-series10-silver.png";
import watchUltra2NaturalImage from "@/assets/watch-ultra2-natural.png";
import watchUltra2BlackImage from "@/assets/watch-ultra2-black.png";
import watchSEMidnightImage from "@/assets/watch-se-midnight.png";
import watchSEStarlightImage from "@/assets/watch-se-starlight.png";
import watchSESilverImage from "@/assets/watch-se-silver.png";
import ipadImage from "@/assets/ipad.png";
import ipadProSpaceGrayImage from "@/assets/ipad-pro-space-gray.png";
import ipadProSilverImage from "@/assets/ipad-pro-silver.png";
import ipadAirSpaceGrayImage from "@/assets/ipad-air-space-gray.png";
import ipadAirStarlightImage from "@/assets/ipad-air-starlight.png";
import ipadAirPurpleImage from "@/assets/ipad-air-purple.png";
import ipadAirBlueImage from "@/assets/ipad-air-blue.png";
import ipad10BlueImage from "@/assets/ipad-10-blue.png";
import ipad10PinkImage from "@/assets/ipad-10-pink.png";
import ipad10YellowImage from "@/assets/ipad-10-yellow.png";
import ipad10SilverImage from "@/assets/ipad-10-silver.png";
import airpodsImage from "@/assets/airpods.png";
import macbookImage from "@/assets/macbook.png";
import macHeroImage from "@/assets/mac-hero.png";
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
import dysonHeroImage from "@/assets/dyson-hero.png";
import yandexStationMaxImage from "@/assets/yandex-max-new.png";
import yandexStation2Image from "@/assets/yandex-station2-new.png";
import yandexStationMini3Image from "@/assets/yandex-mini3-clock.png";
import yandexStationMiniImage from "@/assets/yandex-station-mini-new.png";
import alisaHeroImage from "@/assets/alisa-hero.png";
import whoop4Image from "@/assets/whoop-4.png";
import whoopBandImage from "@/assets/whoop-band.png";
import whoopBodyImage from "@/assets/whoop-body.png";

export interface ConsiderItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ColorImage {
  hex: string;
  image: string;
}

export interface LineupProduct {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  isNew?: boolean;
  colors?: string[];
  colorImages?: ColorImage[];
}

export interface CategoryInfo {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  promoBanner: string;
  considerations: ConsiderItem[];
  lineupTitle: string;
  lineup: LineupProduct[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export const categoryData: Record<string, CategoryInfo> = {
  iphone: {
    heroTitle: "iPhone",
    heroSubtitle: "Создан, чтобы им восхищались. Создан, чтобы служить долго.",
    heroImage: iphone17ProNaturalImage,
    promoBanner: "Получите до $180–$670 в кредит на iPhone при сдаче iPhone 13 или новее.",
    considerations: [
      {
        title: "Начало работы",
        description: "Переход с Android на iPhone прост. Перенесите фото, контакты и многое другое за минуты.",
        icon: "🔄",
      },
      {
        title: "Создан, чтобы служить",
        description: "iPhone сохраняет ценность дольше других смартфонов. Премиальные материалы и обновления ПО на годы.",
        icon: "💎",
      },
      {
        title: "iOS и Apple Intelligence",
        description: "Новый облик. Ещё больше магии. Испытайте силу Apple Intelligence.",
        icon: "🧠",
      },
      {
        title: "Конфиденциальность",
        description: "Ваши данные. Именно там, где вы хотите. Конфиденциальность — основное право человека.",
        icon: "🔒",
      },
      {
        title: "Передовые камеры",
        description: "Представьте свои лучшие фото и видео. Камеры профессионального уровня в каждом iPhone.",
        icon: "📸",
      },
      {
        title: "Спокойствие",
        description: "Полезные функции. В сети и вне её. Экстренный вызов SOS и обнаружение аварий.",
        icon: "🛡️",
      },
    ],
    lineupTitle: "Изучите линейку",
    lineup: [
      {
        id: "iphone-17-pro-max",
        name: "iPhone 17 Pro Max",
        tagline: "Максимум iPhone. Титановый корпус. Чип A21 Pro.",
        price: "От $1199 или $49,95/мес.",
        image: iphone17ProMaxNaturalImage,
        isNew: true,
        colorImages: [
          { hex: "#8F8A81", image: iphone17ProMaxNaturalImage },
          { hex: "#3D4F5C", image: iphone17ProMaxBlueImage },
          { hex: "#F5F5F0", image: iphone17ProMaxWhiteImage },
          { hex: "#3C3C3C", image: iphone17ProMaxBlackImage },
        ],
      },
      {
        id: "iphone-17-pro",
        name: "iPhone 17 Pro",
        tagline: "Титановый корпус. Чип A21 Pro. ProMotion.",
        price: "От $999 или $41,62/мес.",
        image: iphone17ProNaturalImage,
        isNew: true,
        colorImages: [
          { hex: "#8F8A81", image: iphone17ProNaturalImage },
          { hex: "#3D4F5C", image: iphone17ProBlueImage },
          { hex: "#F5F5F0", image: iphone17ProWhiteImage },
          { hex: "#3C3C3C", image: iphone17ProBlackImage },
        ],
      },
      {
        id: "iphone-17",
        name: "iPhone 17",
        tagline: "Чип A21. Dynamic Island. USB-C.",
        price: "От $799 или $33,29/мес.",
        image: iphone17PinkImage,
        colorImages: [
          { hex: "#F4D2D0", image: iphone17PinkImage },
          { hex: "#F9F3EE", image: iphone17YellowImage },
          { hex: "#B8B1D1", image: iphone17PurpleImage },
          { hex: "#6C9BC4", image: iphone17BlueImage },
          { hex: "#3C3C3C", image: iphone17BlackImage },
        ],
      },
      {
        id: "iphone-17-air",
        name: "iPhone 17 Air",
        tagline: "Ультратонкий дизайн. Невероятная лёгкость.",
        price: "От $899 или $37,45/мес.",
        image: iphone17AirBlueImage,
        isNew: true,
        colorImages: [
          { hex: "#6C9BC4", image: iphone17AirBlueImage },
          { hex: "#E3E3E8", image: iphone17AirSilverImage },
          { hex: "#3C3C3C", image: iphone17AirBlackImage },
        ],
      },
    ],
    ctaTitle: "Apple Trade In",
    ctaSubtitle: "Получите кредит на новый iPhone при сдаче текущего.",
  },
  ipad: {
    heroTitle: "iPad",
    heroSubtitle: "Ваш следующий компьютер — это не компьютер.",
    heroImage: ipadAirBlueImage,
    promoBanner: "Сэкономьте на iPad со скидкой для учащихся. Получите AppleCare+ для iPad по сниженной цене.",
    considerations: [
      {
        title: "Мощная производительность",
        description: "Чипы серии M обеспечивают невероятную скорость для любых задач, от творчества до игр.",
        icon: "⚡",
      },
      {
        title: "Apple Pencil",
        description: "Делайте заметки, рисуйте и размечайте документы с точностью до пикселя.",
        icon: "✏️",
      },
      {
        title: "Magic Keyboard",
        description: "Превратите iPad в ноутбук с подсветкой клавиш и трекпадом.",
        icon: "⌨️",
      },
      {
        title: "Батарея на весь день",
        description: "До 10 часов работы от батареи на весь день.",
        icon: "🔋",
      },
      {
        title: "iPadOS",
        description: "Мощные функции, созданные для уникальных возможностей iPad.",
        icon: "📱",
      },
      {
        title: "Приложения для всего",
        description: "Более миллиона приложений, разработанных специально для большого дисплея iPad.",
        icon: "🎯",
      },
    ],
    lineupTitle: "Изучите линейку",
    lineup: [
      {
        id: "ipad-pro",
        name: "iPad Pro",
        tagline: "Максимум возможностей iPad с чипом M4.",
        price: "От $999 или $41,62/мес.",
        image: ipadProSpaceGrayImage,
        isNew: true,
        colorImages: [
          { hex: "#717378", image: ipadProSpaceGrayImage },
          { hex: "#E3E3E8", image: ipadProSilverImage },
        ],
      },
      {
        id: "ipad-air",
        name: "iPad Air",
        tagline: "С чипом M3. Удивительно мощный.",
        price: "От $599 или $24,95/мес.",
        image: ipadAirSpaceGrayImage,
        colorImages: [
          { hex: "#717378", image: ipadAirSpaceGrayImage },
          { hex: "#F9F3EE", image: ipadAirStarlightImage },
          { hex: "#B8B1D1", image: ipadAirPurpleImage },
          { hex: "#6C9BC4", image: ipadAirBlueImage },
        ],
      },
      {
        id: "ipad-10th",
        name: "iPad",
        tagline: "Яркий полноэкранный iPad для повседневных задач.",
        price: "От $349 или $14,54/мес.",
        image: ipad10BlueImage,
        colorImages: [
          { hex: "#6C9BC4", image: ipad10BlueImage },
          { hex: "#F4D2D0", image: ipad10PinkImage },
          { hex: "#FFD700", image: ipad10YellowImage },
          { hex: "#E3E3E8", image: ipad10SilverImage },
        ],
      },
    ],
    ctaTitle: "Скидки для учащихся",
    ctaSubtitle: "Сэкономьте на iPad со специальными ценами для студентов и преподавателей.",
  },
  watch: {
    heroTitle: "Apple Watch",
    heroSubtitle: "Лучшее устройство для здоровой жизни.",
    heroImage: watchSeries10JetBlackImage,
    promoBanner: "Бесплатная доставка всех Apple Watch. Гарантия 2 года.",
    considerations: [
      {
        title: "Мониторинг здоровья",
        description: "Отслеживайте пульс, кислород в крови, ЭКГ и сон. Ваше здоровье на виду.",
        icon: "❤️",
      },
      {
        title: "Фитнес-трекинг",
        description: "Закрывайте кольца. Отслеживайте каждую тренировку. Оставайтесь мотивированы каждый день.",
        icon: "💪",
      },
      {
        title: "Функции безопасности",
        description: "Обнаружение падений, аварий и экстренный вызов SOS, когда это нужно.",
        icon: "🆘",
      },
      {
        title: "Оставайтесь на связи",
        description: "Звонки, сообщения и уведомления прямо на запястье.",
        icon: "📲",
      },
      {
        title: "Apple Pay",
        description: "Платите безопасно одним касанием запястья.",
        icon: "💳",
      },
      {
        title: "Персонализация",
        description: "Выбирайте из сотен циферблатов и ремешков под ваш стиль.",
        icon: "🎨",
      },
    ],
    lineupTitle: "Изучите линейку",
    lineup: [
      {
        id: "watch-ultra",
        name: "Apple Watch Ultra 2",
        tagline: "Для приключений без границ.",
        price: "От $799 или $33,29/мес.",
        image: watchUltra2NaturalImage,
        isNew: true,
        colorImages: [
          { hex: "#8F8A81", image: watchUltra2NaturalImage },
          { hex: "#1D1D1F", image: watchUltra2BlackImage },
        ],
      },
      {
        id: "watch",
        name: "Apple Watch Series 10",
        tagline: "Тоньше. Больше. Быстрее.",
        price: "От $399 или $16,62/мес.",
        image: watchSeries10JetBlackImage,
        isNew: true,
        colorImages: [
          { hex: "#1D1D1F", image: watchSeries10JetBlackImage },
          { hex: "#E8C4B8", image: watchSeries10RoseGoldImage },
          { hex: "#E3E3E8", image: watchSeries10SilverImage },
        ],
      },
      {
        id: "watch-se",
        name: "Apple Watch SE",
        tagline: "Всё важное. Доступно.",
        price: "От $249 или $10,37/мес.",
        image: watchSEMidnightImage,
        colorImages: [
          { hex: "#1D1D1F", image: watchSEMidnightImage },
          { hex: "#F9F3EE", image: watchSEStarlightImage },
          { hex: "#E3E3E8", image: watchSESilverImage },
        ],
      },
    ],
    ctaTitle: "Подберите ремешок",
    ctaSubtitle: "Выберите идеальный ремешок для вашего Apple Watch из сотен вариантов.",
  },
  airpods: {
    heroTitle: "AirPods",
    heroSubtitle: "Магия, которую вы ещё не слышали.",
    heroImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=600&hei=600&fmt=png-alpha&.v=1",
    promoBanner: "Бесплатная гравировка на AirPods. Только в Apple.",
    considerations: [
      {
        title: "Активное шумоподавление",
        description: "Отключитесь от мира и погрузитесь в то, что слушаете.",
        icon: "🔇",
      },
      {
        title: "Пространственное аудио",
        description: "Захватывающий звук как в кинотеатре вокруг вас.",
        icon: "🎵",
      },
      {
        title: "Адаптивное аудио",
        description: "Автоматически подстраивается под окружение для лучшего опыта.",
        icon: "🎧",
      },
      {
        title: "Плавное переключение",
        description: "Автоматически переключается между вашими устройствами Apple.",
        icon: "🔄",
      },
      {
        title: "Привет, Siri",
        description: "Управляйте воспроизведением, звонками и многим другим голосом.",
        icon: "🗣️",
      },
      {
        title: "Батарея на весь день",
        description: "До 6 часов прослушивания и 30 часов с кейсом.",
        icon: "🔋",
      },
    ],
    lineupTitle: "Изучите линейку",
    lineup: [
      {
        id: "airpods-pro",
        name: "AirPods Pro 2",
        tagline: "Лучшие наушники Apple с активным шумоподавлением.",
        price: "От $249 или $10,37/мес.",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=300&hei=300&fmt=png-alpha&.v=1",
        isNew: true,
        colorImages: [
          { hex: "#F5F5F7", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=300&hei=300&fmt=png-alpha&.v=1" },
        ],
      },
      {
        id: "airpods-3",
        name: "AirPods 3",
        tagline: "Пространственное аудио и адаптивный эквалайзер.",
        price: "От $179 или $7,45/мес.",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-3rd-gen-2-hero-select?wid=300&hei=300&fmt=png-alpha&.v=1",
        colorImages: [
          { hex: "#F5F5F7", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-3rd-gen-2-hero-select?wid=300&hei=300&fmt=png-alpha&.v=1" },
        ],
      },
      {
        id: "airpods-max",
        name: "AirPods Max",
        tagline: "Премиальные накладные наушники.",
        price: "От $549 или $22,87/мес.",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=300&hei=300&fmt=png-alpha&.v=1",
        colorImages: [
          { hex: "#717378", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=300&hei=300&fmt=png-alpha&.v=1" },
          { hex: "#E3E3E8", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=300&hei=300&fmt=png-alpha&.v=1" },
          { hex: "#6C9BC4", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=300&hei=300&fmt=png-alpha&.v=1" },
          { hex: "#B8B1D1", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-purple-202409?wid=300&hei=300&fmt=png-alpha&.v=1" },
          { hex: "#3C3C3C", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-midnight-202409?wid=300&hei=300&fmt=png-alpha&.v=1" },
        ],
      },
    ],
    ctaTitle: "Бесплатная гравировка",
    ctaSubtitle: "Персонализируйте ваши AirPods эмодзи, именами или цифрами.",
  },
  mac: {
    heroTitle: "Mac",
    heroSubtitle: "Если это можно представить, Mac это сделает.",
    heroImage: macHeroImage,
    promoBanner: "Сэкономьте на Mac со скидкой для учащихся. Получите AppleCare+ для Mac по сниженной цене.",
    considerations: [
      {
        title: "Чип Apple Silicon",
        description: "Невероятная производительность и энергоэффективность благодаря собственным чипам Apple.",
        icon: "🚀",
      },
      {
        title: "macOS",
        description: "Мощная и интуитивная операционная система, которая работает безупречно.",
        icon: "💻",
      },
      {
        title: "Экосистема Apple",
        description: "iPhone, iPad, Mac и Apple Watch работают вместе бесшовно.",
        icon: "🔗",
      },
      {
        title: "Безопасность",
        description: "Встроенная защита ваших данных и конфиденциальности.",
        icon: "🔐",
      },
      {
        title: "Батарея на весь день",
        description: "До 22 часов работы без подзарядки на MacBook Pro.",
        icon: "🔋",
      },
      {
        title: "Профессиональные приложения",
        description: "Final Cut Pro, Logic Pro и другие мощные инструменты.",
        icon: "🎬",
      },
    ],
    lineupTitle: "Изучите линейку",
    lineup: [
      {
        id: "macbook-pro",
        name: "MacBook Pro 16\"",
        tagline: "Максимальная мощь для профессионалов.",
        price: "От $2499 или $208,25/мес.",
        image: macbookSpaceGrayImage,
        isNew: true,
        colorImages: [
          { hex: "#1D1D1F", image: macbookSpaceGrayImage },
          { hex: "#E3E3E8", image: macbookSilverImage },
        ],
      },
      {
        id: "macbook",
        name: "MacBook Pro 14\"",
        tagline: "Профессиональный ноутбук с чипом M3.",
        price: "От $1999 или $166,58/мес.",
        image: macbookSpaceGrayImage,
        isNew: true,
        colorImages: [
          { hex: "#1D1D1F", image: macbookSpaceGrayImage },
          { hex: "#E3E3E8", image: macbookSilverImage },
        ],
      },
      {
        id: "macbook-air",
        name: "MacBook Air",
        tagline: "Невероятно тонкий и лёгкий с чипом M3.",
        price: "От $1099 или $91,58/мес.",
        image: macbookAirMidnightImage,
        colorImages: [
          { hex: "#1D1D1F", image: macbookAirMidnightImage },
          { hex: "#E3E3E8", image: macbookAirSilverImage },
          { hex: "#F9F3EE", image: macbookAirStarlightImage },
          { hex: "#7D7E80", image: macbookAirSpaceGrayImage },
        ],
      },
      {
        id: "imac",
        name: "iMac 24\"",
        tagline: "Яркий настольный компьютер с чипом M3.",
        price: "От $1299 или $108,25/мес.",
        image: imacBlueImage,
        colorImages: [
          { hex: "#6C9BC4", image: imacBlueImage },
          { hex: "#B8B1D1", image: imacPurpleImage },
          { hex: "#F4D2D0", image: imacPinkImage },
          { hex: "#F5A962", image: imacOrangeImage },
          { hex: "#F5D96A", image: imacYellowImage },
          { hex: "#A3C9A8", image: imacGreenImage },
          { hex: "#E3E3E8", image: imacSilverImage },
        ],
      },
      {
        id: "mac-studio",
        name: "Mac Studio",
        tagline: "Студийная мощь в компактном корпусе.",
        price: "От $1999 или $166,58/мес.",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-select-202306?wid=300&hei=300&fmt=png-alpha&.v=1",
        isNew: true,
        colorImages: [
          { hex: "#E3E3E8", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-select-202306?wid=300&hei=300&fmt=png-alpha&.v=1" },
        ],
      },
      {
        id: "mac-mini",
        name: "Mac mini",
        tagline: "Больше мощи. Меньше места.",
        price: "От $599 или $49,92/мес.",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301?wid=300&hei=300&fmt=png-alpha&.v=1",
        colorImages: [
          { hex: "#E3E3E8", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301?wid=300&hei=300&fmt=png-alpha&.v=1" },
        ],
      },
    ],
    ctaTitle: "Скидки для учащихся",
    ctaSubtitle: "Сэкономьте на Mac со специальными ценами для студентов и преподавателей.",
  },
  dyson: {
    heroTitle: "Dyson",
    heroSubtitle: "Технологии будущего для вашего дома.",
    heroImage: dysonHeroImage,
    promoBanner: "Бесплатная доставка всей продукции Dyson. Только в MobiStore.",
    considerations: [
      {
        title: "Мощное всасывание",
        description: "Технология Dyson обеспечивает непревзойдённую мощность всасывания.",
        icon: "💨",
      },
      {
        title: "Уход за волосами",
        description: "Фены и стайлеры без повреждения волос экстремальным теплом.",
        icon: "💇",
      },
      {
        title: "Чистый воздух",
        description: "Очистители воздуха захватывают 99,97% частиц до 0,3 микрона.",
        icon: "🌬️",
      },
      {
        title: "HEPA-фильтрация",
        description: "Захватывает 99,97% частиц размером 0,3 микрона.",
        icon: "🧹",
      },
      {
        title: "Инновационный дизайн",
        description: "Каждое устройство — результат инженерного совершенства.",
        icon: "✨",
      },
      {
        title: "Беспроводная свобода",
        description: "Беспроводные технологии для максимального удобства.",
        icon: "🔋",
      },
    ],
    lineupTitle: "Изучите линейку",
    lineup: [
      {
        id: "dyson",
        name: "Dyson V15 Detect",
        tagline: "Видит то, что пропускают другие.",
        price: "От $749 или $62,42/мес.",
        image: dysonV15Image,
        isNew: true,
        colorImages: [
          { hex: "#FFD700", image: dysonV15Image },
          { hex: "#4A5568", image: dysonV15Image },
        ],
      },
      {
        id: "dyson-supersonic",
        name: "Dyson Supersonic",
        tagline: "Ваши волосы заслуживают лучшего.",
        price: "От $429 или $35,75/мес.",
        image: dysonSupersonicImage,
        colorImages: [
          { hex: "#D4A574", image: dysonSupersonicImage },
          { hex: "#003153", image: dysonSupersonicImage },
          { hex: "#FF69B4", image: dysonSupersonicImage },
        ],
      },
      {
        id: "dyson-airwrap",
        name: "Dyson Airwrap",
        tagline: "Укладка без экстремального тепла.",
        price: "От $599 или $49,92/мес.",
        image: dysonAirwrapImage,
        isNew: true,
        colorImages: [
          { hex: "#D4A574", image: dysonAirwrapImage },
          { hex: "#003153", image: dysonAirwrapImage },
          { hex: "#FF69B4", image: dysonAirwrapImage },
        ],
      },
      {
        id: "dyson-purifier",
        name: "Dyson Purifier Cool",
        tagline: "Чистый воздух круглый год.",
        price: "От $549 или $45,75/мес.",
        image: dysonPurifierImage,
        colorImages: [
          { hex: "#E3E3E8", image: dysonPurifierImage },
          { hex: "#003153", image: dysonPurifierImage },
        ],
      },
      {
        id: "dyson-purifier-hot",
        name: "Dyson Purifier Hot+Cool",
        tagline: "Очищает. Охлаждает. Обогревает.",
        price: "От $749 или $62,42/мес.",
        image: dysonPurifierImage,
        colorImages: [
          { hex: "#E3E3E8", image: dysonPurifierImage },
          { hex: "#003153", image: dysonPurifierImage },
        ],
      },
      {
        id: "dyson-corrale",
        name: "Dyson Corrale",
        tagline: "Беспроводной выпрямитель волос.",
        price: "От $499 или $41,58/мес.",
        image: dysonCorraleImage,
        colorImages: [
          { hex: "#D4A574", image: dysonCorraleImage },
          { hex: "#003153", image: dysonCorraleImage },
          { hex: "#FF69B4", image: dysonCorraleImage },
        ],
      },
      {
        id: "dyson-v12-slim",
        name: "Dyson V12 Detect Slim",
        tagline: "Мощный и невероятно лёгкий.",
        price: "От $649 или $54,08/мес.",
        image: dysonV15Image,
        isNew: true,
        colorImages: [
          { hex: "#FFD700", image: dysonV15Image },
          { hex: "#8B5CF6", image: dysonV15Image },
        ],
      },
    ],
    ctaTitle: "Бесплатная доставка",
    ctaSubtitle: "Получите бесплатную доставку любого устройства Dyson.",
  },
  alisa: {
    heroTitle: "Яндекс Станция",
    heroSubtitle: "Ваш умный помощник с Алисой.",
    heroImage: alisaHeroImage,
    promoBanner: "",
    considerations: [
      {
        title: "Голосовое управление",
        description: "Управляйте музыкой, светом, бытовыми приборами голосом.",
        icon: "🗣️",
      },
      {
        title: "Умный дом",
        description: "Центр управления для всех ваших умных устройств.",
        icon: "🏠",
      },
      {
        title: "Качественный звук",
        description: "Мощные динамики для музыки и подкастов.",
        icon: "🔊",
      },
      {
        title: "Информация",
        description: "Новости, погода, ответы на вопросы — всё по запросу.",
        icon: "📰",
      },
      {
        title: "Мультирум",
        description: "Синхронизируйте музыку по всему дому.",
        icon: "🎶",
      },
      {
        title: "Развлечения",
        description: "Сказки, игры и обучение для детей.",
        icon: "🎮",
      },
    ],
    lineupTitle: "Изучите линейку",
    lineup: [
      {
        id: "alisa",
        name: "Яндекс Станция Макс",
        tagline: "Премиальный звук и умный хаб.",
        price: "От $249",
        image: yandexStationMaxImage,
        isNew: true,
        colorImages: [
          { hex: "#1A1A1A", image: yandexStationMaxImage },
          { hex: "#8A8A8A", image: yandexStationMaxImage },
        ],
      },
      {
        id: "alisa-station-2",
        name: "Яндекс Станция 2",
        tagline: "Мощный звук для дома.",
        price: "От $169",
        image: yandexStation2Image,
        colorImages: [
          { hex: "#2D2D2D", image: yandexStation2Image },
          { hex: "#7B68EE", image: yandexStation2Image },
          { hex: "#C4A77D", image: yandexStation2Image },
        ],
      },
      {
        id: "alisa-mini",
        name: "Станция Мини 3 с часами",
        tagline: "Компактный помощник с ZigBee.",
        price: "От $89",
        image: yandexStationMini3Image,
        isNew: true,
        colorImages: [
          { hex: "#1A1A1A", image: yandexStationMini3Image },
          { hex: "#8A8A8A", image: yandexStationMini3Image },
        ],
      },
      {
        id: "alisa-lite",
        name: "Яндекс Станция Мини",
        tagline: "Компактная с мощным звуком.",
        price: "От $69",
        image: yandexStationMiniImage,
        colorImages: [
          { hex: "#1A1A1A", image: yandexStationMiniImage },
          { hex: "#8A8A8A", image: yandexStationMiniImage },
        ],
      },
    ],
    ctaTitle: "Умный дом",
    ctaSubtitle: "Подключите Станцию к умным устройствам и управляйте домом голосом.",
  },
  whoop: {
    heroTitle: "Whoop",
    heroSubtitle: "Раскройте свой потенциал.",
    heroImage: whoop4Image,
    promoBanner: "",
    considerations: [
      {
        title: "Recovery Score",
        description: "Узнайте готовность тела к нагрузкам каждое утро.",
        icon: "💚",
      },
      {
        title: "Strain Coach",
        description: "Оптимальная нагрузка на основе восстановления.",
        icon: "🏋️",
      },
      {
        title: "Sleep Coach",
        description: "Персональные рекомендации по сну.",
        icon: "😴",
      },
      {
        title: "HRV Tracking",
        description: "Вариабельность пульса для оценки здоровья.",
        icon: "❤️",
      },
      {
        title: "Без экрана",
        description: "Фокус на данных, не на уведомлениях.",
        icon: "🎯",
      },
      {
        title: "24/7 Мониторинг",
        description: "Круглосуточный сбор данных для точного анализа.",
        icon: "📊",
      },
    ],
    lineupTitle: "Изучите линейку",
    lineup: [
      {
        id: "whoop",
        name: "Whoop 4.0",
        tagline: "Профессиональный мониторинг восстановления.",
        price: "От $239",
        image: whoop4Image,
        isNew: true,
        colorImages: [
          { hex: "#1A1A1A", image: whoop4Image },
          { hex: "#E8E8E8", image: whoopBandImage },
        ],
      },
      {
        id: "whoop-band",
        name: "Whoop SuperKnit Band",
        tagline: "Премиальный ремешок для комфорта.",
        price: "От $49",
        image: whoopBandImage,
        colorImages: [
          { hex: "#1A1A1A", image: whoop4Image },
          { hex: "#E8E8E8", image: whoopBandImage },
          { hex: "#87CEEB", image: whoopBandImage },
        ],
      },
      {
        id: "whoop-body",
        name: "Whoop Body Sensor",
        tagline: "Носите где угодно на теле.",
        price: "От $59",
        image: whoopBodyImage,
        colorImages: [
          { hex: "#1A1A1A", image: whoopBodyImage },
        ],
      },
    ],
    ctaTitle: "Начните мониторинг",
    ctaSubtitle: "Оптимизируйте тренировки и восстановление с Whoop.",
  },
};
