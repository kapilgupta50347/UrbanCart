import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/hooks/useCart';
import ShoppingCartSidebar from '@/components/ShoppingCart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const { cartItems } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Store', path: '/store' },
    { name: 'For Merchants', path: '/merchants' },
    { name: 'UrbanCart+', path: '/plus' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogin = () => {
    toast({
      title: "🚧 Login Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#001F3F] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <ShoppingCart className="h-8 w-8 text-[#FFD23F]" />
                <span className="text-2xl font-bold text-white">UrbanCart</span>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-[#FFD23F] text-[#001F3F]'
                        : 'text-white hover:bg-[#003366]'
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-white hover:bg-[#003366] flex items-center space-x-1"
                onClick={handleLogin}
              >
                <MapPin className="h-4 w-4" />
                <span>Location</span>
              </Button>
              <Button
                onClick={handleLogin}
                className="bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-semibold"
              >
                Login / Sign Up
              </Button>
              <button onClick={() => setIsCartOpen(true)} className="relative text-white hover:text-[#FFD23F] transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
               <button onClick={() => setIsCartOpen(true)} className="relative text-white hover:text-[#FFD23F] transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#FFD23F] transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#003366] border-t border-[#FFD23F]/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-[#FFD23F] text-[#001F3F]'
                      : 'text-white hover:bg-[#001F3F]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={() => {
                  handleLogin();
                  setIsOpen(false);
                }}
                className="w-full bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-semibold mt-2"
              >
                Login / Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
      <ShoppingCartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Navbar;