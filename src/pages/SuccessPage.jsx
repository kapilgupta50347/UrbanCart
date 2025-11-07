import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>Payment Successful - UrbanCart</title>
        <meta name="description" content="Your order has been placed successfully." />
      </Helmet>
      <div className="min-h-[60vh] flex items-center justify-center bg-[#001F3F] p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-center bg-white/5 p-10 rounded-2xl shadow-2xl max-w-lg"
        >
          <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-lg text-gray-300 mb-8">
            Thank you for your order. We've received your payment and are getting your items ready for delivery.
          </p>
          <Link to="/store">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
              Continue Shopping <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default SuccessPage;