import { Award, Users, MapPin, Star } from 'lucide-react';

const stats = [
  { icon: <Star size={24} />, value: '4.9', label: 'Рейтинг' },
  { icon: <Users size={24} />, value: '15 000+', label: 'Довольных гостей' },
  { icon: <Award size={24} />, value: '12', label: 'Лет опыта' },
  { icon: <MapPin size={24} />, value: '3', label: 'Ресторана' },
];

const reviews = [
  {
    name: 'Анна К.',
    text: 'Лучшая карбонара в городе! Заказываю уже третий раз, всегда безупречно. Доставка быстрая, всё горячее.',
    rating: 5,
    date: '2 дня назад',
  },
  {
    name: 'Дмитрий П.',
    text: 'Пицца на тонком тесте — просто шедевр. Как в Неаполе! Отдельное спасибо за тирамису, тает во рту.',
    rating: 5,
    date: '1 неделю назад',
  },
  {
    name: 'Мария С.',
    text: 'Ризотто с грибами потрясающее! Очень кремовое, насыщенный вкус. Обслуживание на высоте.',
    rating: 5,
    date: '2 недели назад',
  },
  {
    name: 'Алексей В.',
    text: 'Отмечали годовщину, заказали доставку — всё было идеально упаковано и доставлено точно в срок. Оссобуко — восторг!',
    rating: 5,
    date: '3 недели назад',
  },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-3">Chi siamo</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">О нашем ресторане</h2>
          <p className="text-cream-300/50 max-w-2xl mx-auto leading-relaxed">
            La Notte — это история любви к итальянской кухне, которая началась 12 лет назад
            с маленькой траттории в центре Москвы
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/hero.jpg"
              alt="La Notte Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-3xl font-bold mb-6">
              Традиции <span className="text-gold-gradient">Италии</span> в каждом блюде
            </h3>
            <div className="space-y-4 text-cream-300/70 leading-relaxed">
              <p>
                Наш шеф-повар Марко Росси родился в Неаполе и провёл более 20 лет, оттачивая
                мастерство в лучших ресторанах Италии, прежде чем принести аутентичные рецепты в Москву.
              </p>
              <p>
                Мы импортируем лучшие ингредиенты напрямую из Италии: муку Caputo для пиццы,
                томаты Сан-Марцано, оливковое масло первого отжима из Тосканы и выдержанный
                пармезан из Эмилии-Романьи.
              </p>
              <p>
                Каждое утро наша паста готовится вручную, тесто для пиццы проходит 48-часовую
                ферментацию, а соусы томятся часами, чтобы достичь идеального вкуса.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-dark-800 rounded-2xl border border-dark-600 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500">
                {stat.icon}
              </div>
              <p className="font-serif text-3xl font-bold text-gold-500 mb-1">{stat.value}</p>
              <p className="text-cream-300/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-3">Recensioni</p>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold">Отзывы гостей</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-dark-800 rounded-2xl p-6 border border-dark-600 hover:border-gold-500/20 transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-cream-300/70 text-sm leading-relaxed mb-4 italic">
                  «{review.text}»
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cream-100 font-medium text-sm">{review.name}</span>
                  <span className="text-cream-300/30 text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
