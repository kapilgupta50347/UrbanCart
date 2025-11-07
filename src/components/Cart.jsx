import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { CartContext } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Cart = ({ isOpen, setIsOpen }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const { toast } = useToast();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    toast({
      title: "🚧 Checkout Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#F5F5DC] z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-300">
              <h2 className="text-2xl font-bold text-[#001F3F]">Your Cart</h2>
              <button onClick={() => setIsOpen(false)} className="text-[#001F3F] hover:text-[#FFD23F]">
                <X className="h-6 w-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                <ShoppingCart className="h-24 w-24 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-[#001F3F]">Your cart is empty</h3>
                <p className="text-gray-600 mt-2">Add items from the store to get started.</p>
              </div>
            ) : (
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                    <img className="w-20 h-20 object-cover rounded-md" alt={item.name} src="https://images.unsplash.com/photo-1571302171879-0965db383dc4" />
                    <div className="flex-grow">
                      <h4 className="font-semibold text-[#001F3F]">{item.name}</h4>
                      <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                          <Minus className="h-4 w-4 text-[#001F3F]" />
                        </button>
                        <span className="px-3 font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                          <Plus className="h-4 w-4 text-[#001F3F]" />
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-300 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-[#001F3F]">Subtotal</span>
                  <span className="text-xl font-bold text-[#001F3F]">₹{subtotal.toFixed(2)}</span>
                </div>
                <Button onClick={handleCheckout} className="w-full bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-bold text-lg py-3">
                  Proceed to Checkout
                </Button>
                <Button variant="ghost" onClick={clearCart} className="w-full mt-2 text-red-600 hover:bg-red-100">
                  Clear Cart
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;