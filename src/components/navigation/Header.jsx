import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuCategories = [
    { name: 'Breakfast', category: 'breakfast' },
    { name: 'Lunch', category: 'lunch' },
    { name: 'Dinner', category: 'dinner' },
    { name: 'Beverages', category: 'beverages' },
    { name: 'Desserts', category: 'desserts' },
    { name: 'Sides', category: 'sides' },
  ];

  const navLinks = [
    { name: 'Home', path: 'Home' },
    { name: 'Catering', path: 'Catering' },
    { name: 'Nutrition', path: 'Nutrition' },
    { name: 'About Us', path: 'About' },
    { name: 'Contact Us', path: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534ce5687a77bafcb64b3/882b275dd_TenSpicesLogo.png"
              alt="Ten Spices Logo"
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to={createPageUrl('Home')}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-stone-700 hover:text-purple-600 hover:bg-purple-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>

            {/* Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMenuDropdownOpen(true)}
              onMouseLeave={() => setIsMenuDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'text-stone-700 hover:text-amber-600 hover:bg-amber-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Menu
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMenuDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMenuDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden"
                  >
                    <div className="p-2">
                      <Link
                        to={createPageUrl('Menu')}
                        className="block px-4 py-3 text-sm font-semibold text-stone-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 rounded-xl transition-all duration-200"
                      >
                        View Full Menu
                      </Link>
                      <div className="h-px bg-stone-100 my-2" />
                      {menuCategories.map((item) => (
                        <Link
                          key={item.category}
                          to={createPageUrl('Menu') + `?category=${item.category}`}
                          className="block px-4 py-2.5 text-sm text-stone-600 hover:text-purple-600 hover:bg-purple-50/50 rounded-xl transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={createPageUrl(link.path)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'text-stone-700 hover:text-purple-600 hover:bg-purple-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to={createPageUrl('Menu')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-stone-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              <Link
                to={createPageUrl('Home')}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-stone-800 font-medium rounded-xl hover:bg-purple-50 transition-colors"
              >
                Home
              </Link>
              
              <div className="px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-stone-400 mb-2">Menu</p>
                <div className="grid grid-cols-2 gap-2">
                  {menuCategories.map((item) => (
                    <Link
                      key={item.category}
                      to={createPageUrl('Menu') + `?category=${item.category}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-sm text-stone-600 bg-stone-50 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={createPageUrl(link.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-stone-800 font-medium rounded-xl hover:bg-purple-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to={createPageUrl('Menu')}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg mt-4"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}