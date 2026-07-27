import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { BookOpen } from 'lucide-react';

const MagazinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="ما نقدمه" title="المجلة" />
        
        <section className="py-24 text-center">
          <div className="container mx-auto px-4">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-dark mb-4">قريباً...</h2>
            <p className="text-gray-500 text-lg">سيتم إضافة أعداد ومقالات المجلة قريباً.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MagazinePage;
