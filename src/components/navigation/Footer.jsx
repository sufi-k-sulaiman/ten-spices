import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04150d] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534ce5687a77bafcb64b3/882b275dd_TenSpicesLogo.png"
                alt="Ten Spices Logo"
                className="h-12 w-auto brightness-110" />

            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Where every dish tells a story through the perfect blend of ten signature spices. 
              Experience culinary artistry in every bite.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
              { name: 'Our Menu', path: 'Menu' },
              { name: 'Catering Services', path: 'Catering' },
              { name: 'Nutrition Info', path: 'Nutrition' },
              { name: 'About Us', path: 'About' },
              { name: 'Contact Us', path: 'Contact' }].
              map((link) =>
              <li key={link.path}>
                  <Link
                  to={createPageUrl(link.path)}
                  className="text-stone-400 hover:text-purple-400 transition-colors duration-300 text-sm">

                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-400 text-sm">
                  16950 Rue de l'Ambre<br />
                  Mirabel, QC J7N 0K4
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-stone-400 text-sm">+1 438 449 8143</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-stone-400 text-sm">enjoytenspices@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Monday - Friday</p>
                  <p className="text-stone-400">7:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Saturday - Sunday</p>
                  <p className="text-stone-400">8:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              Copyright © 2026 <a href="https://1cplatform.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">1cPlatform</a>. Developed by <a href="https://sufikhan.com/" target="_blank" rel="noopener noreferrer" title="Sufi Khan Sulaiman — 20+ years of building scalable Ecommerce solutions" className="hover:text-purple-400 transition-colors">Sufi Khan Sulaiman</a>. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-stone-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-stone-500 hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}