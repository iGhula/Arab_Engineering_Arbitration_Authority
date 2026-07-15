import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const VisionMissionSection = ({ hideTitle = true }) => {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {!hideTitle && (
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            من <span className="text-secondary">نحن</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-secondary/30 transition-all duration-300 group"
          >
            <div className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 shadow-sm">
              <Eye className="w-10 h-10 text-secondary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-6">رؤيتنا</h3>
            <p className="text-gray-500 leading-loose text-lg">
              المساهمة في تنظيم عملية تسوية النزاعات في العقود الهندسية والإنشائية عن طريق التحكيم أو أي من الوسائل الاخرى لتسوية النزاعات.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-1 bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-secondary/30 transition-all duration-300 group"
          >
            <div className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 shadow-sm">
              <Target className="w-10 h-10 text-secondary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-6">رسالتنا</h3>
            <p className="text-gray-500 leading-loose text-lg">
              المساهمة في تنظيم عملية تسوية النزاعات في العقود الهندسية والإنشائية عن طريق التحكيم أو أي من الوسائل الاخرى لتسوية النزاعات.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
