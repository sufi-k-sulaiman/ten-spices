import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Leaf, Wheat } from 'lucide-react';

export default function FeaturedMenu({ items = [] }) {
  const categories = [
    {
      name: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80',
      description: 'Start your day with our aromatic morning delights',
      category: 'breakfast'
    },
    {
      name: 'Lunch',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
      description: 'Fresh, flavorful midday creations',
      category: 'lunch'
    },
    {
      name: 'Dinner',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
      description: 'Exquisite evening dining experience',
      category: 'dinner'
    },
    {
      name: 'Beverages',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
      description: 'Refreshing drinks & specialty coffees',
      category: 'beverages'
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-amber-600 font-medium text-sm uppercase tracking-wider mb-4"
          >
            Our Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-stone-800 mb-6"
          >
            Discover Our Flavors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg max-w-2xl mx-auto"
          >
            Each dish is a masterpiece, carefully crafted with our signature blend of ten exotic spices
          </motion.p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={createPageUrl('Menu') + `?category=${category.category}`}
                className="group block relative h-80 rounded-3xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-stone-300 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-amber-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Menu
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Items */}
        {items.length > 0 && (
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-8 text-center">
              Chef's Specials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={item.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {item.is_vegetarian && (
                        <span className="p-2 bg-green-500 rounded-full">
                          <Leaf className="w-4 h-4 text-white" />
                        </span>
                      )}
                      {item.is_gluten_free && (
                        <span className="p-2 bg-amber-500 rounded-full">
                          <Wheat className="w-4 h-4 text-white" />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg text-stone-800">{item.name}</h4>
                      <span className="text-amber-600 font-bold">${item.price?.toFixed(2)}</span>
                    </div>
                    <p className="text-stone-500 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to={createPageUrl('Menu')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-800 text-white font-semibold rounded-full hover:bg-stone-700 transition-colors duration-300"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}