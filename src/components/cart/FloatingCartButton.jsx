import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';
import { Badge } from '@/components/ui/badge';

export default function FloatingCartButton() {
  const { cart, calculateTotal } = useCart();

  if (cart.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Link
          to={createPageUrl('Order')}
          className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <Badge className="absolute -top-2 -right-2 bg-amber-500 text-white border-2 border-white min-w-[20px] h-5 flex items-center justify-center p-1">
              {cart.length}
            </Badge>
          </div>
          <div className="hidden sm:block">
            <div className="text-xs opacity-90">View Cart</div>
            <div className="font-bold">${calculateTotal().toFixed(2)}</div>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}