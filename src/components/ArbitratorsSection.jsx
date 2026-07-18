import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rawArbitrators from '../data/arbitrators.json';

// Parse the JSON data from the Excel sheet (removing header row)
const arbitratorsList = rawArbitrators.slice(1).map((row, index) => ({
  id: row[0] || `auto-${index}`,
  name: row[1],
  country: row[2],
  specialty: row[3]
})).filter(a => a.name); // Filter out empty rows

const uniqueCountries = [...new Set(arbitratorsList.map(a => a.country).filter(Boolean))];
const countries = ["الكل", "الرئاسية", ...uniqueCountries];

const ArbitratorsSection = () => {
  const [activeTab, setActiveTab] = useState('الكل');

  const filteredArbitrators = activeTab === 'الكل' 
    ? arbitratorsList 
    : arbitratorsList.filter(a => a.country === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[45vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" alt="Arbitrators Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary/80 to-dark/90"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-5 py-1.5 rounded-full bg-white/10 text-secondary border border-secondary/30 backdrop-blur-md text-sm font-bold tracking-wider"
          >
            المحكمين
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl"
          >
            القوائم الموحدة للمحكمين
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-1.5 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(202,138,4,0.5)]"
          ></motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 -mt-24 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(country)}
                className={`px-6 py-2 rounded-md font-bold transition-all duration-300 ${
                  activeTab === country 
                    ? 'bg-primary text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 text-sm'
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Arbitrators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredArbitrators.map((arbitrator) => (
                <motion.div
                  layout
                  key={arbitrator.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col text-right hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                    {arbitrator.name}
                  </h3>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex items-center justify-end gap-2 text-gray-600 font-medium">
                      <span>{arbitrator.country}</span>
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    </div>
                    {arbitrator.specialty && (
                      <div className="flex items-center justify-end gap-2 text-gray-500 text-sm">
                        <span>{arbitrator.specialty}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredArbitrators.length === 0 && (
              <div className="col-span-full text-center py-24 text-gray-500 text-lg">
                لا يوجد محكمين في هذا التصنيف حالياً.
              </div>
            )}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ArbitratorsSection;
