import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Award, FileText } from 'lucide-react';
import rawArbitrators from '../data/parsed_arbitrators.json';

// The new parsed JSON is already in the correct format, so we can just use it directly
// filter out any empty ones just in case
const arbitratorsList = rawArbitrators.filter(a => a.name);

const executiveMembers = [
  { id: 'exec-17', name: "أ.م. إمحمد غولة", country: "ليبيا", category: "الرئاسية" },
  { id: 'exec-1', name: "م. جودت يغمور", country: "الأردن", category: "الرئاسية" },
  { id: 'exec-2', name: "م. فؤاد الكندي", country: "عُمان", category: "الرئاسية" },
  { id: 'exec-3', name: "م. فيصل الشريف", country: "السعودية", category: "الرئاسية" },
  { id: 'exec-4', name: "م. ناصر المطيري", country: "الكويت", category: "الرئاسية" },
  { id: 'exec-5', name: "م. شادي بن خليفة", country: "تونس", category: "الرئاسية" },
  { id: 'exec-6', name: "م. طارق العتماوي", country: "فلسطين", category: "الرئاسية" },
  { id: 'exec-7', name: "م. عمر سلام", country: "العراق", category: "الرئاسية" },
  { id: 'exec-8', name: "م. معتز طلبه", country: "مصر", category: "الرئاسية" },
  { id: 'exec-9', name: "م. توفيق سنان", country: "لبنان", category: "الرئاسية" },
  { id: 'exec-10', name: "م. داود خلف", country: "الأردن", category: "الرئاسية" },
  { id: 'exec-11', name: "م. محمد سعيد فتحة", country: "لبنان", category: "الرئاسية" },
  { id: 'exec-12', name: "م. عبد الكريم سعدون", country: "السعودية", category: "الرئاسية" },
  { id: 'exec-13', name: "د. إبراهيم الضبيب", country: "السعودية", category: "الرئاسية" },
  { id: 'exec-14', name: "م. محمد أبو زكي", country: "عُمان", category: "الرئاسية" },
  { id: 'exec-15', name: "د. شريف الهجان", country: "مصر", category: "الرئاسية" },
  { id: 'exec-16', name: "م. محمد عبد الغني", country: "مصر", category: "الرئاسية" },
  { id: 'exec-20', name: "م. محمد ماجد خلوصي", country: "مصر", category: "الرئاسية" },
  { id: 'exec-18', name: "م. منذر الساكت", country: "الأردن", category: "الرئاسية" },
  { id: 'exec-19', name: "م. نبيل عباس", country: "السعودية", category: "الرئاسية" },
];

const cleanNameForSort = (name) => {
  if (!name) return '';
  // Remove common titles to sort by actual name
  return name.replace(/^(م\.|د\.|أ\.|م\s|د\s|أ\s|أ\.م\.|أ\.د\.)\s*/, '').trim();
};

// Ensure zero duplicates across all lists
const uniqueArbitratorsMap = new Map();
[...executiveMembers, ...arbitratorsList].forEach(item => {
  const key = `${item.name.trim()}-${item.category}`;
  if (!uniqueArbitratorsMap.has(key)) {
    uniqueArbitratorsMap.set(key, item);
  }
});

const allArbitratorsList = Array.from(uniqueArbitratorsMap.values()).sort((a, b) =>
  cleanNameForSort(a.name).localeCompare(cleanNameForSort(b.name), 'ar')
);

const normalizeCategory = (cat) => {
  if (!cat) return '';
  return cat.replace(/قوائم\s*(?:للمحكمين|المحكمين)\s*/g, '').replace(/القائمة\s*/g, '').replace(/[()]/g, '').trim();
};

const allCategories = ["القائمة الرئاسية", "قوائم المحكمين فئة (أ)", "قوائم المحكمين فئة (ب)"];

const categoryDetails = {
  "الرئاسية": {
    title: "الفئة الرئاسية (Chartered / Presidential Arbitrator)",
    criteriaTitle: "معايير الانتساب للفئة الرئاسية:",
    criteria: [
      "خبرة عملية لا تقل عن 15 عاماً في التحكيم الهندسي، منها 5 سنوات كمحكّم منفرد أو رئيس هيئة",
      "اجتياز فئة أ سابقاً",
      "مقابلة شخصية أمام لجنة تصنيف المحكمين",
      "سجل حالات موثّق (لا يقل عن 10 قضايا تحكيم كمحكّم أو خبير فني)",
      "ترشيح من عضوين من الفئة الرئاسية أو من المجلس التنفيذي"
    ],
    privilegesTitle: "المزايا والصلاحيات:",
    privileges: [
      "أهلية الترؤس المنفرد لهيئات التحكيم الكبرى والمعقدة (قيمة نزاع مرتفعة، عقود دولية)",
      "عضوية تلقائية في قوائم الترشيح لدى مراكز التحكيم الشريكة",
      "حق التدريس والتقييم في برامج التأهيل",
      "تمثيل الهيئة في المؤتمرات والفعاليات الدولية",
      "أولوية في التعيين من قِبل الهيئة عند عدم اتفاق الأطراف على محكّم"
    ]
  },
  "فئة أ": {
    title: "فئة أ (Category A)",
    criteriaTitle: "معايير القبول:",
    criteria: [
      "اجتياز الامتحان التحريري بنسبة 80% فأكثر",
      "إتمام برنامج التأهيل الكامل (المكثّف 5 أيام أو الممتد 3 أشهر)"
    ],
    privilegesTitle: "المزايا والصلاحيات المقترحة:",
    privileges: [
      "أهلية العمل كمحكّم منفرد في النزاعات متوسطة القيمة والتعقيد الفني",
      "أهلية العضوية في هيئات تحكيم من 3 أعضاء (كمحكّم عضو أو محكّماً مُعيّناً من طرف)",
      "إدراج في قائمة الهيئة الرسمية المعتمدة لدى مراكز التحكيم الشريكة",
      "أهلية التقدم لاحقاً للفئة الرئاسية بعد استيفاء شرط الخبرة العملية",
      "حق حضور مجاني لورش التطوير المهني المستمر (CPD) بأولوية",
      "حق الحضور المجاني لمؤتمرات الهيئة"
    ]
  },
  "فئة ب": {
    title: "فئة ب (Category B)",
    subtitle: "عضوية تأسيسية/دخول للمهنة، تمنح الاعتراف والانضمام للمجتمع المهني لكن دون صلاحيات الترؤس المستقل",
    criteriaTitle: null,
    criteria: [],
    privilegesTitle: "المزايا والصلاحيات المقترحة:",
    privileges: [
      "عضو في هيئات التحكيم متعددة الأعضاء فقط (لا يجوز الترؤس المنفرد)",
      "الاقتصار على النزاعات ذات القيمة أو التعقيد الفني المحدود",
      "إلزامية العمل تحت إشراف/مرافقة (mentorship) من محكّم فئة أ أو رئاسية لفترة انتقالية",
      "أهلية الترقّي لفئة أ بعد اجتياز الامتحان التحريري (80%) دون الحاجة لإعادة كامل البرنامج التدريبي",
      "عضوية في قاعدة بيانات الهيئة، لكن دون إدراج تلقائي في قوائم الترشيح الخارجية"
    ]
  }
};

const ArbitratorsSection = () => {
  const [activeCategory, setActiveCategory] = useState("القائمة الرئاسية");
  const [activeCountry, setActiveCountry] = useState("الكل");

  useEffect(() => {
    setActiveCountry("الكل");
  }, [activeCategory]);

  const normCategory = normalizeCategory(activeCategory);
  const activeDetails = categoryDetails[normCategory];

  const filteredByCategory = allArbitratorsList.filter(
    a => normalizeCategory(a.category) === normCategory
  );

  const uniqueCountries = [...new Set(filteredByCategory.map(a => a.country).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ar'));
  const countries = ["الكل", ...uniqueCountries];

  const filteredArbitrators = activeCountry === 'الكل'
    ? filteredByCategory
    : filteredByCategory.filter(a => a.country === activeCountry);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[45vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" alt="Arbitrators Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary/80 to-dark/90"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl"
          >
            قوائم المحكمين
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-1.5 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(202,138,4,0.5)]"
          ></motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 -mt-24 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Primary Filters (Categories) */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-5xl mx-auto">
            {allCategories.map((category, index) => {
              const isSelected = normalizeCategory(activeCategory) === normalizeCategory(category);
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 text-lg ${isSelected
                    ? 'bg-secondary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          {/* Category Details Card (Criteria & Privileges) */}
          <AnimatePresence mode="wait">
            {activeDetails && (
              <motion.div
                key={normCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-200/80 p-8 md:p-10 mb-12 max-w-5xl mx-auto text-right"
              >
                <div className="border-b border-gray-100 pb-5 mb-8">
                  <h2 className="text-2xl md:text-3xl font-black text-primary mb-2">
                    {activeDetails.title}
                  </h2>
                  {activeDetails.subtitle && (
                    <p className="text-gray-600 text-base leading-relaxed font-medium">
                      {activeDetails.subtitle}
                    </p>
                  )}
                </div>

                <div className={`grid grid-cols-1 ${activeDetails.criteria?.length > 0 ? 'lg:grid-cols-2' : ''} gap-8`}>
                  {/* Criteria Column */}
                  {activeDetails.criteria?.length > 0 && (
                    <div className="bg-gray-50/90 rounded-2xl p-6 md:p-7 border border-gray-200/70">
                      <div className="flex items-center gap-2.5 mb-5 text-primary font-bold text-lg border-b border-gray-200/60 pb-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                        <h3>{activeDetails.criteriaTitle}</h3>
                      </div>
                      <ul className="space-y-3 text-sm md:text-base text-gray-700">
                        {activeDetails.criteria.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Privileges Column */}
                  <div className="bg-primary/[0.03] rounded-2xl p-6 md:p-7 border border-primary/15">
                    <div className="flex items-center gap-2.5 mb-5 text-primary font-bold text-lg border-b border-primary/10 pb-3">
                      <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                      <h3>{activeDetails.privilegesTitle}</h3>
                    </div>
                    <ul className="space-y-3 text-sm md:text-base text-gray-700">
                      {activeDetails.privileges.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Secondary Filters (Countries) */}
          <AnimatePresence>
            {normalizeCategory(activeCategory) !== 'الرئاسية' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto"
              >
                {countries.map((country, index) => (
                  <button
                    key={`country-${index}`}
                    onClick={() => setActiveCountry(country)}
                    className={`px-5 py-2 rounded-lg font-bold transition-all duration-300 ${activeCountry === country
                      ? 'bg-primary text-white shadow-md scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 text-sm'
                      }`}
                  >
                    {country}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Arbitrators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredArbitrators.map((arbitrator) => (
                <motion.div
                  layout
                  key={arbitrator.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col text-right hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                    {arbitrator.name}
                  </h3>
                  <div className="flex flex-col gap-2 mt-auto">
                    {arbitrator.country && (
                      <div className="flex items-center justify-start gap-2 text-gray-600 font-medium">
                        <span>{arbitrator.country}</span>
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      </div>
                    )}
                    {arbitrator.specialty && (
                      <div className="flex items-center justify-start gap-2 text-gray-500 text-sm">
                        <span>{arbitrator.specialty}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredArbitrators.length === 0 && (
              <div className="col-span-full text-center py-24 text-gray-500 text-lg">
                لا يوجد محكمين في هذا التصنيف حالياً.
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ArbitratorsSection;
