import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Building, CheckCircle2, Users, ChevronLeft, MapPin } from 'lucide-react';

const historyPoints = [
  "الهيئة العربية للتحكيم الهندسي هيئة مهنية تأسست ضمن مظلة اتحاد المهندسين العرب، بقرار من المجلس الأعلى للاتحاد بتاريخ 19/12/2010 في اجتماعه المنعقد بتونس. وشُكّلت بعد التأسيس لجنة تأسيسية من ممثلي عدد من الدول العربية بإشراف الأمين العام للاتحاد الأستاذ الدكتور المهندس عادل الحديثي ، أنجزت مشروع \"النظام الأساسي للهيئة\".",
  "عُقد أول اجتماع للجمعية العامة للهيئة بمقر الأمانة العامة لاتحاد المهندسين العرب في القاهرة بتاريخ 10/7/2012، حيث انتُخبت أول لجنة تنفيذية لها، مكوّنة من: الأستاذ المهندس محمد ماجد عباس خلوصي (مصر) رئيساً، والأستاذ الدكتور منذر موسى الساكت (الأردن) نائباً للرئيس، والمهندس محمد علي قاسم أبو شملا (فلسطين)، والدكتور إبراهيم عبدالله الحماد (السعودية)، والمهندس أمين صبري (السودان) أعضاءً . وبناءً على رغبة ممثلي الهيئات الهندسية السورية والعراقية والليبية، وافقت الجمعية العامة على ترشّح كل من: المهندس حسن ماجد (سوريا)، والمهندس صلاح الدين عباس خطاب (العراق)، والمهندس عبدالسلام عمار (ليبيا) لعضوية اللجنة التنفيذية لتلك الدورة فقط، إلى حين تطبيق النظام الأساسي بشكل كامل في الانتخابات اللاحقة. و في اجتماعها المؤرخ 27/9/2012 قررت اللجنة التنفيذية إضافة ممثلين مراقبين عن لبنان (م. محمد سعيد فتحة) والإمارات (م. خالد شهيل).",
  "يتم تجديد انتخاب اللجنة التنفيذية كل ثلاث سنوات. حيث يشارك الأمين العام لاتحاد المهندسين العرب الأستاذ الدكتور المهندس عادل الحديثي بصفة دائمة في اجتماعات اللجنة التنفيذية والجمعية العامة للهيئة، باعتبار الهيئة جزءاً من هيكل الاتحاد.",
  "مقر الهيئة الدائم: القاهرة ، ورئيسها غير مقيم يمارس مهامه من بلده.",
  "عضوية الهيئة تضم الهيئات الهندسية الأعضاء في اتحاد المهندسين العرب (عضوية عاملة)، بالإضافة إلى هيئات قطرية ومراكز ومؤسسات وأفراد (محكمين وموفقين وخبراء) كأعضاء مساهمين ومشاركين وفخريين."
];

const leadership = [
  {
    period: "2012 – 2014",
    president: "م. محمد ماجد خلوصي (مصر)",
    notes: "أول رئيس للهيئة منذ انتخابه في الجمعية العامة بتاريخ 2012/7/10؛ نائب الرئيس د. منذر موسى الساكت (الأردن)",
    image: "/محمد ماجد خلوصي.jpeg"
  },
  {
    period: "2015 – 2020",
    president: "م. داود خلف (الأردن)",
    notes: "انتُخب في اجتماع الجمعية العامة بتاريخ 2014/12/20، وأعيد انتخابه بتاريخ 2017/12/9؛ نائب الرئيس طوال الفترة م. محمد سعيد فتحة (لبنان)",
    image: "/داوود خلف.jpeg"
  },
  {
    period: "2021 – 2023",
    president: "م. جودت جوده يغمور (الأردن)",
    notes: "انتُخب في اجتماع الجمعية العمومية بتاريخ 2020/12/1، ونائب الرئيس م. محمد سعيد فتحة (لبنان)",
    image: "/جودت يغمور.jpeg"
  },
  {
    period: "2024 – حتى تاريخه",
    president: "أ.م. امحمد عبدالرحمن غولة (ليبيا)",
    notes: "رئيس اللجنة التنفيذية الحالي؛ ونائباه م. جودت يغمور (الأردن) وم. فؤاد الكندي (عُمان)",
    image: "/members/m_ghoula.png"
  }
];

const HistorySection = () => {
  return (
    <section className="py-24 relative bg-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            نبذة عن <span className="text-secondary">تاريخ الهيئة</span>
          </motion.h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded"></div>
        </div>

        {/* History Points */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 mb-20 relative">
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
          <div className="space-y-6">
            {historyPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 shrink-0 bg-gray-50 p-2 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors text-secondary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-gray-700 leading-loose text-lg font-medium text-justify">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-dark mb-4"
            >
              ثانياً: قيادة الهيئة عبر السنوات
            </motion.h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-primary to-secondary opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 font-bold block mb-1">الفترة</span>
                    <h3 className="text-xl font-bold text-dark" dir="ltr">{item.period}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.president} 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary/20 shadow-md shrink-0" 
                    />
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Users className="w-8 h-8" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-bold text-gray-500">رئيس الهيئة / اللجنة التنفيذية</span>
                    </div>
                    <p className="text-lg md:text-xl font-bold text-primary">{item.president}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-bold text-dark block mb-2">ملاحظات:</span>
                    {item.notes}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HistorySection;
