import { useState, useEffect } from 'react'
import { ShoppingBag, Menu, X, Phone } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface HeaderProps {
	onCartOpen: () => void
	onPageChange: (page: string) => void
	currentPage: string
}

export default function Header({
	onCartOpen,
	onPageChange,
	currentPage,
}: HeaderProps) {
	const { totalItems } = useCart()
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navItems = [
		{ id: 'home', label: 'Главная' },
		{ id: 'menu', label: 'Меню' },
		{ id: 'about', label: 'О нас' },
		{ id: 'contacts', label: 'Контакты' },
	]

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? 'glass border-b border-dark-600 shadow-2xl'
					: 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6'>
				<div className='flex items-center justify-between h-16 sm:h-20'>
					{/* Logo */}
					<button
						onClick={() => onPageChange('home')}
						className='flex items-center gap-2 cursor-pointer'
					>
						<span className='text-2xl sm:text-3xl font-serif font-bold text-gold-gradient'>
							La Dolce Vita
						</span>
					</button>

					{/* Desktop Nav */}
					<nav className='hidden md:flex items-center gap-8'>
						{navItems.map(item => (
							<button
								key={item.id}
								onClick={() => onPageChange(item.id)}
								className={`text-sm tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
									currentPage === item.id
										? 'text-gold-500'
										: 'text-cream-300 hover:text-gold-400'
								}`}
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* Right side */}
					<div className='flex items-center gap-3 sm:gap-4'>
						<a
							href='tel:+74951234567'
							className='hidden sm:flex items-center gap-2 text-cream-300 hover:text-gold-400 transition-colors'
						>
							<Phone size={16} />
							<span className='text-sm'>+7 (495) 123-45-67</span>
						</a>

						<button
							onClick={onCartOpen}
							className='relative p-2 rounded-full hover:bg-dark-600 transition-all duration-300 cursor-pointer'
						>
							<ShoppingBag size={22} className='text-cream-100' />
							{totalItems > 0 && (
								<span className='absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-dark-900 text-xs font-bold rounded-full flex items-center justify-center animate-scale-in'>
									{totalItems}
								</span>
							)}
						</button>

						{/* Mobile menu btn */}
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className='md:hidden p-2 rounded-full hover:bg-dark-600 transition-colors cursor-pointer'
						>
							{menuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Nav */}
			{menuOpen && (
				<div className='md:hidden glass border-t border-dark-600 animate-fade-in'>
					<nav className='flex flex-col p-4 gap-1'>
						{navItems.map(item => (
							<button
								key={item.id}
								onClick={() => {
									onPageChange(item.id)
									setMenuOpen(false)
								}}
								className={`text-left px-4 py-3 rounded-lg text-sm tracking-wider uppercase transition-colors cursor-pointer ${
									currentPage === item.id
										? 'text-gold-500 bg-dark-700'
										: 'text-cream-300 hover:text-gold-400 hover:bg-dark-700'
								}`}
							>
								{item.label}
							</button>
						))}
						<a
							href='tel:+74951234567'
							className='flex items-center gap-2 px-4 py-3 text-cream-300 hover:text-gold-400 transition-colors'
						>
							<Phone size={16} />
							<span className='text-sm'>+7 (495) 123-45-67</span>
						</a>
					</nav>
				</div>
			)}
		</header>
	)
}
