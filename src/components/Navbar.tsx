import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '/#home' },
    { name: '关于我们', href: '/#about' },
    { name: '业务领域', href: '/#services' },
    { name: '合作伙伴', href: '/#partners' },
    { name: '联系我们', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src="/logo-horizontal.png" alt="Pilotage Media" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#2D63EA] font-medium transition-colors text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <Link to="/contact" className="bg-[#2D63EA] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#1a4bd6] transition-colors shadow-lg shadow-blue-500/30">
              合作咨询
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl absolute w-full"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-[#2D63EA] hover:bg-blue-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-2">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-center w-full bg-[#2D63EA] text-white px-5 py-3.5 rounded-xl text-base font-bold hover:bg-[#1a4bd6] transition-colors shadow-lg shadow-blue-500/30">
                  合作咨询
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
