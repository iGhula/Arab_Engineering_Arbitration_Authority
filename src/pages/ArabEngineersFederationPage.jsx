import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArabEngineersFederationSection from '../components/ArabEngineersFederationSection';

const ArabEngineersFederationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#04111d] z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-white relative z-10">
        <ArabEngineersFederationSection />
      </main>

      <Footer />
    </div>
  );
};

export default ArabEngineersFederationPage;
