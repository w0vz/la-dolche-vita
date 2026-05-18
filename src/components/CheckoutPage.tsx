import { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  User,
  Phone,
  CreditCard,
  Banknote,
  Clock,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutPageProps {
  onBack: () => void;
  onPageChange: (page: string) => void;
}

export default function CheckoutPage({ onBack, onPageChange }: CheckoutPageProps) {
  const { items, totalPrice, clearCart } = useCart();
  const deliveryFee = totalPrice >= 2000 ? 0 : 299;
  const finalTotal = totalPrice + deliveryFee;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    apartment: '',
    entrance: '',
    floor: '',
    comment: '',
    paymentMethod: 'card',
    deliveryTime: 'asap',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Введите имя';
    if (!form.phone.trim()) errs.phone = 'Введите телефон';
    else if (!/^[\d\s\-+()]{7,}$/.test(form.phone)) errs.phone = 'Некорректный телефон';
    if (!form.address.trim()) errs.address = 'Введите адрес';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const num = `LN-${Date.now().toString(36).toUpperCase()}`;
    setOrderNumber(num);
    setIsSubmitted(true);
    clearCart();
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="max-w-md w-full text-center animate-scale-in">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-600/20 rounded-full flex items-center justify-center">
            <CheckCircle2 size={40} className="text-green-400" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-3">Заказ оформлен!</h2>
          <p className="text-cream-300/60 mb-2">Номер вашего заказа:</p>
          <p className="text-gold-500 font-bold text-2xl mb-6 font-mono">{orderNumber}</p>
          <div className="bg-dark-800 rounded-xl p-5 border border-dark-600 mb-6 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-cream-300/60">Имя</span>
              <span>{form.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-cream-300/60">Телефон</span>
              <span>{form.phone}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-cream-300/60">Адрес</span>
              <span className="text-right max-w-[200px]">{form.address}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-cream-300/60">Оплата</span>
              <span>{form.paymentMethod === 'card' ? 'Картой' : 'Наличными'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-cream-300/60">Доставка</span>
              <span>{form.deliveryTime === 'asap' ? 'Как можно скорее' : 'К определённому времени'}</span>
            </div>
            <div className="flex justify-between text-sm font-bold pt-2 border-t border-dark-600">
              <span>Итого</span>
              <span className="text-gold-500">{finalTotal} ₽</span>
            </div>
          </div>
          <p className="text-cream-300/40 text-sm mb-6">
            Курьер свяжется с вами в течение 10 минут для подтверждения заказа
          </p>
          <button
            onClick={() => onPageChange('menu')}
            className="gold-gradient text-dark-900 px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:opacity-90 transition-all cursor-pointer"
          >
            Вернуться в меню
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-cream-300/60 hover:text-gold-400 transition-colors mb-6 cursor-pointer text-sm"
        >
          <ArrowLeft size={18} />
          Вернуться к корзине
        </button>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8">Оформление заказа</h2>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🛒</p>
            <p className="text-cream-300/50 text-lg mb-4">Корзина пуста</p>
            <button
              onClick={() => onPageChange('menu')}
              className="text-gold-500 hover:text-gold-400 transition-colors cursor-pointer"
            >
              Перейти в меню →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact info */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-5 flex items-center gap-2">
                <User size={20} className="text-gold-500" />
                Контактные данные
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-cream-300/60 mb-1.5">Имя *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    placeholder="Ваше имя"
                    className={`w-full bg-dark-700 border rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none transition-colors text-sm ${
                      errors.name ? 'border-red-500' : 'border-dark-500 focus:border-gold-500/50'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm text-cream-300/60 mb-1.5">
                    <span className="flex items-center gap-1"><Phone size={14} /> Телефон *</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className={`w-full bg-dark-700 border rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none transition-colors text-sm ${
                      errors.phone ? 'border-red-500' : 'border-dark-500 focus:border-gold-500/50'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Delivery address */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-5 flex items-center gap-2">
                <MapPin size={20} className="text-gold-500" />
                Адрес доставки
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-cream-300/60 mb-1.5">Адрес *</label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={e => handleChange('address', e.target.value)}
                    placeholder="Улица, дом"
                    className={`w-full bg-dark-700 border rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none transition-colors text-sm ${
                      errors.address ? 'border-red-500' : 'border-dark-500 focus:border-gold-500/50'
                    }`}
                  />
                  {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-cream-300/60 mb-1.5">Квартира</label>
                    <input
                      type="text"
                      value={form.apartment}
                      onChange={e => handleChange('apartment', e.target.value)}
                      placeholder="Кв."
                      className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-cream-300/60 mb-1.5">Подъезд</label>
                    <input
                      type="text"
                      value={form.entrance}
                      onChange={e => handleChange('entrance', e.target.value)}
                      placeholder="Подъезд"
                      className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-cream-300/60 mb-1.5">Этаж</label>
                    <input
                      type="text"
                      value={form.floor}
                      onChange={e => handleChange('floor', e.target.value)}
                      placeholder="Этаж"
                      className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery time */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-5 flex items-center gap-2">
                <Clock size={20} className="text-gold-500" />
                Время доставки
              </h3>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleChange('deliveryTime', 'asap')}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                    form.deliveryTime === 'asap'
                      ? 'border-gold-500 bg-gold-500/10 text-gold-500'
                      : 'border-dark-500 text-cream-300 hover:border-gold-500/30'
                  }`}
                >
                  Как можно скорее
                </button>
                <button
                  type="button"
                  onClick={() => handleChange('deliveryTime', 'scheduled')}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                    form.deliveryTime === 'scheduled'
                      ? 'border-gold-500 bg-gold-500/10 text-gold-500'
                      : 'border-dark-500 text-cream-300 hover:border-gold-500/30'
                  }`}
                >
                  Ко времени
                </button>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-5 flex items-center gap-2">
                <CreditCard size={20} className="text-gold-500" />
                Способ оплаты
              </h3>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleChange('paymentMethod', 'card')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                    form.paymentMethod === 'card'
                      ? 'border-gold-500 bg-gold-500/10 text-gold-500'
                      : 'border-dark-500 text-cream-300 hover:border-gold-500/30'
                  }`}
                >
                  <CreditCard size={18} />
                  Картой
                </button>
                <button
                  type="button"
                  onClick={() => handleChange('paymentMethod', 'cash')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                    form.paymentMethod === 'cash'
                      ? 'border-gold-500 bg-gold-500/10 text-gold-500'
                      : 'border-dark-500 text-cream-300 hover:border-gold-500/30'
                  }`}
                >
                  <Banknote size={18} />
                  Наличными
                </button>
              </div>
            </div>

            {/* Comment */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-5 flex items-center gap-2">
                <MessageSquare size={20} className="text-gold-500" />
                Комментарий
              </h3>
              <textarea
                value={form.comment}
                onChange={e => handleChange('comment', e.target.value)}
                placeholder="Пожелания к заказу или доставке..."
                rows={3}
                className="w-full bg-dark-700 border border-dark-500 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500/50 transition-colors text-sm resize-none"
              />
            </div>

            {/* Order summary */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-600">
              <h3 className="font-serif text-xl font-semibold mb-5">Ваш заказ</h3>
              <div className="space-y-3 mb-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-cream-300/70">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-cream-100">{item.price * item.quantity} ₽</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-dark-600 pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-cream-300/60">Сумма</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cream-300/60">Доставка</span>
                  <span className={deliveryFee === 0 ? 'text-green-400' : ''}>
                    {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}
                  </span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-2 border-t border-dark-600">
                  <span>Итого</span>
                  <span className="text-gold-500">{finalTotal} ₽</span>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full gold-gradient text-dark-900 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-all cursor-pointer animate-pulse-gold"
            >
              Подтвердить заказ на {finalTotal} ₽
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
