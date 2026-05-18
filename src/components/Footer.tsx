import { Phone, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold-gradient mb-4">La Notte</h3>
            <p className="text-cream-300/50 text-sm leading-relaxed mb-4">
              Аутентичная итальянская кухня с доставкой по Москве. Свежие ингредиенты,
              ручная работа, любовь к деталям.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream-200 mb-4">Меню</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Главная', page: 'home' },
                { label: 'Меню', page: 'menu' },
                { label: 'О нас', page: 'about' },
                { label: 'Контакты', page: 'contacts' },
              ].map(item => (
                <li key={item.page}>
                  <button
                    onClick={() => onPageChange(item.page)}
                    className="text-cream-300/50 hover:text-gold-400 transition-colors text-sm cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream-200 mb-4">Информация</h4>
            <ul className="space-y-2.5 text-cream-300/50 text-sm">
              <li>Доставка и оплата</li>
              <li>Политика конфиденциальности</li>
              <li>Пользовательское соглашение</li>
              <li>Корпоративные заказы</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream-200 mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-cream-300/50 text-sm">
                <Phone size={16} className="text-gold-500 flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:text-gold-400 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 text-cream-300/50 text-sm">
                <Mail size={16} className="text-gold-500 flex-shrink-0" />
                <a href="mailto:info@lanotte.ru" className="hover:text-gold-400 transition-colors">
                  info@lanotte.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream-300/50 text-sm">
                <MapPin size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Малая Бронная ул., 22, Москва</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-600 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream-300/30 text-xs">
            © 2024 La Notte. Все права защищены.
          </p>
          <p className="text-cream-300/30 text-xs flex items-center gap-1">
            Сделано с <Heart size={12} className="text-gold-500" /> в Москве
          </p>
        </div>
      </div>
    </footer>
  );
}
