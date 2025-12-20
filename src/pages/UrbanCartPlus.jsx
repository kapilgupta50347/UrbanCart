import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Crown, Zap, Gift, Truck, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const UrbanCartPlus = () => {
  const { toast } = useToast();

  const benefits = [
    { icon: Truck, title: 'Free Unlimited Deliveries', description: 'Zero delivery charges on all orders, no minimum order value' },
    { icon: Zap, title: 'Priority Service', description: 'Get your orders delivered 2x faster with priority queue' },
    { icon: Gift, title: 'Exclusive Deals', description: 'Access member-only discounts and special offers from local vendors' },
    { icon: Star, title: 'Early Access', description: 'Be the first to try new services and features' },
  ];

  const plans = [
    { name: 'Monthly', price: '₹99', period: '/month', savings: null },
    { name: 'Quarterly', price: '₹249', period: '/3 months', savings: 'Save ₹48', popular: true },
    { name: 'Yearly', price: '₹899', period: '/year', savings: 'Save ₹289' },
  ];

  const handleSubscribe = (planName) => {
    toast({
      title: "🚧 Subscription Coming Soon!",
      description: `${planName} subscription will be available soon. You can request this feature in your next prompt! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>UrbanCart+ – Premium Membership</title>
        <meta name="description" content="Get unlimited free deliveries, priority service, and exclusive deals with UrbanCart+ membership. Join now and save on every order." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5DC]">
        <section className="gradient-yellow py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Crown className="h-16 w-16 text-[#001F3F] mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
                Upgrade to UrbanCart+
              </h1>
              <p className="text-xl text-[#001F3F] max-w-3xl mx-auto">
                Unlimited free deliveries, priority service, and exclusive perks for your neighborhood shopping
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
              <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Premium Benefits</h2>
              <p className="text-gray-700">Everything you need for hassle-free neighborhood shopping</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="bg-[#FFD23F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-[#001F3F]" />
                  </div>
                  <h3 className="font-bold text-lg text-[#001F3F] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Choose Your Plan</h2>
              <p className="text-gray-700">Select the plan that works best for you</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-8 shadow-lg text-center relative ${
                    plan.popular ? 'ring-4 ring-[#FFD23F] scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFD23F] text-[#001F3F] px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#001F3F]">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="text-green-600 font-semibold mb-6">{plan.savings}</p>
                  )}
                  <Button
                    onClick={() => handleSubscribe(plan.name)}
                    className={`w-full font-bold ${
                      plan.popular
                        ? 'bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107]'
                        : 'bg-[#001F3F] text-white hover:bg-[#003366]'
                    }`}
                  >
                    Subscribe Now
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-[#001F3F] mb-6 text-center">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Unlimited free deliveries',
                  'Priority customer support',
                  'Exclusive member discounts',
                  'Early access to new features',
                  'Special festival offers',
                  'Birthday rewards',
                  'Referral bonuses',
                  'No minimum order value',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="gradient-navy py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Save More?</h2>
              <p className="text-xl text-[#F5F5DC] mb-8">
                Join thousands of happy UrbanCart+ members enjoying unlimited free deliveries
              </p>
              <Button
                onClick={() => handleSubscribe('Premium')}
                size="lg"
                className="bg-[#FFD23F] text-[#001F3F] hover:bg-[#FFC107] font-bold text-lg px-12 py-6"
              >
                Get UrbanCart+ Now
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UrbanCartPlus;