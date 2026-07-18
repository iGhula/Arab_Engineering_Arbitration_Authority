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
              </div>
      </main>

      <Footer />
    </div>
  );
};

export default VisionMissionPage;
