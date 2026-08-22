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

    </div>
  );
};

export default CoursesSection;
