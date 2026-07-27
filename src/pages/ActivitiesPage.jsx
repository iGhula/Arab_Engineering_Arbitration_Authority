import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { Calendar, MapPin, Info, Users, Presentation, MonitorPlay, Image as ImageIcon, X } from 'lucide-react';

const conferences = [
  {
    id: 1,
    title: 'مؤتمر بعنوان "نحو تأصيل وتفعيل دور المهندس"',
    location: 'مدينة الكويت',
    date: '2016/10/18-16',
    notes: 'نُظم بالتعاون مع جمعية المهندسين الكويتية'
  },
  {
    id: 2,
    title: 'مشاركة في المؤتمر العربي الثالث لعقود الفيديك "الفيديك وآفاق المستقبل"',
    location: 'القاهرة، مصر',
    date: '2018/05/12-10',
    notes: ''
  },
  {
    id: 3,
    title: 'مؤتمر التحكيم الهندسي',
    location: 'مدينة الكويت',
    date: '2024/04/28',
    notes: 'نُظم بالتعاون مع جمعية المهندسين الكويتية، تزامناً مع دورة تأهيل المحكم'
  },
  {
    id: 4,
    title: 'مشاركة في مؤتمر الأكاديمية الدولية للوساطة والتحكيم',
    location: 'القاهرة، مصر',
    date: 'مايو 2024',
    notes: ''
  },
  {
    id: 5,
    title: 'منتدى القاهرة للتحكيم الهندسي',
    location: 'القاهرة، مصر',
    date: 'فبراير 2025',
    notes: 'بالتعاون مع نقابة المهندسين المصريين؛'
  },
  {
    id: 6,
    title: 'منتدى التحكيم الهندسي',
    location: 'مدينة طرابلس، ليبيا',
    date: '2025/10/30',
    notes: 'نُظم بالتعاون مع نقابة المهن الهندسية الليبية، تزامناً مع دورة تأهيل المحكم'
  }
];

const seminars = [
  {
    id: 1,
    title: 'أوراق عمل عن الأحداث الاستثنائية والقوة القاهرة وجائحة كورونا في العقود',
    location: 'عن بعد (أونلاين)',
    date: '2020/06/15'
  },
  {
    id: 2,
    title: 'ندوة عن دور الوساطة في حل النزاعات',
    location: 'عبر تطبيق Zoom (نشاط شهري)',
    date: 'رمضان 2024'
  },
  {
    id: 3,
    title: 'ندوة إلكترونية عن التحكيم الهندسي',
    location: 'نقابة المهندسين في بيروت، لبنان (عن بعد)',
    date: 'سبتمبر 2025'
  }
];

const ActivitiesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = Array.from({ length: 25 }, (_, i) => `/${i + 1}.jpeg`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="نشاطات" title="نشاطات الهيئة" />
        
        {/* Conferences Section */}
        <section id="conferences" className="py-16 bg-white relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl mb-4">
                <Presentation className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">المؤتمرات والمنتديات</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                يتم عقد مؤتمر/منتدى متخصص واحد على الأقل سنوياً ابتداء من 2024، إلى جانب مشاركة الهيئة في فعاليات اتحاد المهندسين العرب الأوسع:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conferences.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full transform hover:-translate-y-1">
                  <div className="h-1.5 w-full bg-gradient-to-l from-primary to-accent"></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-dark mb-5 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-3 mt-auto">
                      <div className="flex items-start text-gray-700">
                        <MapPin className="w-5 h-5 ml-3 text-primary shrink-0 mt-0.5" />
                        <span className="font-medium">{item.location}</span>
                      </div>
                      <div className="flex items-start text-gray-500">
                        <Calendar className="w-5 h-5 ml-3 text-primary shrink-0 mt-0.5" />
                        <span dir="ltr" className="text-right inline-block">{item.date}</span>
                      </div>
                      {item.notes && (
                        <div className="flex items-start text-gray-600 text-sm bg-gray-50 p-3 rounded-xl mt-4 border border-gray-100">
                          <Info className="w-4 h-4 ml-2 text-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center shadow-sm max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-dark font-medium text-lg leading-relaxed">
                <Info className="w-8 h-8 text-primary shrink-0" />
                <p>كما تقرر اقتراح موضوع <span className="text-primary font-bold">"التحكيم الهندسي"</span> ليكون عنوان المؤتمر الهندسي العربي الحادي والثلاثين لاتحاد المهندسين العرب المزمع عقده عام 2028.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seminars Section */}
        <section id="seminars" className="py-16 bg-gray-50 relative z-10 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-accent/10 text-accent rounded-xl mb-4">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">الندوات</h2>
              <div className="h-1 w-20 bg-accent mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seminars.map(item => (
                <div key={item.id} className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 ${seminars.length % 2 !== 0 && item.id === seminars.length ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute -left-12 -top-12 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-dark mb-6 relative z-10 leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-4 mt-auto relative z-10">
                      <div className="flex items-center text-gray-800 bg-gray-50 p-3 rounded-xl border border-gray-100 shadow-sm">
                        <Users className="w-5 h-5 ml-3 text-accent shrink-0" />
                        <span className="font-semibold">{item.location}</span>
                      </div>
                      <div className="flex items-center text-gray-500 px-3 py-1">
                        <Calendar className="w-5 h-5 ml-3 text-gray-400 shrink-0" />
                        <span dir="ltr" className="text-right inline-block font-medium">{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PDF Section */}
        <section className="py-16 bg-white relative z-10 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-dark mb-4">التقرير العام</h2>
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

        {/* Photo Gallery Section */}
        <section id="gallery" className="py-16 bg-gray-50 relative z-10 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-secondary/10 text-secondary rounded-xl mb-4">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">معرض الصور</h2>
              <div className="h-1 w-20 bg-secondary mx-auto rounded"></div>
              <p className="text-gray-600 mt-4 text-lg">مقتطفات من فعاليات ونشاطات الهيئة السابقة</p>
            </div>

            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`فعالية ${index + 1}`} 
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">تكبير الصورة</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
              alt="Enlarged view"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ActivitiesPage;
