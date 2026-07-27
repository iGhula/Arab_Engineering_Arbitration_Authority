import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { UserCircle, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const presidents = [
  {
    id: 3,
    name: "م. غياث طيفور",
    country: "سوريا",
    period: "14/1/2022 - حتى تاريخه",
    note: "نقيب مهندسي سوريا",
    status: "current"
  },
  {
    id: 2,
    name: "م. كمال محجوب",
    country: "تونس",
    period: "27/8/2016 - 1/8/2021",
    note: "عميد مهندسي تونس سابقاً",
    status: "former"
  },
  {
    id: 1,
    name: "م. محمد ماجد خلوصي",
    country: "مصر",
    period: "10/7/2012 - 9/7/2016",
    note: "نقيب مهندسي مصر سابقاً",
    status: "former"
  }
];

const PresidentsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="عن الهيئة" title="رؤساء الهيئة عبر السنوات" />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">قيادات الهيئة العربية للتحكيم الهندسي</h2>
              <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                تفخر الهيئة بقيادتها التي ساهمت في تأسيس وتطوير منظومة التحكيم الهندسي في الوطن العربي منذ تأسيسها.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {presidents.map((president, index) => (
                <motion.div
                  key={president.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`bg-white rounded-3xl p-8 shadow-lg border-t-4 transition-transform hover:-translate-y-2 hover:shadow-xl ${
                    president.status === 'current' ? 'border-primary' : 'border-secondary/50'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-inner ${
                      president.status === 'current' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <UserCircle className="w-16 h-16" />
                    </div>
                    
                    {president.status === 'current' && (
                      <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4 flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        الرئيس الحالي
                      </span>
                    )}

                    <h3 className="text-2xl font-bold text-dark mb-4">{president.name}</h3>
                    
                    <div className="w-full space-y-4">
                      <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl">
                        <MapPin className="w-5 h-5 text-secondary shrink-0" />
                        <span className="font-medium text-right flex-grow">{president.country}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl">
                        <Calendar className="w-5 h-5 text-secondary shrink-0" />
                        <span className="font-medium text-right flex-grow dir-ltr">{president.period}</span>
                      </div>
                      
                      <div className="flex items-start gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl">
                        <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="font-medium text-right leading-tight flex-grow">{president.note}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PresidentsPage;
