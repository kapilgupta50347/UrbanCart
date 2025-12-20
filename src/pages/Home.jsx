import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Pill, UtensilsCrossed, Truck, Wrench, Zap, Users, Leaf, Star, ArrowRight, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { icon: ShoppingBag, name: 'Groceries', color: 'text-green-600' },
    { icon: Pill, name: 'Medicines', color: 'text-red-600' },
    { icon: UtensilsCrossed, name: 'Tiffin Service', color: 'text-orange-600' },
    { icon: Truck, name: 'Pickup & Drop', color: 'text-blue-600' },
    { icon: Wrench, name: 'Local Services', color: 'text-purple-600' },
    { icon: Zap, name: 'Quick Delivery', color: 'text-yellow-600' },
  ];

  const testimonials = [
    { name: 'Priya Sharma', text: 'UrbanCart saved my day! Got medicines delivered in 10 minutes.', rating: 5 },
    { name: 'Rajesh Kumar', text: 'Supporting local vendors while getting everything I need. Perfect!', rating: 5 },
    { name: 'Anita Desai', text: 'The tiffin service is amazing. Fresh, local, and on time!', rating: 5 },
  ];

  return (
    <div className="bg-[#F5F5DC]">
      <Helmet>
        <title>UrbanCart – Your Neighborhood. Digitized.</title>
        <meta name="description" content="Quick Everything Around You. Order groceries, medicines, tiffins, and local services within 1 km. Community-driven, eco-friendly delivery." />
      </Helmet>

      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 right-4 z-50 bg-white shadow-2xl rounded-lg p-4 max-w-sm border-l-4 border-[#FFD23F]"
        >
          <div className="flex items-start space-x-3">
            <Bell className="h-5 w-5 text-[#FFD23F] mt-0.5" />
            <div>
              <p className="font-semibold text-[#001F3F] text-sm">Live Update</p>
              <p className="text-xs text-gray-600 mt-1">
                Your delivery from <span className="font-semibold">Sharma Store</span> is <span className="text-[#FFD23F] font-bold">6 mins away</span> 🚴‍♂️
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <section className="gradient-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Your Neighborhood.<br />
              <span className="text-[#FFD23F]">Digitized.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F5DC] mb-8 max-w-3xl mx-auto">
              Quick Everything Around You. Groceries, medicines, tiffins, and local services — all within 1 km.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/store">
                <Button
                  size="lg"
                  className="bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-bold text-lg px-8 py-6"
                >
                  Order Nearby <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/merchants">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#FFD23F] text-[#FFD23F] hover:bg-[#FFD23F] hover:text-[#001F3F] font-bold text-lg px-8 py-6"
                >
                  Join as a Vendor
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <img className="w-full rounded-2xl shadow-2xl" alt="Urban neighborhood with local shops and delivery bikes" src="https://images.unsplash.com/photo-1689090875644-6beb59835389" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4">Everything You Need, Right Around You</h2>
            <p className="text-lg text-gray-700">Discover local services and products within 1 km</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center cursor-pointer border-2 border-transparent hover:border-[#FFD23F] transition-all"
              >
                <service.icon className={`h-12 w-12 mx-auto mb-3 ${service.color}`} />
                <p className="font-semibold text-[#001F3F]">{service.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/explore">
              <Button size="lg" className="bg-[#001F3F] text-white hover:bg-[#003366] font-semibold">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#001F3F] mb-6">Community-Powered Delivery</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-[#FFD23F] mt-1" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">Local Empowerment</p>
                    <p className="text-gray-600 text-sm">Supporting neighborhood vendors and delivery partners</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">Eco-Friendly EV Deliveries</p>
                    <p className="text-gray-600 text-sm">Zero-emission electric vehicles for sustainable delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-[#FFD23F] mt-1" />
                  <div>
                    <p className="font-semibold text-[#001F3F]">Lightning Fast</p>
                    <p className="text-gray-600 text-sm">Average delivery time: 15 minutes within 1 km radius</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img className="w-full rounded-2xl shadow-xl" alt="Electric delivery bike with UrbanCart branding" src="https://images.unsplash.com/photo-1673476258327-597210eebeaa" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4">What Our Community Says</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFD23F] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-[#001F3F]">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-yellow py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6">Ready to Experience UrbanCart?</h2>
            <p className="text-lg text-[#001F3F] mb-8">
              Join thousands of happy customers getting everything they need from their neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/store">
                <Button
                  size="lg"
                  className="bg-[#001F3F] text-white hover:bg-[#003366] font-bold text-lg px-8 py-6"
                >
                  Start Ordering Now
                </Button>
              </Link>
              <Link to="/plus">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white font-bold text-lg px-8 py-6"
                >
                  Get UrbanCart+
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;