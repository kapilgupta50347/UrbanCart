import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { CartContext } from '@/context/CartContext';

const mockProducts = [
  { id: 1, name: 'Amul Gold Milk', price: 30, store: 'Sharma Kirana', image: 'Packet of Amul Gold milk' },
  { id: 2, name: 'Britannia Bread', price: 45, store: 'Sharma Kirana', image: 'Loaf of Britannia bread' },
  { id: 3, name: 'Parle-G Biscuits', price: 10, store: 'Gupta General Store', image: 'Packet of Parle-G biscuits' },
  { id: 4, name: 'Crocin Pain Relief', price: 35, store: 'MedPlus Pharmacy', image: 'Strip of Crocin tablets' },
  { id: 5, name: 'Onion (1kg)', price: 40, store: 'Fresh Veggies', image: 'A kilogram of fresh onions' },
  { id: 6, name: 'Tomato (1kg)', price: 30, store: 'Fresh Veggies', image: 'A kilogram of fresh tomatoes' },
  { id: 7, name: 'Maggi Noodles', price: 14, store: 'Sharma Kirana', image: 'Packet of Maggi 2-Minute Noodles' },
  { id: 8, name: 'Dettol Antiseptic', price: 80, store: 'MedPlus Pharmacy', image: 'Bottle of Dettol antiseptic liquid' },
];

const OrderNearby = () => {
  const { toast } = useToast();
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Search In Progress!",
      description: "This feature isn't fully implemented, but we're showing all products for now! 🚀",
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "✅ Item Added!",
      description: `${product.name} has been added to your cart.`,
      className: 'bg-green-100 border-green-400 text-green-800',
    });
  };

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Order Nearby – UrbanCart</title>
        <meta name="description" content="Search for products from nearby stores and add them to your cart for quick delivery." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5DC]">
        <section className="gradient-navy text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Order from Nearby Stores</h1>
              <p className="text-xl text-[#F5F5DC] mb-8">Find exactly what you need from your local neighborhood.</p>
              
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-2">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for milk, bread, medicines..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-[#001F3F] focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-semibold px-6"
                >
                  Search
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#001F3F] flex items-center">
                <ShoppingBag className="mr-3 h-8 w-8 text-[#FFD23F]" />
                Product Catalog
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                >
                  <img className="w-full h-48 object-cover" alt={product.name} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg text-[#001F3F]">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">from {product.store}</p>
                    <div className="flex-grow"></div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-[#001F3F]">₹{product.price.toFixed(2)}</span>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                        className="bg-[#001F3F] text-white hover:bg-[#003366]"
                      >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">No products found for "{searchTerm}". Try another search!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default OrderNearby;