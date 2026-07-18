import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const MembershipsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="عضويات" title="العضويات" />
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" style={{ height: '80vh' }}>
              <iframe 
                src="/إستمارة الحصول على هوية الهيئة العربية للتحكيم الهندسي.pdf#toolbar=0" 
                className="w-full h-full border-none pointer-events-auto"
                title="إستمارة الحصول على هوية الهيئة"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MembershipsPage;
