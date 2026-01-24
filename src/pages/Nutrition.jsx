import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Search, Flame, Leaf, Wheat, AlertTriangle, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

export default function Nutrition() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const { data: menuItems = [], isLoading } = useQuery({
    queryKey: ['menuItemsNutrition'],
    queryFn: () => base44.entities.MenuItem.list(),
  });

  const filteredItems = menuItems.filter((item) => {
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!item.name.toLowerCase().includes(query)) return false;
    }
    return true;
  });

  const commonAllergens = [
    { name: 'Milk', description: 'Dairy products including cheese, butter, and cream' },
    { name: 'Eggs', description: 'Eggs and egg-derived ingredients' },
    { name: 'Peanuts', description: 'Peanuts and peanut-derived products' },
    { name: 'Tree Nuts', description: 'Almonds, cashews, walnuts, and other tree nuts' },
    { name: 'Wheat', description: 'Wheat and wheat-derived ingredients' },
    { name: 'Soy', description: 'Soybeans and soy-derived products' },
    { name: 'Fish', description: 'Fish and fish-derived ingredients' },
    { name: 'Shellfish', description: 'Shrimp, crab, lobster, and other shellfish' },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-stone-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80"
            alt="Healthy food"
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
            Transparency & Health
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Nutrition Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-lg max-w-2xl mx-auto"
          >
            We believe in complete transparency. Find detailed nutritional information and allergen details for all our menu items.
          </motion.p>
        </div>
      </section>

      {/* Dietary Legend */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-green-500 rounded-full">
                <Leaf className="w-4 h-4 text-white" />
              </span>
              <span className="text-sm text-stone-600">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-500 rounded-full">
                <Leaf className="w-4 h-4 text-white" />
              </span>
              <span className="text-sm text-stone-600">Vegan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-purple-500 rounded-full">
                <Wheat className="w-4 h-4 text-white" />
              </span>
              <span className="text-sm text-stone-600">Gluten-Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">
              Complete Nutrition Guide
            </h2>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <Input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-xl"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48 rounded-xl">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                  <SelectItem value="beverages">Beverages</SelectItem>
                  <SelectItem value="desserts">Desserts</SelectItem>
                  <SelectItem value="sides">Sides</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-stone-50">
                    <TableHead className="font-semibold text-stone-800">Menu Item</TableHead>
                    <TableHead className="text-center font-semibold text-stone-800">Calories</TableHead>
                    <TableHead className="text-center font-semibold text-stone-800">Protein</TableHead>
                    <TableHead className="text-center font-semibold text-stone-800">Carbs</TableHead>
                    <TableHead className="text-center font-semibold text-stone-800">Fat</TableHead>
                    <TableHead className="font-semibold text-stone-800">Dietary</TableHead>
                    <TableHead className="font-semibold text-stone-800">Allergens</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    [...Array(5)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell colSpan={7}>
                          <div className="h-12 bg-stone-100 rounded animate-pulse" />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : filteredItems.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-12 text-stone-500">
                        No items found matching your search
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredItems.map((item) => (
                      <TableRow key={item.id} className="hover:bg-stone-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80'}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-stone-800">{item.name}</p>
                              <p className="text-xs text-stone-500 capitalize">{item.category}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-semibold text-amber-600">{item.calories || '-'}</span>
                        </TableCell>
                        <TableCell className="text-center text-stone-600">
                          {item.protein ? `${item.protein}g` : '-'}
                        </TableCell>
                        <TableCell className="text-center text-stone-600">
                          {item.carbs ? `${item.carbs}g` : '-'}
                        </TableCell>
                        <TableCell className="text-center text-stone-600">
                          {item.fat ? `${item.fat}g` : '-'}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {item.is_vegetarian && (
                              <span className="p-1.5 bg-green-100 rounded-full" title="Vegetarian">
                                <Leaf className="w-3 h-3 text-green-600" />
                              </span>
                            )}
                            {item.is_vegan && (
                              <span className="p-1.5 bg-emerald-100 rounded-full" title="Vegan">
                                <Leaf className="w-3 h-3 text-emerald-600" />
                              </span>
                            )}
                            {item.is_gluten_free && (
                              <span className="p-1.5 bg-amber-100 rounded-full" title="Gluten-Free">
                                <Wheat className="w-3 h-3 text-amber-600" />
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1 max-w-[200px]">
                            {item.allergens?.length > 0 ? (
                              item.allergens.map((allergen, i) => (
                                <Badge key={i} variant="outline" className="text-xs bg-red-50 text-red-600 border-red-200">
                                  {allergen}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-stone-400 text-sm">None</span>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Allergen Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">
              Allergen Information
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We take allergies seriously. Please inform our staff of any allergies when ordering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonAllergens.map((allergen, index) => (
              <motion.div
                key={allergen.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-stone-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-semibold text-stone-800">{allergen.name}</h3>
                </div>
                <p className="text-stone-500 text-sm">{allergen.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-amber-50 border border-amber-100 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                <p className="text-amber-700 text-sm">
                  Our kitchen handles multiple allergens. While we take precautions to prevent cross-contamination, 
                  we cannot guarantee that any item is completely free from allergens. If you have severe allergies, 
                  please speak with our manager before ordering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}