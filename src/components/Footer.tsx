import snqLogo from "@/assets/snq-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={snqLogo} 
                alt="SNQ" 
                className="h-20 w-auto filter brightness-0 invert" 
              />
              <div className="text-2xl font-bold">SNQ</div>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Доставляем лучшее. Расширяем границы.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Компания SNQ — стабильный дистрибьютор и импортер с более чем 10-летним опытом. 
              Мы специализируемся на поставке эксклюзивных товаров из Юго-Восточной Азии.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#catalog" className="text-white/80 hover:text-white transition-smooth">Каталог</a></li>
              <li><a href="#cooperation" className="text-white/80 hover:text-white transition-smooth">Сотрудничество</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-smooth">О нас</a></li>
              <li><a href="#contacts" className="text-white/80 hover:text-white transition-smooth">Контакты</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm">
              <p className="text-white/80">+7 705 915 7328</p>
              <p className="text-white/80">+7 707 505 6985</p>
              <p className="text-white/80">asd.royal@bk.ru</p>
              <p className="text-white/60 text-xs mt-3">
                г. Алматы, Кабдолова 2, офис 12
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} SNQ. Все права защищены.</p>
            </div>
            <div className="flex space-x-6">
              <span>Казахстан</span>
              <span>Кыргызстан</span>
              <span>Узбекистан</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;