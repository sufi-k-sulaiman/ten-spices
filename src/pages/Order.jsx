import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, X, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { useCart } from '@/components/cart/CartContext';

export default function Order() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    customer_name: '',
    email: '',
    phone: '',
    delivery_type: 'pickup',
    delivery_address: '',
    notes: '',
  });

  const { cart, addToCart, updateQuantity, removeFromCart, clearCart, calculateSubtotal, calculateTax, calculateTotal } = useCart();

  const { data: menuItems = [], isLoading } = useQuery({
    queryKey: ['menuItems'],
    queryFn: () => base44.entities.MenuItem.list(),
  });

  const orderMutation = useMutation({
    mutationFn: (orderData) => base44.entities.Order.create(orderData),
    onSuccess: () => {
      toast.success('Order placed successfully! We\'ll contact you shortly.');
      clearCart();
      setShowCheckout(false);
      setCustomerInfo({
        customer_name: '',
        email: '',
        phone: '',
        delivery_type: 'pickup',
        delivery_address: '',
        notes: '',
      });
    },
    onError: () => {
      toast.error('Failed to place order. Please try again.');
    },
  });

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const orderData = {
      ...customerInfo,
      items: cart.map((item) => ({
        menu_item_id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      total: calculateTotal(),
    };

    orderMutation.mutate(orderData);
  };

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Place Your Order</h1>
          <p className="text-white/90 text-lg">Select your favorite dishes and we'll prepare them fresh for you</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2 space-y-8">
            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category}>
                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4 capitalize">
                  {category}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                    >
                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                      )}
                      <h3 className="font-semibold text-stone-800 mb-1">{item.name}</h3>
                      <p className="text-sm text-stone-500 mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-purple-600">${item.price.toFixed(2)}</span>
                        <Button
                          size="sm"
                          onClick={() => addToCart(item)}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-stone-800">Your Order</h2>
                <Badge className="bg-purple-600">{cart.length} items</Badge>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                  <p className="text-stone-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-3 pb-4 border-b border-stone-100">
                        <div className="flex-1">
                          <h4 className="font-medium text-stone-800 text-sm">{item.name}</h4>
                          <p className="text-purple-600 font-semibold text-sm">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-7 w-7 text-red-500 hover:text-red-600"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-stone-600">
                      <span>Subtotal</span>
                      <span>${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Tax (13%)</span>
                      <span>${calculateTax().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-stone-800 pt-2 border-t border-stone-200">
                      <span>Total</span>
                      <span className="text-purple-600">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-6 text-lg font-semibold"
                  >
                    Proceed to Checkout
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCheckout(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-stone-200 p-6 flex items-center justify-between rounded-t-3xl">
                <h2 className="font-serif text-2xl font-bold text-stone-800">Checkout</h2>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setShowCheckout(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label>Full Name *</Label>
                    <Input
                      value={customerInfo.customer_name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, customer_name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label>Phone *</Label>
                      <Input
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Order Type *</Label>
                    <RadioGroup
                      value={customerInfo.delivery_type}
                      onValueChange={(value) => setCustomerInfo({ ...customerInfo, delivery_type: value })}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="font-normal cursor-pointer">Pickup</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <Label htmlFor="delivery" className="font-normal cursor-pointer">Delivery</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {customerInfo.delivery_type === 'delivery' && (
                    <div>
                      <Label>Delivery Address *</Label>
                      <Textarea
                        value={customerInfo.delivery_address}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, delivery_address: e.target.value })}
                        placeholder="123 Main St, City, Province, Postal Code"
                        rows={3}
                        required
                      />
                    </div>
                  )}

                  <div>
                    <Label>Special Instructions</Label>
                    <Textarea
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                      placeholder="Any dietary restrictions or special requests..."
                      rows={3}
                    />
                  </div>
                </div>

                <div className="bg-stone-50 rounded-2xl p-6 space-y-3">
                  <h3 className="font-semibold text-stone-800 mb-4">Order Summary</h3>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-stone-600">{item.name} x{item.quantity}</span>
                      <span className="text-stone-800 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-stone-200 space-y-2">
                    <div className="flex justify-between text-stone-600">
                      <span>Subtotal</span>
                      <span>${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Tax</span>
                      <span>${calculateTax().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-purple-600 pt-2 border-t border-stone-200">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handlePlaceOrder}
                  disabled={orderMutation.isPending || !customerInfo.customer_name || !customerInfo.email || !customerInfo.phone}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-6 text-lg font-semibold"
                >
                  {orderMutation.isPending ? 'Placing Order...' : 'Place Order'}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}