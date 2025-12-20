import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Store, TrendingUp, Users, Smartphone, BarChart3, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';

const ForMerchants = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    category: '',
    address: '',
  });

  const benefits = [
    { icon: Users, title: 'Reach Local Customers', description: 'Connect with thousands of nearby customers actively looking for your services' },
    { icon: TrendingUp, title: 'Grow Your Business', description: 'Increase sales with our easy-to-use platform and marketing support' },
    { icon: Smartphone, title: 'Easy Management', description: 'Manage orders, inventory, and analytics from your smartphone' },
    { icon: Clock, title: 'Quick Onboarding', description: 'Get started in minutes with our simple registration process' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Registration Coming Soon!",
      description: "Merchant registration will be available soon. You can request this feature in your next prompt! 🚀",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>For Merchants – Join UrbanCart</title>
        <meta name="description" content="Join UrbanCart as a vendor. Grow your local business, reach more customers, and digitize your neighborhood store." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5DC]">
        <section className="gradient-navy text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Store className="h-16 w-16 text-[#FFD23F] mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow Your Business with UrbanCart</h1>
              <p className="text-xl text-[#F5F5DC] max-w-3xl mx-auto">
                Join our network of local vendors and reach thousands of customers in your neighborhood
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Why Partner with UrbanCart?</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <benefit.icon className="h-12 w-12 text-[#FFD23F] mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-[#001F3F] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Merchant Dashboard Preview</h2>
                <p className="text-gray-700 mb-6">
                  Track your sales, manage inventory, and analyze customer behavior with our intuitive dashboard.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Real-time order notifications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Sales analytics and insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Inventory management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Customer feedback system</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-2xl p-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-semibold text-[#001F3F]">Today's Sales</span>
                    <span className="text-2xl font-bold text-green-600">₹12,450</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-semibold text-[#001F3F]">Active Orders</span>
                    <span className="text-2xl font-bold text-[#FFD23F]">23</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-semibold text-[#001F3F]">Customer Rating</span>
                    <span className="text-2xl font-bold text-[#001F3F]">4.8 ★</span>
                  </div>
                  <div className="pt-4">
                    <BarChart3 className="h-32 w-full text-[#FFD23F]" />
                    <p className="text-center text-sm text-gray-600 mt-2">Weekly Sales Trend</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-[#001F3F] mb-6 text-center">Register Your Business</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                    placeholder="e.g., Sharma Kirana Store"
                  />
                </div>

                <div>
                  <Label htmlFor="ownerName">Owner Name *</Label>
                  <input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Business Category *</Label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                  >
                    <option value="">Select a category</option>
                    <option value="groceries">Groceries</option>
                    <option value="medicines">Medicines</option>
                    <option value="tiffin">Tiffin Service</option>
                    <option value="services">Local Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="address">Business Address *</Label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                    placeholder="Complete address with landmark"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-bold text-lg py-6"
                >
                  Submit Registration
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForMerchants;