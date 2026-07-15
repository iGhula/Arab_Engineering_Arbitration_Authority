import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Building } from 'lucide-react';

const HistorySection = () => {
  const periods = [
    {
      year: "الفترة 2010 إلي 2013",
      desc: "استضافت نقابة المهندسين المصرية مقر رئاسة الهيئة عند تأسيسها وكانت برئاسة الزميل (محمد ماجد خلوصي) نقيب المهندسين الاسبق.",
      icon: <Building className="w-6 h-6 text-secondary" />,
      delay: 0.2
    },
    {
      year: "الفترة 2014 إلي 2019",
      desc: "نقابة المهندسين الاردنيين مقر رئاسة الهيئة لثلاث دورات وكانت برئاسة الزميل (داود خلف) وزير الري الاردني الاسبق. ثم ترأس اللجنة التنفيذية للهيئة الزميل (جودت يغمور) للفترة من (2020-2023).",
      icon: <Award className="w-6 h-6 text-secondary" />,
      delay: 0.4
    },
    {
      year: "الفترة 2024 إلي الآن",
      desc: "استضافت نقابة المهن الهندسية الليبية مقر رئاسة الهيئة برئاسة الزميل (أمحد غولة).",
      icon: <Calendar className="w-6 h-6 text-secondary" />,
      delay: 0.6
    }
  ];

  return (
    <section className="py-32 relative bg-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            نبذة عن <span className="text-secondary">تاريخ الهيئة</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-lg"
          >
            احدى الهيئات التخصصية في اتحاد المهندسين العرب والتي تأسست بناءا على قرار المجلس الاعلى للاتحاد سنة (2010) وتولى رئاسة اللجنة التنفيذية للهيئة عدد من الزملاء، واستضافة مقر الهيئة من قبل الهيئات الهندسية المبينة ادناه
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent -translate-y-1/2 z-0"></div>

          {periods.map((period, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: period.delay, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(11,75,122,0.1)] transition-shadow duration-500 border border-gray-100 group h-full flex flex-col items-center text-center">
                
                {/* Floating Icon */}
                <div className="w-16 h-16 rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                  <div className="group-hover:brightness-200 transition-all duration-500">
                    {period.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                  {period.year}
                </h3>
                
                <p className="text-gray-500 text-sm leading-loose">
                  {period.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
