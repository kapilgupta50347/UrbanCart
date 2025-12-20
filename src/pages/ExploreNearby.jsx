import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingBag, Pill, UtensilsCrossed, Truck, Wrench, Scissors, Printer, Home, MapPin, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ExploreNearby = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'groceries', name: 'Groceries', icon: ShoppingBag, color: 'bg-green-100 text-green-600' },
    { id: 'medicines', name: 'Medicines', icon: Pill, color: 'bg-red-100 text-red-600' },
    { id: 'tiffin', name: 'Tiffin Service', icon: UtensilsCrossed, color: 'bg-orange-100 text-orange-600' },
    { id: 'pickup', name: 'Pickup & Drop', icon: Truck, color: 'bg-blue-100 text-blue-600' },
    { id: 'plumber', name: 'Plumber', icon: Wrench, color: 'bg-purple-100 text-purple-600' },
    { id: 'laundry', name: 'Laundry', icon: Scissors, color: 'bg-pink-100 text-pink-600' },
    { id: 'printing', name: 'Printing', icon: Printer, color: 'bg-indigo-100 text-indigo-600' },
    { id: 'cleaning', name: 'Home Cleaning', icon: Home, color: 'bg-teal-100 text-teal-600' },
  ];

  const stores = [
    { name: 'Sharma Kirana Store', category: 'groceries', distance: '0.3 km', rating: 4.5, image: 'Local grocery store with fresh vegetables and daily essentials' },
    { name: 'MedPlus Pharmacy', category: 'medicines', distance: '0.5 km', rating: 4.8, image: 'Modern pharmacy with medicines and healthcare products' },
    { name: 'Annapurna Tiffin Service', category: 'tiffin', distance: '0.4 km', rating: 4.7, image: 'Home-cooked tiffin service with traditional Indian meals' },
    { name: 'QuickMove Logistics', category: 'pickup', distance: '0.6 km', rating: 4.3, image: 'Delivery service with bikes and packages' },
    { name: 'Kumar Plumbing Services', category: 'plumber', distance: '0.7 km', rating: 4.6, image: 'Professional plumber fixing pipes' },
    { name: 'Fresh & Clean Laundry', category: 'laundry', distance: '0.4 km', rating: 4.4, image: 'Modern laundry service with clean clothes' },
  ];

  const filteredStores = selectedCategory === 'all' 
    ? stores 
    : stores.filter(store => store.category === selectedCategory);

  const handleStoreClick = (storeName) => {
    toast({
      title: "🚧 Store Details Coming Soon!",
      description: `${storeName} details will be available soon. You can request this feature in your next prompt! 🚀`,
    });
  };

  const handleSearch = () => {
    toast({
      title: "🚧 Search Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Explore Nearby – UrbanCart</title>
        <meta name="description" content="Discover local stores and services within 1 km. Groceries, medicines, tiffins, and more from your neighborhood." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5DC]">
        <section className="gradient-navy text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Nearby</h1>
              <p className="text-xl text-[#F5F5DC] mb-8">Discover everything within 1 km of you</p>
              
              <div className="max-w-2xl mx-auto flex gap-2">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for stores, services, or products..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-[#001F3F] focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  className="bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-semibold px-6"
                >
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#001F3F]">Categories</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-[#FFD23F] text-[#001F3F]' : ''}
              >
                <Filter className="h-4 w-4 mr-2" />
                All
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${category.color} rounded-xl p-4 cursor-pointer text-center transition-all ${
                    selectedCategory === category.id ? 'ring-2 ring-[#FFD23F] ring-offset-2' : ''
                  }`}
                >
                  <category.icon className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-xs font-semibold">{category.name}</p>
                </motion.div>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#001F3F] mb-6">
                {selectedCategory === 'all' ? 'All Stores & Services' : `${categories.find(c => c.id === selectedCategory)?.name} Near You`}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStores.map((store, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => handleStoreClick(store.name)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all"
                  >
                    <img className="w-full h-48 object-cover" alt={store.name} src="https://images.unsplash.com/photo-1631367771698-606007aecd52" />
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-[#001F3F] mb-2">{store.name}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-[#FFD23F]" />
                          <span>{store.distance}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-[#FFD23F]">★</span>
                          <span className="font-semibold">{store.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-[#001F3F] text-white hover:bg-[#003366]">
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4">Nearby Discovery Map</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.5945%2C12.9716%2C77.6045%2C12.9816&layer=mapnik"
                  className="w-full h-full"
                  title="Nearby stores map"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Interactive map showing all nearby stores and services within 1 km
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExploreNearby;