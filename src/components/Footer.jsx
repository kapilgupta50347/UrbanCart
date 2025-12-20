import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingCart className="h-8 w-8 text-[#FFD23F]" />
              <span className="text-2xl font-bold">UrbanCart</span>
            </div>
            <p className="text-[#F5F5DC] text-sm">
              Your Neighborhood. Digitized. Quick everything around you within 1 km.
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-[#F5F5DC] hover:text-[#FFD23F] transition-colors text-sm">
                Home
              </Link>
              <Link to="/explore" className="block text-[#F5F5DC] hover:text-[#FFD23F] transition-colors text-sm">
                Explore Nearby
              </Link>
              <Link to="/merchants" className="block text-[#F5F5DC] hover:text-[#FFD23F] transition-colors text-sm">
                For Merchants
              </Link>
              <Link to="/plus" className="block text-[#F5F5DC] hover:text-[#FFD23F] transition-colors text-sm">
                UrbanCart+
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Support</span>
            <div className="space-y-2">
              <Link to="/contact" className="block text-[#F5F5DC] hover:text-[#FFD23F] transition-colors text-sm">
                Contact Us
              </Link>
              <p className="text-[#F5F5DC] text-sm">Help Center</p>
              <p className="text-[#F5F5DC] text-sm">Privacy Policy</p>
              <p className="text-[#F5F5DC] text-sm">Terms of Service</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Connect With Us</span>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-[#F5F5DC] hover:text-[#FFD23F] cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-[#F5F5DC] hover:text-[#FFD23F] cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-[#F5F5DC] hover:text-[#FFD23F] cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-[#F5F5DC] hover:text-[#FFD23F] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#FFD23F]/20 pt-6 text-center">
          <p className="text-[#F5F5DC] text-sm">
            © 2025 UrbanCart | Built for Neighborhood Convenience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;