import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wheat, Flame, Info, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MenuGrid({ items = [], isLoading, onAddToCart }) {
  const getDietaryBadges = (item) => {
    const badges = [];
    if (item.is_vegetarian) badges.push({ icon: Leaf, label: 'Vegetarian', color: 'bg-green-500' });
    if (item.is_vegan) badges.push({ icon: Leaf, label: 'Vegan', color: 'bg-emerald-500' });
    if (item.is_gluten_free) badges.push({ icon: Wheat, label: 'Gluten-Free', color: 'bg-amber-500' });
    return badges;
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
            <div className="h-56 bg-stone-200" />
            <div className="p-6 space-y-4">
              <div className="h-6 bg-stone-200 rounded w-3/4" />
              <div className="h-4 bg-stone-200 rounded w-full" />
              <div className="h-4 bg-stone-200 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-6">
          <Flame className="w-12 h-12 text-stone-400" />
        </div>
        <h3 className="text-xl font-semibold text-stone-800 mb-2">No items found</h3>
        <p className="text-stone-500">Check back soon for new additions to our menu!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={item.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80'}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Dietary Badges */}
            <div className="absolute top-4 right-4 flex gap-2">
              {getDietaryBadges(item).map((badge, i) => (
                <span
                  key={i}
                  className={`p-2 ${badge.color} rounded-full shadow-lg`}
                  title={badge.label}
                >
                  <badge.icon className="w-4 h-4 text-white" />
                </span>
              ))}
            </div>

            {/* Featured Badge */}
            {item.is_featured && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold rounded-full">
                  Chef's Special
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg text-stone-800 group-hover:text-purple-600 transition-colors">
                {item.name}
              </h3>
              <span className="text-purple-600 font-bold text-lg">
                ${item.price?.toFixed(2)}
              </span>
            </div>
            <p className="text-stone-500 text-sm line-clamp-2 mb-4">
              {item.description}
            </p>

            {/* Nutrition Quick View */}
            {item.calories && (
              <div className="flex items-center gap-4 text-xs text-stone-400 pt-4 border-t border-stone-100">
                <span>{item.calories} cal</span>
                {item.protein && <span>{item.protein}g protein</span>}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-4">
              {onAddToCart && (
                <Button
                  onClick={() => onAddToCart(item)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add to Cart
                </Button>
              )}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl">{item.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img
                    src={item.image_url || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534ce5687a77bafcb64b3/60d789fbe_image.png'}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <p className="text-stone-600">{item.description}</p>
                  
                  <div className="flex items-center gap-2">
                    {getDietaryBadges(item).map((badge, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 ${badge.color} text-white text-xs rounded-full flex items-center gap-1`}
                      >
                        <badge.icon className="w-3 h-3" />
                        {badge.label}
                      </span>
                    ))}
                  </div>

                  {/* Nutrition Info */}
                  {item.calories && (
                    <div className="bg-stone-50 rounded-xl p-4">
                      <h4 className="font-semibold text-stone-800 mb-3">Nutrition Facts</h4>
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-purple-600">{item.calories}</p>
                          <p className="text-xs text-stone-500">Calories</p>
                        </div>
                        {item.protein && (
                          <div>
                            <p className="text-2xl font-bold text-purple-600">{item.protein}g</p>
                            <p className="text-xs text-stone-500">Protein</p>
                          </div>
                        )}
                        {item.carbs && (
                          <div>
                            <p className="text-2xl font-bold text-purple-600">{item.carbs}g</p>
                            <p className="text-xs text-stone-500">Carbs</p>
                          </div>
                        )}
                        {item.fat && (
                          <div>
                            <p className="text-2xl font-bold text-purple-600">{item.fat}g</p>
                            <p className="text-xs text-stone-500">Fat</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Allergens */}
                  {item.allergens?.length > 0 && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-stone-800 mb-2">Allergens</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.allergens.map((allergen, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full"
                          >
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-2xl font-bold text-purple-600">${item.price?.toFixed(2)}</span>
                    {onAddToCart && (
                      <Button onClick={() => onAddToCart(item)} className="bg-purple-600 hover:bg-purple-700">
                        <Plus className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}