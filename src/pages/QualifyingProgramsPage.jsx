import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import QualifyingProgramsSection from '../components/QualifyingProgramsSection';

const QualifyingProgramsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#04111d] z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="البرامج التأهيلية" title="البرامج التأهيلية" />
        <div className="-mt-16 relative z-20">
        <QualifyingProgramsSection />
              </div>
      </main>

      <Footer />
    </div>
  );
};

export default QualifyingProgramsPage;
