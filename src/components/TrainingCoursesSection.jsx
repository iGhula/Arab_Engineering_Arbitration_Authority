import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Briefcase, Users, UserCheck, GraduationCap, Building2 } from 'lucide-react';

const TrainingCoursesSection = () => {
  const courses = [
    {
      title: "تأهيل اعضاء مجلس فض النزاع",
      desc: "برنامج متخصص لإعداد وتأهيل المهندسين والقانونيين للعمل كأعضاء في مجالس فض النزاعات (DAB/DAAB) وتطوير مهاراتهم في إصدار القرارات.",
      icon: <Users className="w-8 h-8 text-secondary" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-secondary/30 transition-all duration-300 group flex flex-col"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-right group-hover:text-secondary transition-colors leading-tight">
                {course.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed text-right text-justify flex-grow">
                {course.desc}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-start">
                <button className="text-secondary font-bold text-sm hover:text-primary transition-colors flex items-center gap-2 group/btn">
                  <span className="group-hover/btn:-translate-x-1 transition-transform">سجل الآن</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training Course PDF Viewer */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden" style={{ height: '80vh' }}>
          <iframe 
            src="/الحقيبة التدريبية للدورة اونلاين.pdf#toolbar=0" 
            className="w-full h-full border-none pointer-events-auto"
            title="الحقيبة التدريبية للدورة اونلاين"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TrainingCoursesSection;
