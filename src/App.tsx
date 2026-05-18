import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularSection from './components/PopularSection';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import CheckoutPage from './components/CheckoutPage';
import CartSidebar from './components/CartSidebar';
import FloatingCart from './components/FloatingCart';
import Footer from './components/Footer';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartOpen, setCartOpen] = useState(false);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close cart sidebar on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCartOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when cart is open
  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'contacts':
        return <ContactsPage />;
      case 'checkout':
        return (
          <CheckoutPage
            onBack={() => setCartOpen(true)}
            onPageChange={handlePageChange}
          />
        );
      case 'home':
      default:
        return (
          <>
            <Hero onPageChange={handlePageChange} />
            <Features />
            <PopularSection onPageChange={handlePageChange} />
            {/* Delivery info banner */}
            <section className="py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-dark-800 rounded-3xl p-8 sm:p-12 border border-dark-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
                  <div className="relative">
                    <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-3">Consegna</p>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                      Доставляем <span className="text-gold-gradient">с любовью</span>
                    </h2>
                    <p className="text-cream-300/50 max-w-xl mx-auto mb-6 leading-relaxed">
                      Заказывайте любимые блюда с доставкой по всей Москве.
                      Среднее время доставки — 45 минут. Бесплатно от 2 000 ₽.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => handlePageChange('menu')}
                        className="gold-gradient text-dark-900 px-8 py-3.5 rounded-full font-semibold tracking-wide hover:opacity-90 transition-all duration-300 cursor-pointer text-sm uppercase"
                      >
                        Заказать сейчас
                      </button>
                      <button
                        onClick={() => handlePageChange('contacts')}
                        className="border border-gold-500/40 text-gold-400 px-8 py-3.5 rounded-full font-medium tracking-wide hover:bg-gold-500/10 transition-all duration-300 cursor-pointer text-sm uppercase"
                      >
                        Узнать подробнее
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-cream-100">
      <Header
        onCartOpen={() => setCartOpen(true)}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />

      <main>{renderPage()}</main>

      <Footer onPageChange={handlePageChange} />

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => {
          setCartOpen(false);
          handlePageChange('checkout');
        }}
      />

      <FloatingCart onClick={() => setCartOpen(true)} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
