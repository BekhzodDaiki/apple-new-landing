const footerLinks = {
  "Магазин и продукты": [
    "Магазин",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "Dyson",
    "Alisa",
    "Whoop",
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-section-gray border-t border-border">
      <div className="max-w-[980px] mx-auto px-4 py-8">
        {/* Footnotes */}
        <div className="text-xs text-text-secondary mb-8 border-b border-border pb-8">
          <p className="mb-3">
            1. Стоимость обмена зависит от состояния, года выпуска и
            конфигурации вашего устройства.
          </p>
          <p>
            2. Доступно для соответствующих требованиям клиентов и требует
            24-месячного кредита при выборе рассрочки.
          </p>
        </div>

        {/* Footer Links */}
        <div className="mb-8 pb-8 border-b border-border">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-foreground mb-3">
                {category}
              </h4>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-text-secondary hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs text-text-secondary">
            <p>
              Другие способы покупки:{" "}
              <a href="#" className="text-link-blue hover:underline">
                Найти магазин
              </a>{" "}
              или{" "}
              <a href="#" className="text-link-blue hover:underline">
                другого продавца
              </a>{" "}
              рядом с вами. Или позвоните 8-800-555-35-35.
            </p>
          </div>
          <div className="text-xs text-text-secondary">
            © 2024 Apple Inc. Все права защищены.
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-text-secondary">
          <a href="#" className="hover:underline">
            Политика конфиденциальности
          </a>
          <a href="#" className="hover:underline">
            Условия использования
          </a>
          <a href="#" className="hover:underline">
            Продажи и возвраты
          </a>
          <a href="#" className="hover:underline">
            Правовая информация
          </a>
          <a href="#" className="hover:underline">
            Карта сайта
          </a>
        </div>
      </div>
    </footer>
  );
};
