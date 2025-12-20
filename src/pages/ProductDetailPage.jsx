import React, { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/components/ui/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = useCallback(async () => {
    setIsLoading(true);
    try {
      // Add to cart logic here
      toast({
        title: 'Added to cart',
        description: 'Product added to your shopping cart.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add product to cart.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [quantity, addToCart, toast]);

  return (
    <div className="min-h-screen bg-[#001F3F] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="mb-6 text-white hover:bg-white/10"
        >
          <ChevronLeft className="mr-2" size={20} />
          Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Product Image */}
          <div className="flex items-center justify-center bg-white/5 rounded-lg p-8">
            <div className="w-full h-96 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl font-bold mb-4">Product Name</h1>
            <p className="text-xl text-purple-400 font-semibold mb-4">₹0.00</p>
            
            <p className="text-gray-300 mb-6">
              Product description goes here.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg font-medium">Quantity:</span>
              <div className="flex items-center border border-white/20 rounded-md">
                <Button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  size="sm"
                  variant="ghost"
                  className="px-3 text-white hover:bg-white/10"
                >
                  <Minus size={16} />
                </Button>
                <span className="px-4 py-2 text-white">{quantity}</span>
                <Button
                  onClick={() => setQuantity(quantity + 1)}
                  size="sm"
                  variant="ghost"
                  className="px-3 text-white hover:bg-white/10"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 text-lg flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
