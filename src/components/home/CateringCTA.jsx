import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Utensils } from 'lucide-react';

export default function CateringCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
          alt="Catering setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-amber-400 font-medium text-sm uppercase tracking-wider mb-4">
              Catering Services
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Let Us Bring the{' '}
              <span className="text-amber-400">Feast to You</span>
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-8">
              From intimate gatherings to grand celebrations, our catering team brings the 
              Ten Spices experience directly to your event. Customized menus, professional 
              service, and unforgettable flavors.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { icon: Calendar, label: 'Any Occasion' },
                { icon: Users, label: '10-500 Guests' },
                { icon: Utensils, label: 'Custom Menus' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              to={createPageUrl('Catering')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300"
            >
              Plan Your Event
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80"
                alt="Catered event"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">500+ Events</p>
                    <p className="text-stone-500 text-sm">Successfully catered</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}