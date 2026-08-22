import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rawArbitrators from '../data/parsed_arbitrators.json';

// The new parsed JSON is already in the correct format, so we can just use it directly
// filter out any empty ones just in case
const arbitratorsList = rawArbitrators.filter(a => a.name);

const executiveMembers = [
  { id: 'exec-17', name: "م.إمحمد غولة - ليبيا", category: "الرئاسية" },
  { id: 'exec-1', name: "م. جودت يغمور - الأردن", category: "الرئاسية" },
  { id: 'exec-2', name: "م. فؤاد الكندي - عُمان", category: "الرئاسية" },
  { id: 'exec-3', name: "م. فيصل الشريف - السعودية", category: "الرئاسية" },
  { id: 'exec-4', name: "م. ناصر المطيري - الكويت", category: "الرئاسية" },
  { id: 'exec-5', name: "م. شادي بن خليفة - تونس", category: "الرئاسية" },
  { id: 'exec-6', name: "م. طارق العتماوي - فلسطين", category: "الرئاسية" },
  { id: 'exec-7', name: "م. عمر سلام - العراق", category: "الرئاسية" },
  { id: 'exec-8', name: "م. معتز طلبه - مصر", category: "الرئاسية" },
  { id: 'exec-9', name: "م. توفيق سنان - لبنان", category: "الرئاسية" },
  { id: 'exec-10', name: "م. داود خلف - الأردن", category: "الرئاسية" },
  { id: 'exec-11', name: "م. محمد سعيد فتحة - لبنان", category: "الرئاسية" },
  { id: 'exec-12', name: "م. عبد الكريم سعدون - السعودية", category: "الرئاسية" },
  { id: 'exec-13', name: "د. إبراهيم الضبيب - السعودية", category: "الرئاسية" },
  { id: 'exec-14', name: "م. محمد أبو زكي - عُمان", category: "الرئاسية" },
  { id: 'exec-15', name: "د. شريف الهجان - مصر", category: "الرئاسية" },
  { id: 'exec-16', name: "م. محمد عبد الغني - مصر", category: "الرئاسية" },
  { id: 'exec-20', name: "م. محمد ماجد خلوصي - مصر", category: "الرئاسية" },
  { id: 'exec-18', name: "م. منذر الساكت - الأردن", category: "الرئاسية" },
  { id: 'exec-19', name: "م. نبيل عباس - السعودية", category: "الرئاسية" },
];

const cleanNameForSort = (name) => {
  if (!name) return '';
  // Remove common titles to sort by actual name
  return name.replace(/^(م\.|د\.|أ\.|م\s|د\s|أ\s)\s*/, '').trim();
};

const allArbitratorsList = [...executiveMembers, ...arbitratorsList].sort((a, b) =>
  cleanNameForSort(a.name).localeCompare(cleanNameForSort(b.name), 'ar')
);

const allCategories = ["الرئاسية", "فئة أ", "فئة ب"];

const ArbitratorsSection = () => {
  const [activeCategory, setActiveCategory] = useState("الرئاسية");
  const [activeCountry, setActiveCountry] = useState("الكل");

  useEffect(() => {
    setActiveCountry("الكل");
  }, [activeCategory]);

  const filteredByCategory = allArbitratorsList.filter(a => a.category === activeCategory);

  const uniqueCountries = [...new Set(filteredByCategory.map(a => a.country).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ar'));
  const countries = ["الكل", ...uniqueCountries];

  const filteredArbitrators = activeCountry === 'الكل'
    ? filteredByCategory
    : filteredByCategory.filter(a => a.country === activeCountry);

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

          {/* Primary Filters (Categories) */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 max-w-5xl mx-auto">
            {allCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-md font-bold transition-all duration-300 text-lg ${activeCategory === category
                  ? 'bg-secondary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Secondary Filters (Countries) */}
          <AnimatePresence>
            {activeCategory !== 'الرئاسية' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto"
              >
                {countries.map((country, index) => (
                  <button
                    key={`country-${index}`}
                    onClick={() => setActiveCountry(country)}
                    className={`px-6 py-2 rounded-md font-bold transition-all duration-300 ${activeCountry === country
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 text-sm'
                      }`}
                  >
                    {country}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {activeCategory === 'الرئاسية' && <div className="mb-16"></div>}

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
                    {arbitrator.country && (
                      <div className="flex items-center justify-start gap-2 text-gray-600 font-medium">
                        <span>{arbitrator.country}</span>
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      </div>
                    )}
                    {arbitrator.specialty && (
                      <div className="flex items-center justify-start gap-2 text-gray-500 text-sm">
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
