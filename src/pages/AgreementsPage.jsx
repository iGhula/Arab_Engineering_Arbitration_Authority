import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const AgreementsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="اتفاقيات" title="الاتفاقيات" />
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">قريباً</h2>
            <p className="text-gray-500 text-lg">هذه الصفحة قيد الإنشاء. سيتم إضافة المحتوى الخاص بالاتفاقيات قريباً.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgreementsPage;
