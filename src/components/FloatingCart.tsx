import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FloatingCartProps {
  onClick: () => void;
}

export default function FloatingCart({ onClick }: FloatingCartProps) {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 gold-gradient text-dark-900 px-5 py-3.5 rounded-full font-semibold shadow-2xl hover:opacity-90 transition-all duration-300 cursor-pointer animate-scale-in flex items-center gap-3"
    >
      <div className="relative">
        <ShoppingBag size={20} />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-dark-900 text-gold-500 text-[10px] font-bold rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      </div>
      <span className="text-sm hidden sm:block">{totalPrice} ₽</span>
    </button>
  );
}
