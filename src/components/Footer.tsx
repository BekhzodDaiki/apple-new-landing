const footerLinks = {
  "Shop and Learn": [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "Dyson",
    "Alisa",
    "Hoop",
  ],
  Services: [
    "Apple Music",
    "Apple TV+",
    "Apple Arcade",
    "iCloud",
    "Apple One",
    "Apple Pay",
    "Apple Card",
  ],
  Account: [
    "Manage Your Apple Account",
    "Apple Store Account",
    "iCloud.com",
  ],
  "Apple Store": [
    "Find a Store",
    "Genius Bar",
    "Today at Apple",
    "Group Reservations",
    "Apple Camp",
    "Apple Store App",
    "Certified Refurbished",
    "Apple Trade In",
    "Financing",
    "Carrier Deals",
    "Order Status",
    "Shopping Help",
  ],
  "For Business": [
    "Apple and Business",
    "Shop for Business",
  ],
  "For Education": [
    "Apple and Education",
    "Shop for K-12",
    "Shop for College",
  ],
  "Apple Values": [
    "Accessibility",
    "Education",
    "Environment",
    "Inclusion and Diversity",
    "Privacy",
    "Racial Equity and Justice",
    "Supply Chain",
  ],
  "About Apple": [
    "Newsroom",
    "Apple Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    "Contact Apple",
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-section-gray border-t border-border">
      <div className="max-w-[980px] mx-auto px-4 py-8">
        {/* Footnotes */}
        <div className="text-xs text-text-secondary mb-8 border-b border-border pb-8">
          <p className="mb-3">
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device.
          </p>
          <p>
            2. Available for qualified customers and requires a 24-month
            installment loan when you select Citizens One or Apple Card Monthly
            Installments (ACMI).
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8 pb-8 border-b border-border">
          {Object.entries(footerLinks).slice(0, 5).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-foreground mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
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
              More ways to shop:{" "}
              <a href="#" className="text-link-blue hover:underline">
                Find an Apple Store
              </a>{" "}
              or{" "}
              <a href="#" className="text-link-blue hover:underline">
                other retailer
              </a>{" "}
              near you. Or call 1-800-MY-APPLE.
            </p>
          </div>
          <div className="text-xs text-text-secondary">
            Copyright © 2024 Apple Inc. All rights reserved.
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-text-secondary">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Sales and Refunds
          </a>
          <a href="#" className="hover:underline">
            Legal
          </a>
          <a href="#" className="hover:underline">
            Site Map
          </a>
        </div>
      </div>
    </footer>
  );
};
