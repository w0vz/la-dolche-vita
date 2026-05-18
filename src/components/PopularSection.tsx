import { useState } from 'react';
import { menuItems } from '../data/menu';
import type { MenuItem } from '../data/menu';
import MenuCard from './MenuCard';
import QuickView from './QuickView';

interface PopularSectionProps {
  onPageChange: (page: string) => void;
}

export default function PopularSection({ onPageChange }: PopularSectionProps) {
  const popular = menuItems.filter(i => i.popular).slice(0, 6);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-3">I più popolari</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Популярные блюда</h2>
          <p className="text-cream-300/50 max-w-lg mx-auto">
            Блюда, которые наши гости заказывают снова и снова
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {popular.map((item, idx) => (
            <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <MenuCard item={item} onQuickView={setQuickViewItem} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onPageChange('menu')}
            className="border border-gold-500/40 text-gold-400 px-8 py-3.5 rounded-full font-medium tracking-wide hover:bg-gold-500/10 transition-all duration-300 cursor-pointer text-sm uppercase"
          >
            Смотреть всё меню →
          </button>
        </div>
      </div>

      {quickViewItem && (
        <QuickView item={quickViewItem} onClose={() => setQuickViewItem(null)} />
      )}
    </section>
  );
}
