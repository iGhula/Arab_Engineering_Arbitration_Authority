import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import VisionMissionSection from '../components/VisionMissionSection';
import GoalsSection from '../components/GoalsSection';

const VisionMissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      {/* Add a solid background bar at the top to make the absolute header visible */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      
      {/* Header is absolute and z-50 */}
      <Header />
      
      {/* Push main content down to account for the header */}
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="عن الهيئة" title="الرؤية والرسالة" />
        <div className="-mt-16 relative z-20">
          <VisionMissionSection />
          <GoalsSection />

          {/* PDF Section - تقرير عام 2026 */}
          <section id="report" className="py-16 bg-white relative z-10 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-dark mb-4">تقرير عام 2026</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden" style={{ height: '70vh' }}>
                <iframe 
                  src="/تقرير عام عن نشاط الهيئة 15 يوليو 2026.pdf#toolbar=0" 
                  className="w-full h-full border-none pointer-events-auto"
                  title="تقرير عام عن نشاط الهيئة 15 يوليو 2026"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VisionMissionPage;
