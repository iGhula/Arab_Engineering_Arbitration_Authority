import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { FileText, Book } from 'lucide-react';
import { motion } from 'framer-motion';

const PublicationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const publications = [
    {
      title: "اجراءات وقواعد التحكيم الهندسي",
      type: "PDF",
      url: "/اجراءات وقواعد التحكيم الهندسي.pdf",
      desc: "الإطار الإجرائي الملزم لجميع التحكيمات التي تجرى تحت مظلة الهيئة."
    },
    {
      title: "الدليل العملي للمحكم الهندسي",
      type: "PDF",
      url: "/الدليل العملي للمحكم الهندسي.pdf",
      desc: "المرجع الإجرائي المتكامل الذي يغطي كافة جوانب التحكيم الهندسي."
    },
    {
      title: "مدونة السلوك المهني للهيئة",
      type: "PDF",
      url: "/مدونة_السلوك_المهني_للهيئة.pdf",
      desc: "مبادئ السلوك وأخلاقيات المهنة التي تلتزم بها الهيئة."
    },
    {
      title: "دليل دورة التحكيم الهندسي 2026",
      type: "PDF",
      url: "/دليل دورة التحكيم الهندسي 2026.pdf",
      desc: "دليل شامل حول دورة التحكيم الهندسي وتفاصيلها لعام 2026."
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />

      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="ما نقدمه" title="إصدارات الهيئة" />

        <section className="py-24 relative overflow-hidden min-h-[70vh]">
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-secondary/30 transition-all duration-300 group flex flex-col"
                >
                  {/* Card Header / Image Area */}
                  <div className="h-64 relative flex items-center justify-center overflow-hidden group-hover:shadow-inner transition-all duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600"
                      alt={pub.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80"></div>

                    {/* Overlay Icon */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 text-right flex flex-col flex-grow">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-4 self-end">
                      <FileText className="w-3 h-3" />
                      {pub.type}
                    </div>

                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 leading-tight">
                      {pub.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {pub.desc}
                    </p>

                    {/* Action Button */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <a
                        href={`${pub.url}#toolbar=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-gray-50 hover:bg-primary hover:text-white text-primary font-bold rounded-xl transition-all duration-300 group/btn"
                      >
                        <span>عرض الملف</span>
                        <Book className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
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

export default PublicationsPage;
