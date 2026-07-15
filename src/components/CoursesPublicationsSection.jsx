import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const CoursesPublicationsSection = () => {
  return (
    <section className="bg-gray-50 relative">
      
      {/* Latest Courses Section */}
      <div className="py-32 text-center relative border-b border-gray-200">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              أحدث <span className="text-secondary">الدورات</span> التدريبية
            </h2>
          </motion.div>

          {/* Placeholder for courses carousel/grid which is empty in screenshot */}
          <div className="min-h-[200px] flex items-center justify-center">
             <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center absolute left-10 opacity-50">
               <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Latest Publications Section */}
      <div className="py-32 text-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0b4b7a 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              أحدث <span className="text-secondary">إصدارات</span> الهيئة
            </h2>
          </motion.div>

          {/* Placeholder for publications which is empty in screenshot */}
          <div className="min-h-[200px]"></div>
        </div>

        {/* Scroll to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 hover:-translate-y-1 transition-all z-20"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>

    </section>
  );
};

export default CoursesPublicationsSection;
