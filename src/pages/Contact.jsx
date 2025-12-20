import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Contact Form Coming Soon!",
      description: "Message submission will be available soon. You can request this feature in your next prompt! 🚀",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    toast({
      title: "🚧 WhatsApp Integration Coming Soon!",
      description: "WhatsApp chat will be available soon. You can request this feature in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us – UrbanCart Support</title>
        <meta name="description" content="Get in touch with UrbanCart. We're here to help with your questions, feedback, and support needs." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5DC]">
        <section className="gradient-navy text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <MessageCircle className="h-16 w-16 text-[#FFD23F] mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-[#F5F5DC] max-w-3xl mx-auto">
                We're here to help! Reach out with any questions, feedback, or support needs
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-[#FFD23F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-[#001F3F]" />
                </div>
                <h3 className="font-bold text-lg text-[#001F3F] mb-2">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-sm text-gray-500 mt-2">Mon-Sat, 9 AM - 8 PM</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-[#FFD23F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-[#001F3F]" />
                </div>
                <h3 className="font-bold text-lg text-[#001F3F] mb-2">Email Us</h3>
                <p className="text-gray-600">support@urbancart.com</p>
                <p className="text-sm text-gray-500 mt-2">24/7 Support</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="bg-[#FFD23F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-[#001F3F]" />
                </div>
                <h3 className="font-bold text-lg text-[#001F3F] mb-2">Visit Us</h3>
                <p className="text-gray-600">Bangalore, Karnataka</p>
                <p className="text-sm text-gray-500 mt-2">India</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-bold text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-4">Quick Support via WhatsApp</h3>
                  <p className="text-gray-700 mb-6">
                    Get instant answers to your questions through our WhatsApp support channel.
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 text-white hover:bg-green-700 font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-[#001F3F] mb-1">How do I track my order?</p>
                      <p className="text-sm text-gray-600">You'll receive real-time updates via SMS and app notifications.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#001F3F] mb-1">What's the delivery radius?</p>
                      <p className="text-sm text-gray-600">We deliver within 1 km of your location for fastest service.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#001F3F] mb-1">How do I become a vendor?</p>
                      <p className="text-sm text-gray-600">Visit our "For Merchants" page and fill out the registration form.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;