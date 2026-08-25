import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden min-h-[70vh]">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            <span className="text-secondary">تواصل</span> معنا
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
            نسعد بتواصلكم معنا والإجابة على استفساراتكم. فريقنا جاهز دائماً لتقديم الدعم والمساعدة في كل ما يتعلق بخدمات التحكيم الهندسي.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          
          {/* Address Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">العنوان</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                شارع رمسيس – القاهرة – جمهورية مصر العربية
                <br />
                ص. ب: (9) الفجالة
              </p>
            </div>
          </motion.div>

          {/* Phone Numbers Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">أرقام التواصل والفاكس</h3>
              <ul className="space-y-3 text-gray-600 text-sm font-medium">
                <li className="flex items-center justify-end gap-2" dir="ltr">
                  <span>+966 50 555 5840</span>
                </li>
                <li className="flex items-center justify-end gap-2" dir="ltr">
                  <span className="text-gray-500 text-xs font-normal">Tel:</span>
                  <span>+202 27735 610</span>
                </li>
                <li className="flex items-center justify-end gap-2" dir="ltr">
                  <span className="text-gray-500 text-xs font-normal">Fax:</span>
                  <span>+202 25749404 30</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">البريد الإلكتروني</h3>
              <ul className="space-y-3 text-gray-600 text-sm font-medium" dir="ltr">
                <li>
                  <a href="mailto:info@aeab.sa.com" className="hover:text-secondary transition-colors block">info@aeab.sa.com</a>
                </li>
                <li>
                  <a href="mailto:arabengs@arabfedeng.org" className="hover:text-secondary transition-colors block">arabengs@arabfedeng.org</a>
                </li>
                <li>
                  <a href="mailto:arabengs@hotmail.com" className="hover:text-secondary transition-colors block">arabengs@hotmail.com</a>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
