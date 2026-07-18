import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const ArbitrationSection = () => {
  const benefits = [
    "الفصل العادل والسريع في المنازعات الهندسية والمقاولات",
    "نشر ثقافة التحكيم وتأهيل المحكمين والخبراء الهندسيين",
    "التعاون مع مراكز التحكيم العربية والدولية لتبادل الخبرات",
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content (Right Side RTL) */}
          <div className="lg:w-1/2 text-right z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
                ماذا تعرف عن<br />
                <span className="text-secondary">التحكيم الهندسي</span>
              </h2>
              
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                احدى الهيئات التخصصية في اتحاد المهندسين العرب والتي تأسست بناءا على قرار المجلس الاعلى للاتحاد سنة (2010) وتولى رئاسة اللجنة التنفيذية للهيئة عدد من الزملاء، واستضافة مقر الهيئة من قبل الهيئات الهندسية المبينة ادناه
              </p>
              
              <ul className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-start gap-4 justify-end group"
                  >
                    <span className="text-gray-700 font-medium group-hover:text-primary transition-colors mt-0.5">{benefit}</span>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300 text-primary shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-3 shadow-lg shadow-primary/30"
              >
                تعرف علينا
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Image Grid (Left Side RTL) */}
          <div className="lg:w-1/2 relative w-full h-[500px] md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute inset-0 grid grid-cols-2 gap-4"
            >
              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>

              <div className="space-y-4 pt-16">
                <div className="h-48 md:h-64 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                  <img src="/img1.png" alt="Meeting Room" className="w-full h-full object-cover" />
                </div>
                <div className="h-40 md:h-48 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                  <img src="/img2.png" alt="Architectural Blueprints" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-40 md:h-48 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                  <img src="/img3.png" alt="Modern Office" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 md:h-64 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                  <img src="/img4.png" alt="Legal Documents" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArbitrationSection;
