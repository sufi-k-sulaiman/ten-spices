import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Search, Leaf, Wheat } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import CategoryFilter from '@/components/menu/CategoryFilter';
import MenuGrid from '@/components/menu/MenuGrid';

export default function Menu() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
  });

  const { data: menuItems = [], isLoading } = useQuery({
    queryKey: ['menuItems'],
    queryFn: () => base44.entities.MenuItem.list(),
  });

  const filteredItems = menuItems.filter((item) => {
    // Category filter
    if (activeCategory !== 'all' && item.category !== activeCategory) return false;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!item.name.toLowerCase().includes(query) && 
          !item.description?.toLowerCase().includes(query)) {
        return false;
      }
    }

    // Dietary filters
    if (filters.vegetarian && !item.is_vegetarian) return false;
    if (filters.vegan && !item.is_vegan) return false;
    if (filters.glutenFree && !item.is_gluten_free) return false;

    return true;
  });

  const categoryTitles = {
    all: 'All Menu Items',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    beverages: 'Beverages',
    desserts: 'Desserts',
    sides: 'Sides'
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-stone-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
            alt="Food spread"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 to-stone-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-purple-400 font-medium text-sm uppercase tracking-wider mb-4"
          >
            Explore Our Offerings
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-lg max-w-2xl mx-auto"
          >
            Discover our carefully crafted dishes, each infused with our signature blend of ten exotic spices
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
              <CategoryFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Search & Dietary Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <Input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64 rounded-full border-stone-200"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={filters.vegetarian}
                    onCheckedChange={(checked) =>
                      setFilters((prev) => ({ ...prev, vegetarian: checked }))
                    }
                  />
                  <Leaf className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-stone-600">Vegetarian</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={filters.glutenFree}
                    onCheckedChange={(checked) =>
                      setFilters((prev) => ({ ...prev, glutenFree: checked }))
                    }
                  />
                  <Wheat className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-stone-600">Gluten-Free</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-stone-800">
              {categoryTitles[activeCategory]}
            </h2>
            <p className="text-stone-500 mt-2">
              {filteredItems.length} items available
            </p>
          </div>

          <MenuGrid items={filteredItems} isLoading={isLoading} />
        </div>
      </section>
    </div>
  );
}