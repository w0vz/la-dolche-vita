import { Truck, Clock, Award, Flame } from 'lucide-react';

const features = [
  {
    icon: <Truck size={28} />,
    title: 'Быстрая доставка',
    description: 'Доставим ваш заказ за 45 минут. Бесплатно от 2 000 ₽',
  },
  {
    icon: <Flame size={28} />,
    title: 'Свежие ингредиенты',
    description: 'Только натуральные продукты от проверенных итальянских поставщиков',
  },
  {
    icon: <Award size={28} />,
    title: 'Шеф из Неаполя',
    description: 'Наш шеф-повар Марко Росси — выходец из легендарной неаполитанской школы',
  },
  {
    icon: <Clock size={28} />,
    title: 'Работаем допоздна',
    description: 'Принимаем заказы ежедневно с 11:00 до 23:00 без выходных',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl bg-dark-800 border border-dark-600 hover:border-gold-500/30 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-cream-300/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
