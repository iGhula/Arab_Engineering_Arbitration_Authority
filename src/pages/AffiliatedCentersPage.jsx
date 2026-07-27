import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, FileText, Info, Calendar, Handshake } from 'lucide-react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const centersData = [
  {
    id: 1,
    name: "الأكاديمية الدولية للوساطة والتحكيم",
    activity: "مشاركة الهيئة في فعاليات ودورات الأكاديمية بالقاهرة",
    date: "ديسمبر 2018"
  },
  {
    id: 2,
    name: "مركز التحكيم التجاري لدول مجلس التعاون الخليجي",
    activity: "مذكرة تفاهم للتعاون بين الهيئة والمركز",
    date: "اعتُمدت 2024"
  }
];

const AffiliatedCentersPage = () => {
  const [activeTab, setActiveTab] = useState('howTo');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    { id: 'howTo', label: 'كيفية الانتساب للهيئة', icon: <FileText className="w-5 h-5 ml-2" /> },
    { id: 'centers', label: 'مراكز الهيئة', icon: <Building2 className="w-5 h-5 ml-2" /> }
  ];

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="مراكز منتسبة" title="مراكز منتسبة للهيئة" />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 relative ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg transform -translate-y-1'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-primary'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 border-2 border-primary rounded-xl"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[60vh] p-4 md:p-8 relative">
              <AnimatePresence mode="wait">
                {activeTab === 'howTo' && (
                  <motion.div
                    key="howTo"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-[80vh] flex flex-col"
                  >
                    <div className="text-center mb-6 shrink-0">
                      <h3 className="text-2xl font-bold text-dark mb-2">تصور انتساب مراكز ومؤسسات التحكيم والوساطة</h3>
                      <div className="h-1 w-16 bg-secondary mx-auto rounded"></div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 grow shadow-sm mb-6">
                      <iframe 
                        src="/تصور_انتساب_مراكز_ومؤسسات_التحكيم_والوساطة.pdf#toolbar=0" 
                        className="w-full h-full border-none pointer-events-auto"
                        title="تصور انتساب مراكز ومؤسسات التحكيم والوساطة"
                      ></iframe>
                    </div>
                    <div className="flex justify-center shrink-0">
                      <a 
                        href="/نموذج_طلب_انتساب_الجهات_للهيئة.docx" 
                        download="نموذج_طلب_انتساب_الجهات_للهيئة.docx"
                        className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <FileText className="w-6 h-6" />
                        تحميل نموذج طلب الانتساب (Word)
                      </a>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'centers' && (
                  <motion.div
                    key="centers"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <div className="text-center mb-10">
                      <h3 className="text-2xl font-bold text-dark mb-2">مراكز الهيئة والتعاون المشترك</h3>
                      <div className="h-1 w-16 bg-primary mx-auto rounded"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {centersData.map((center, index) => (
                        <motion.div 
                          key={center.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group flex flex-col"
                        >
                          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                              <Building2 className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-dark leading-tight">{center.name}</h4>
                          </div>
                          
                          <div className="flex-grow space-y-4">
                            <div className="flex items-start gap-3 text-gray-700">
                              <Handshake className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                              <span className="font-medium">{center.activity}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                              <Calendar className="w-5 h-5 text-gray-400 shrink-0" />
                              <span>{center.date}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AffiliatedCentersPage;
