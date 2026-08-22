import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const SecretaryMessageSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
             <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            كلمة الأمين العام لاتحاد المهندسين العرب
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 relative"
        >
          {/* Large Quote Icon overlay */}
          <Quote className="absolute top-8 left-8 w-24 h-24 text-gray-100 -scale-x-100" />
          
          <div className="relative z-10">
            {/* Top Author Header */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-6 border-b border-gray-200 pb-8 mb-8">
              <img 
                src="/عادل الحديثي.jpeg" 
                alt="الدكتور المهندس عادل الحديثي" 
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-2xl shrink-0" 
              />
              <div className="text-center sm:text-right">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  الدكتور المهندس عادل الحديثي
                </h3>
                <p className="text-secondary font-bold text-lg md:text-xl">
                  الأمين العام لاتحاد المهندسين العرب
                </p>
              </div>
            </div>

            <p className="text-gray-800 leading-relaxed mb-6 font-bold text-lg">
              بسم الله الرحمن الرحيم، والصلاة والسلام على سيدنا محمد وعلى آله وصحبه أجمعين.
            </p>
            <p className="text-gray-800 leading-relaxed mb-6 font-bold text-lg">
              أبنائي وإخواني المهندسين، زوار موقع الهيئة العربية للتحكيم الهندسي الكرام،
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              يسعدني ويسرني، باسمي وباسم الأمانة العامة لاتحاد المهندسين العرب، أن أرحب بكم أجمل ترحيب في الموقع الإلكتروني الجديد للهيئة العربية للتحكيم الهندسي، هذه المنصة الرقمية التي نطلقها لتكون جسراً للتواصل ومعبراً لنشر الثقافة القانونية والهندسية المتخصصة في وطننا العربي.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              لقد تأسست الهيئة العربية للتحكيم الهندسي تحت مظلة اتحاد المهندسين العرب لتكون مرجعاً عربياً مهنياً ومستقلاً، يهدف إلى تسوية النزاعات الهندسية والإنشائية بأساليب متطورة تعتمد على الحيدة، والنزاهة، والسرعة، ودقة التخصص. ونحن ندرك جميعاً أن النهضة العمرانية والهندسية المتسارعة التي تشهدها دولنا العربية تتطلب بالتوازي بيئة تحكيمية متخصصة تضمن الحقوق، وتصون الاستثمارات، وتوفر مناخاً آخذاً في التطور والازدهار.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              إننا نسعى من خلال هذا الموقع الإلكتروني إلى تقديم منصة متكاملة تتيح للمهندسين، والقانونيين، والشركات، وأصحاب المشاريع الوصول السهل إلى:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-6 space-y-3 pr-4 text-lg">
              <li>قواعد ولوائح التحكيم الهندسي المعمول بها والمطورة وفق أفضل الممارسات الدولية.</li>
              <li>قوائم المحكمين والخبراء المعتمدين من ذوي الكفاءة والخبرة العالية في مختلف التخصصات.</li>
              <li>البرامج التدريبية والدورات التخصصية لتأهيل كوادر عربية واعدة في مجال التحكيم الهندسي والدولي.</li>
              <li>الأخبار والفعاليات والأبحاث المتخصصة في عقود الإنشاءات (مثل عقود الفيديك) وآليات فض المنازعات.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              نحن في اتحاد المهندسين العرب نؤمن بأن التحكيم الهندسي ليس مجرد وسيلة لفض النزاعات، بل هو فن وعلم يتطلب مواكبة مستمرة للتطورات التكنولوجية والمعايير العالمية. ولذا، فإن هذا الموقع يشكل خطوة أساسية نحو التحول الرقمي والتسهيل على كل من يلجأ للهيئة للتحكيم أو الاستشارة أو التدريب.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              ختاماً، أتوجه بالشكر الجزيل لكافة الإخوة القائمين على الهيئة العربية للتحكيم الهندسي ولأعضاء مجلس إدارتها ولجانها الفنية على جهودهم المخلصة. وأدعوكم جميعاً للاستفادة من الخدمات والأنشطة التي يقدمها الموقع، متمنياً للجميع دوام التوفيق والنجاح.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 font-bold text-lg">
              والسلام عليكم ورحمة الله وبركاته.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecretaryMessageSection;
