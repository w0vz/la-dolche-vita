import { X, Plus, Minus, Flame, Leaf, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { MenuItem } from '../data/menu';
import { useState } from 'react';

interface QuickViewProps {
  item: MenuItem;
  onClose: () => void;
}

export default function QuickView({ item, onClose }: QuickViewProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(item);
    }
    setAdded(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-dark-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-dark-600 animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-dark-900/80 rounded-full hover:bg-dark-700 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2 aspect-square md:aspect-auto">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-6 flex flex-col">
            {/* Badges */}
            <div className="flex gap-2 mb-3">
              {item.popular && (
                <span className="flex items-center gap-1 bg-gold-500/20 text-gold-500 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <Star size={12} fill="currentColor" /> Популярное
                </span>
              )}
              {item.spicy && (
                <span className="flex items-center gap-1 bg-red-600/20 text-red-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <Flame size={12} /> Острое
                </span>
              )}
              {item.vegetarian && (
                <span className="flex items-center gap-1 bg-green-700/20 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <Leaf size={12} /> Вегетарианское
                </span>
              )}
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mb-2">
              {item.name}
            </h2>

            <p className="text-cream-300/50 text-sm mb-1">{item.weight}</p>

            <p className="text-cream-300/70 text-sm leading-relaxed mb-6 flex-1">
              {item.description}
            </p>

            <div className="space-y-4">
              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="text-gold-500 font-bold text-3xl">{item.price} ₽</span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-cream-300/60 text-sm">Количество:</span>
                <div className="flex items-center gap-3 bg-dark-700 rounded-full px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 rounded-full hover:bg-dark-500 transition-colors cursor-pointer"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 rounded-full hover:bg-dark-500 transition-colors cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add button */}
              <button
                onClick={handleAdd}
                className={`w-full py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 cursor-pointer ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'gold-gradient text-dark-900 hover:opacity-90'
                }`}
              >
                {added ? '✓ Добавлено в корзину' : `Добавить за ${item.price * quantity} ₽`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
