import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Calendar, BookOpen, Users, GraduationCap, Award, FileSignature, Landmark, Building, History } from 'lucide-react';

const QualifyingProgramsSection = ({ hideTitle = true }) => {
  const dummyTextIntro = "المستهدفون بهذا البرنامج هم جميع أطراف العقد مثل المالك، المهندس، المقاول، العاملين في إدارة العقود، والمسؤولون عن حل المنازعات في العقود. ويتم في هذا البرنامج تدريب المشاركين على ما يلي :";
  
  const dummyList = [
    "استعمال وصياغة العقود النمطية",
    "فهم التزامات اطراف العقد",
    "تعلم كيفية تحليل وإدارة المطالبات والاوامر التغييرية",
    "التعرف على الوسائل البديلة لفض النزاع",
    "مجلس فض النزاع - تشكيله واجراءاته وصولا لاصدار قرار المجلس وطريقة انفاذه.",
    "تعلم أحكام وقواعد التحكيم",
    "الالمام بأنواع التحكيم وإجراءاته وصولاً لإصدار القرار التحكيمي.",
    "التعرف على دور القضاء في اجراءات وقضايا التحكيم",
    "تأثير السجلات المعاصرة والتقادم في التحكيم"
  ];

  const cards = [
    {
      title: "دورة التحكيم الهندسي",
      desc: "برنامج تأهيل وإعداد المحكمين، موجه لجميع أطراف العقد الهندسي وتدريبهم على التحكيم وإدارة العقود.",
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      anchor: "#curriculum"
    },
    {
      title: "تأهيل اعضاء مجلس فض النزاع",
      desc: "برنامج متخصص لإعداد وتأهيل المهندسين والقانونيين للعمل كأعضاء في مجالس فض النزاعات وتطوير مهاراتهم.",
      icon: <Users className="w-8 h-8 text-secondary" />,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      anchor: "/training-courses"
    },
    {
      title: "دورات سابقة",
      desc: "اطلع على أرشيف الدورات التدريبية السابقة التي نظمتها الهيئة وتفاصيلها.",
      icon: <History className="w-8 h-8 text-secondary" />,
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
      anchor: "#schedule"
    }
  ];

  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[45vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary/80 to-dark/90"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-5 py-1.5 rounded-full bg-white/10 text-secondary border border-secondary/30 backdrop-blur-md text-sm font-bold tracking-wider"
          >
            عن الهيئة
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl"
          >
            البرامج التأهيلية
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-1.5 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(202,138,4,0.5)]"
          ></motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 -mt-24 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-8 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-4">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                  {card.anchor.startsWith('/') ? (
                    <a 
                      href={card.anchor}
                      className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-2 rounded-lg font-bold transition-colors duration-300"
                    >
                      معرفة المزيد
                    </a>
                  ) : (
                    <a 
                      href={card.anchor}
                      onClick={(e) => scrollTo(e, card.anchor)}
                      className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-2 rounded-lg font-bold transition-colors duration-300"
                    >
                      معرفة المزيد
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {!hideTitle && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">دورة التحكيم الهندسي</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </motion.div>
        )}

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Training" className="rounded-3xl shadow-2xl w-full" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-right"
            >
              <h3 className="text-3xl font-bold text-primary mb-6">برنامج تأهيل وإعداد <span className="text-secondary">المحكمين</span></h3>
              <p className="text-gray-500 leading-relaxed mb-8">{dummyTextIntro}</p>
              
              <ul className="space-y-4 mb-8" dir="rtl">
                {dummyList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100 text-right">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <a 
                  href="/منهج تأهيل واعداد المحكم الهندسي 01-preview.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg font-bold hover:bg-secondary/90 transition-colors shadow-lg"
                >
                  <span>عرض منهج التأهيل والإعداد</span>
                  <BookOpen className="w-5 h-5" />
                </a>
                <a 
                  href="/دليل دورة التحكيم الهندسي 01.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <span>عرض دليل دورة التحكيم</span>
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">دورات سابقة</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-lg">سيتم إضافة أرشيف الدورات السابقة قريباً...</p>
          </motion.div>
        </div>
      </section>

      {/* Training Course PDF Viewer */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-4">الحقيبة التدريبية</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" style={{ height: '80vh' }}>
            <iframe 
              src="/الحقيبة التدريبية للدورة اونلاين.pdf#toolbar=0" 
              className="w-full h-full border-none pointer-events-auto"
              title="الحقيبة التدريبية للدورة اونلاين"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default QualifyingProgramsSection;
