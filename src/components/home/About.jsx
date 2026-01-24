import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Utensils, Heart } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Utensils,
      title: 'Signature Spices',
      description: 'Our unique blend of ten exotic spices creates unforgettable flavors'
    },
    {
      icon: Users,
      title: 'Expert Chefs',
      description: 'Internationally trained culinary artists crafting each dish with passion'
    },
    {
      icon: Heart,
      title: 'Fresh Ingredients',
      description: 'Locally sourced, organic produce delivered fresh daily'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in taste and service'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80"
                alt="Chef preparing food"
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 lg:w-64 lg:h-64">
              <img
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80"
                alt="Spices"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-amber-600 font-medium text-sm uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-800 mb-6 leading-tight">
              A Passion for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Culinary Excellence
              </span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Founded in 2008, Ten Spices began as a family dream to share the rich tapestry of 
              flavors from around the world. Our signature blend of ten carefully selected spices 
              forms the heart of every dish we create, transforming simple ingredients into 
              extraordinary culinary experiences.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 text-sm">{feature.title}</h4>
                    <p className="text-stone-500 text-xs mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to={createPageUrl('About')}
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}