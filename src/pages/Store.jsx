import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import ProductsList from '@/components/ProductsList';

const Store = () => {
  return (
    <>
      <Helmet>
        <title>Store – UrbanCart</title>
        <meta name="description" content="Browse and order products from nearby stores." />
      </Helmet>
      <div className="min-h-screen bg-[#001F3F]">
        <section className="gradient-navy text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <ShoppingBag className="mx-auto h-16 w-16 text-[#FFD23F] mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Store</h1>
              <p className="text-xl text-[#F5F5DC]">Your favorite local products, now online.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <ProductsList />
          </div>
        </section>
      </div>
    </>
  );
};
export default Store;