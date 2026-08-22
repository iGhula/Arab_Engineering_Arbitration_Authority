import React from 'react';
import { motion } from 'framer-motion';

const CoursesSection = () => {
  return (
    <div className="bg-gray-50">
      {/* Content Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">لا توجد دورات تدريبية حالياً</h3>
            <p className="text-gray-500">سيتم الإعلان عن الدورات التدريبية القادمة قريباً. يرجى متابعتنا لمعرفة أحدث البرامج والتحديثات.</p>
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
    </div>
  );
};

export default CoursesSection;
