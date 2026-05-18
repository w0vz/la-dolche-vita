import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { menuItems, categories } from '../data/menu';
import type { MenuItem } from '../data/menu';
import MenuCard from './MenuCard';
import QuickView from './QuickView';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default');
  const [showFilters, setShowFilters] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);

  const filtered = useMemo(() => {
    let items = [...menuItems];

    if (activeCategory !== 'all') {
      items = items.filter(i => i.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        i =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return items;
  }, [activeCategory, search, sortBy]);

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-3">Il nostro menu</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Наше Меню</h2>
          <p className="text-cream-300/50 max-w-lg mx-auto">
            Каждое блюдо — это путешествие по регионам Италии, приготовленное из лучших ингредиентов
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-300/40" />
            <input
              type="text"
              placeholder="Поиск по меню..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-dark-700 border border-dark-500 rounded-xl pl-11 pr-4 py-3 text-cream-100 placeholder:text-cream-300/30 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm transition-colors cursor-pointer ${
              showFilters
                ? 'border-gold-500 text-gold-500 bg-gold-500/10'
                : 'border-dark-500 text-cream-300 hover:border-gold-500/50'
            }`}
          >
            <SlidersHorizontal size={16} />
            Фильтры
          </button>
        </div>

        {/* Sort options */}
        {showFilters && (
          <div className="mb-6 p-4 bg-dark-800 rounded-xl border border-dark-600 animate-fade-in">
            <p className="text-sm text-cream-300/60 mb-3">Сортировка:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'default' as const, label: 'По умолчанию' },
                { value: 'price-asc' as const, label: 'Сначала дешёвые' },
                { value: 'price-desc' as const, label: 'Сначала дорогие' },
                { value: 'name' as const, label: 'По названию' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                    sortBy === opt.value
                      ? 'bg-gold-500 text-dark-900 font-medium'
                      : 'bg-dark-600 text-cream-300 hover:bg-dark-500'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'gold-gradient text-dark-900 font-semibold shadow-lg'
                  : 'bg-dark-700 text-cream-300 hover:bg-dark-600 border border-dark-500'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-cream-300/40 text-sm mb-6">
          {filtered.length === 0
            ? 'Ничего не найдено'
            : `Найдено: ${filtered.length} ${filtered.length === 1 ? 'блюдо' : filtered.length < 5 ? 'блюда' : 'блюд'}`}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
              <MenuCard item={item} onQuickView={setQuickViewItem} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🍝</p>
            <p className="text-cream-300/50 text-lg">По вашему запросу ничего не найдено</p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
              }}
              className="mt-4 text-gold-500 hover:text-gold-400 transition-colors cursor-pointer text-sm"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewItem && (
        <QuickView item={quickViewItem} onClose={() => setQuickViewItem(null)} />
      )}
    </section>
  );
}
