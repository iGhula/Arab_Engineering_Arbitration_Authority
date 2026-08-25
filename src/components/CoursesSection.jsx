import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Clock, ArrowLeft } from 'lucide-react';

// Google Form URLs for course & exam registration:
const GOOGLE_FORM_COURSE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfHFxDj7jTbMXrAnb6Py_MKnh-eN2zkufHvXX7rXtwBSeKSuQ/viewform?usp=dialog";
const GOOGLE_FORM_EXAM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfjc8uM57Fu35iXOPOr_2-0Ip1qYeeOhrFlzY2MGmDl2nhonA/viewform?usp=publish-editor";

const scheduleData = [
  {
    id: 1,
    month: "شهر أكتوبر 2026",
    city: "القاهرة",
    country: "جمهورية مصر العربية"
  },
  {
    id: 2,
    month: "شهر أكتوبر 2026",
    city: "بغداد",
    country: "جمهورية العراق"
  },
  {
    id: 3,
    month: "شهر نوفمبر 2026",
    city: "بنغازي",
    country: "دولة ليبيا"
  },
  {
    id: 4,
    month: "شهر ديسمبر 2026",
    city: "مسقط",
    country: "سلطنة عمان"
  }
];

const CoursesSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl space-y-16">

        {/* Course Schedule Section (First thing on page) */}
        <section className="relative">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-3 border border-secondary/20">
              <Sparkles className="w-4 h-4" />
              <span>الجدول الزمني للدورات</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              مواعيد الدورات القادمة
            </h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full shadow-sm"></div>
            <p className="text-gray-500 mt-4 text-base max-w-2xl mx-auto">
              جدول أحدث البرامج والدورات التدريبية المعتمدة للهيئة العربية للتحكيم الهندسي لعام 2026
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {scheduleData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative Accent Orb */}
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-500"></div>

                <div>
                  {/* Top Bar: Month Tag & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white px-4 py-2 rounded-2xl font-bold text-sm transition-colors duration-300">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span>{item.month}</span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-secondary/10 text-secondary border border-secondary/30 rounded-full">
                      تأهيل معتمد
                    </span>
                  </div>

                  {/* Location Info */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 mb-1">
                        {item.city}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium">
                        {item.country}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA / Registration Buttons */}
                <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 mt-4">
                  <a
                    href={GOOGLE_FORM_COURSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 px-4 bg-primary text-white hover:bg-secondary rounded-xl font-bold text-xs transition-colors duration-300 shadow-sm"
                  >
                    تسجيل الدورة
                  </a>
                  <a
                    href={GOOGLE_FORM_EXAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 px-4 bg-gray-100 text-primary hover:bg-primary hover:text-white rounded-xl font-bold text-xs transition-colors duration-300"
                  >
                    تسجيل الامتحان
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Training Course PDF Viewer Section (Below dates) */}
        <section className="py-8 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">الحقيبة التدريبية</h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4 text-base max-w-2xl mx-auto">
              تصفح واستعراض الحقيبة التدريبية الخاصة بدورات وبرامج الهيئة العربية للتحكيم الهندسي.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-inner border border-gray-200 overflow-hidden" style={{ height: '80vh' }}>
            <iframe
              src="/الحقيبة التدريبية للدورة اونلاين.pdf#toolbar=0"
              className="w-full h-full border-none pointer-events-auto"
              title="الحقيبة التدريبية للدورة اونلاين"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CoursesSection;
