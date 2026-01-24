import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sun, Moon, Wine, Cake, Soup } from 'lucide-react';

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  const categories = [
    { id: 'all', name: 'All', icon: null },
    { id: 'breakfast', name: 'Breakfast', icon: Sun },
    { id: 'lunch', name: 'Lunch', icon: Coffee },
    { id: 'dinner', name: 'Dinner', icon: Moon },
    { id: 'beverages', name: 'Beverages', icon: Wine },
    { id: 'desserts', name: 'Desserts', icon: Cake },
    { id: 'sides', name: 'Sides', icon: Soup },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        const Icon = category.icon;

        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25'
                : 'bg-white text-stone-600 hover:bg-stone-50 shadow-md'
            }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {category.name}
          </motion.button>
        );
      })}
    </div>
  );
}