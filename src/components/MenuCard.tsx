import { Plus, Flame, Leaf, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { MenuItem } from '../data/menu';
import { useState } from 'react';

interface MenuCardProps {
  item: MenuItem;
  onQuickView: (item: MenuItem) => void;
}

export default function MenuCard({ item, onQuickView }: MenuCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <div
      className="group bg-dark-800 rounded-2xl overflow-hidden border border-dark-600 hover:border-gold-500/30 transition-all duration-500 cursor-pointer flex flex-col"
      onClick={() => onQuickView(item)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.popular && (
            <span className="flex items-center gap-1 bg-gold-500/90 text-dark-900 text-xs font-semibold px-2.5 py-1 rounded-full">
              <Star size={12} fill="currentColor" /> Хит
            </span>
          )}
          {item.spicy && (
            <span className="flex items-center gap-1 bg-red-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              <Flame size={12} /> Острое
            </span>
          )}
          {item.vegetarian && (
            <span className="flex items-center gap-1 bg-green-700/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              <Leaf size={12} /> Вег
            </span>
          )}
        </div>

        {/* Weight */}
        <div className="absolute bottom-3 left-3">
          <span className="text-cream-300/70 text-xs">{item.weight}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif text-lg font-semibold text-cream-100 mb-1 group-hover:text-gold-400 transition-colors">
          {item.name}
        </h3>
        <p className="text-cream-300/50 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gold-500 font-bold text-xl">{item.price} ₽</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              added
                ? 'bg-green-600 text-white'
                : 'bg-dark-500 text-cream-100 hover:bg-gold-500 hover:text-dark-900'
            }`}
          >
            {added ? (
              '✓ Добавлено'
            ) : (
              <>
                <Plus size={16} />
                В корзину
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
