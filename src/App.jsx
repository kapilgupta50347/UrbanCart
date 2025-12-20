import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import ExploreNearby from '@/pages/ExploreNearby';
import ForMerchants from '@/pages/ForMerchants';
import UrbanCartPlus from '@/pages/UrbanCartPlus';
import Contact from '@/pages/Contact';
import Store from '@/pages/Store';
import ProductDetailPage from '@/pages/ProductDetailPage';
import SuccessPage from '@/pages/SuccessPage';


function App() {
  return (
    <Router>
      <Helmet>
        <title>UrbanCart – The Neighborhood Utility Network</title>
        <meta name="description" content="Quick Everything Around You. Connect to groceries, medicines, tiffins, and local services within 1 km. Your neighborhood, digitized." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-[#001F3F]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExploreNearby />} />
            <Route path="/merchants" element={<ForMerchants />} />
            <Route path="/plus" element={<UrbanCartPlus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;