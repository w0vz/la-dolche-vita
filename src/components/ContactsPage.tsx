import { MapPin, Phone, Clock, Mail, Globe, MessageCircle } from 'lucide-react';

const locations = [
  {
    name: 'La Notte — Патриаршие',
    address: 'Малая Бронная ул., 22',
    phone: '+7 (495) 123-45-67',
    hours: 'Ежедневно 11:00 — 23:00',
  },
  {
    name: 'La Notte — Чистые пруды',
    address: 'Чистопрудный бульвар, 14',
    phone: '+7 (495) 765-43-21',
    hours: 'Ежедневно 11:00 — 23:00',
  },
  {
    name: 'La Notte — Арбат',
    address: 'Арбат ул., 36',
    phone: '+7 (495) 987-65-43',
    hours: 'Ежедневно 12:00 — 00:00',
  },
];

export default function ContactsPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-3">Contatti</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-cream-300/50 max-w-lg mx-auto">
            Мы всегда рады видеть вас в наших ресторанах или доставить любимые блюда к вашей двери
          </p>
        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-dark-800 rounded-2xl p-6 border border-dark-600 hover:border-gold-500/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="font-serif text-xl font-semibold mb-4 text-gold-400">{loc.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-cream-300/70 text-sm">{loc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-500 flex-shrink-0" />
                  <a
                    href={`tel:${loc.phone.replace(/[^\d+]/g, '')}`}
                    className="text-cream-300/70 text-sm hover:text-gold-400 transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-gold-500 flex-shrink-0" />
                  <span className="text-cream-300/70 text-sm">{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact form & info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-dark-800 rounded-2xl p-6 sm:p-8 border border-dark-600">
            <h3 className="font-serif text-2xl font-semibold mb-6">Напишите нам</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-cream-300/60 mb-1.5">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-cream-300/60 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-cream-300/60 mb-1.5">Тема</label>
                <select className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-cream-100 focus:outline-none focus:border-gold-500/50 transition-colors text-sm">
                  <option>Вопрос по доставке</option>
                  <option>Бронирование столика</option>
                  <option>Корпоративное мероприятие</option>
                  <option>Обратная связь</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-cream-300/60 mb-1.5">Сообщение</label>
                <textarea
                  placeholder="Ваше сообщение..."
                  rows={4}
                  required
                  className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500/50 transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-dark-900 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide hover:opacity-90 transition-all cursor-pointer"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Delivery zone */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-4">Зона доставки</h3>
              <p className="text-cream-300/70 text-sm leading-relaxed mb-3">
                Мы доставляем блюда по всей Москве в пределах МКАД. Стоимость доставки — 299 ₽,
                бесплатно при заказе от 2 000 ₽.
              </p>
              <p className="text-cream-300/70 text-sm leading-relaxed">
                Среднее время доставки — 45 минут. В часы пик (12:00–14:00, 18:00–20:00) время может
                увеличиться до 60 минут.
              </p>
            </div>

            {/* Social */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-4">Мы в соцсетях</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-cream-300/70 hover:text-gold-400 transition-colors text-sm"
                >
                  <Globe size={20} />
                  @lanotte.moscow
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-cream-300/70 hover:text-gold-400 transition-colors text-sm"
                >
                  <MessageCircle size={20} />
                  Telegram: @lanotte_bot
                </a>
                <a
                  href="mailto:info@lanotte.ru"
                  className="flex items-center gap-3 text-cream-300/70 hover:text-gold-400 transition-colors text-sm"
                >
                  <Mail size={20} />
                  info@lanotte.ru
                </a>
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-cream-300/60">Пн — Чт</span>
                  <span className="text-cream-100">11:00 — 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream-300/60">Пт — Сб</span>
                  <span className="text-cream-100">11:00 — 00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream-300/60">Воскресенье</span>
                  <span className="text-cream-100">12:00 — 23:00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-dark-600">
                  <span className="text-cream-300/60">Доставка</span>
                  <span className="text-gold-400">11:00 — 22:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
