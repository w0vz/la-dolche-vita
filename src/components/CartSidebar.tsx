import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartSidebar({ isOpen, onClose, onCheckout }: CartSidebarProps) {
  const { items, updateQuantity, removeItem, totalPrice, totalItems, clearCart } = useCart();

  const deliveryFee = totalPrice >= 2000 ? 0 : 299;
  const finalTotal = totalPrice + deliveryFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-dark-800 border-l border-dark-600 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-dark-600">
          <div className="flex items-center gap-3">
            <ShoppingBag size={22} className="text-gold-500" />
            <h2 className="font-serif text-xl font-bold">Корзина</h2>
            {totalItems > 0 && (
              <span className="bg-gold-500/20 text-gold-500 text-xs font-semibold px-2.5 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-dark-600 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-5xl mb-4">🛒</p>
              <p className="text-cream-300/50 text-lg mb-2">Корзина пуста</p>
              <p className="text-cream-300/30 text-sm">
                Добавьте любимые блюда из нашего меню
              </p>
              <button
                onClick={onClose}
                className="mt-6 text-gold-500 hover:text-gold-400 transition-colors text-sm cursor-pointer"
              >
                Перейти в меню →
              </button>
            </div>
          ) : (
            <>
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-dark-700 rounded-xl p-3 border border-dark-600"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-cream-100 truncate">
                      {item.name}
                    </h4>
                    <p className="text-cream-300/40 text-xs mt-0.5">{item.weight}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-dark-600 rounded-full px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-dark-500 transition-colors cursor-pointer"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-dark-500 transition-colors cursor-pointer"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold-500 font-bold text-sm">
                          {item.price * item.quantity} ₽
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 rounded-full hover:bg-red-900/30 text-cream-300/40 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear cart */}
              <button
                onClick={clearCart}
                className="w-full text-center text-sm text-cream-300/30 hover:text-red-400 transition-colors py-2 cursor-pointer"
              >
                Очистить корзину
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-dark-600 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-cream-300/60">Сумма заказа</span>
              <span className="text-cream-100">{totalPrice} ₽</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-cream-300/60">Доставка</span>
              <span className={deliveryFee === 0 ? 'text-green-400' : 'text-cream-100'}>
                {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}
              </span>
            </div>
            {deliveryFee > 0 && (
              <p className="text-xs text-cream-300/30">
                Бесплатная доставка от 2 000 ₽ (ещё {2000 - totalPrice} ₽)
              </p>
            )}
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-dark-600">
              <span>Итого</span>
              <span className="text-gold-500">{finalTotal} ₽</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full gold-gradient text-dark-900 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide hover:opacity-90 transition-all cursor-pointer"
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
