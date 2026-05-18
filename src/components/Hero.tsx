import { ChevronDown } from 'lucide-react'

interface HeroProps {
	onPageChange: (page: string) => void
}

export default function Hero({ onPageChange }: HeroProps) {
	return (
		<section className='relative h-screen flex items-center justify-center overflow-hidden'>
			{/* Background */}
			<div className='absolute inset-0'>
				<img
					src='/images/hero.jpg'
					alt='La Notte Restaurant'
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900' />
			</div>

			{/* Content */}
			<div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
				<p
					className='text-gold-500 tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 animate-fade-in'
					style={{ animationDelay: '0.2s' }}
				>
					Ristorante Italiano
				</p>
				<h1
					className='font-serif text-5xl sm:text-7xl md:text-8xl font-bold mb-6 animate-fade-in'
					style={{ animationDelay: '0.4s' }}
				>
					<span className='text-gold-gradient'>La Dolce Vita</span>
				</h1>
				<p
					className='text-cream-300 text-lg sm:text-xl md:text-2xl font-light mb-4 animate-fade-in'
					style={{ animationDelay: '0.6s' }}
				>
					Аутентичная итальянская кухня
				</p>
				<p
					className='text-cream-300/60 text-sm sm:text-base mb-10 max-w-xl mx-auto animate-fade-in'
					style={{ animationDelay: '0.7s' }}
				>
					Ручная паста, пицца на дровах, лучшие вина Италии — теперь с доставкой
					до вашей двери
				</p>
				<div
					className='flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in'
					style={{ animationDelay: '0.8s' }}
				>
					<button
						onClick={() => onPageChange('menu')}
						className='gold-gradient text-dark-900 px-8 py-3.5 rounded-full font-semibold tracking-wide hover:opacity-90 transition-all duration-300 cursor-pointer text-sm uppercase'
					>
						Заказать доставку
					</button>
					<button
						onClick={() => onPageChange('about')}
						className='border border-gold-500/40 text-gold-400 px-8 py-3.5 rounded-full font-medium tracking-wide hover:bg-gold-500/10 transition-all duration-300 cursor-pointer text-sm uppercase'
					>
						О ресторане
					</button>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
				<ChevronDown size={28} className='text-gold-500/50' />
			</div>
		</section>
	)
}
