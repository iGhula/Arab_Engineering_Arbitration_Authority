import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User, Mail, Phone } from 'lucide-react';

const CommitteeSection = ({ hideTitle = true }) => {
  const members = [
    { name: "م. جودت يغمور - الأردن", role: "نائب اللجنة التنفيذية", email: "j.yaghmour@ace-jor.com", phone: "00962795207408", image: "/جودت يغمور.jpeg" },
    { name: "م. فؤاد الكندي - عُمان", role: "نائب اللجنة التنفيذية", email: null, phone: null, image: "/فؤاد الكندي.jpeg" },
    //{ name: "م. داود خلف - الأردن", role: "رئيس اللجنة التنفيذية", email: "daudskhalaf@yahoo.com", phone: "00962796445811", image: "/داوود خلف.jpeg" },
    //{ name: "م. محمد سعيد فتحة - لبنان", role: "نائب الرئيس", email: "fathasaid@gmail.com", phone: "0096137336716", image: null },
    //{ name: "م. عبد الكريم سعدون - السعودية", role: "عضو اللجنة التنفيذية", email: "al_sadoun@saudieng.org", phone: "00966505291125", image: null },
    //{ name: "د. إبراهيم الضبيب - السعودية", role: "عضو اللجنة التنفيذية", email: null, phone: "0096650514198", image: null },
    { name: "م. فيصل الشريف - السعودية", role: "عضو اللجنة التنفيذية", email: null, phone: null, image: "/فيصل الشريف.jpeg" },
    { name: "م. ناصر المطيري - الكويت", role: "عضو اللجنة التنفيذية", email: "nasserhalmutairi@gmail.com", phone: "0096599812097", image: "/members/n_mutairi.jpg" },
    { name: "م. شادي بن خليفة - تونس", role: "عضو اللجنة التنفيذية", email: "bk.chady@gmail.com", phone: "0021699058192", image: "/شادي بن خليفة.jpeg" },
    { name: "م. طارق العتماوي - فلسطين", role: "عضو اللجنة التنفيذية", email: "atmawi@hotmail.com", phone: "0599840684", image: "/طارق العتماوي.jpg" },
    { name: "م. عمر سلام - العراق", role: "عضو اللجنة التنفيذية", email: "omar80_ce@yahoo.com", phone: "009647716085053", image: "/عمر سلام.jpeg" },
    //{ name: "م. محمد أبو زكي - عُمان", role: "عضو اللجنة التنفيذية", email: "mabuzaki@gmail.com", phone: "0096899448820", image: null },
    //{ name: "د. شريف الهجان - مصر", role: "عضو اللجنة التنفيذية", email: "sherif@haggan-cab.org", phone: "01005236783", image: null },
    //{ name: "م. محمد عبد الغني - مصر", role: "عضو اللجنة التنفيذية", email: "m.69.abdelghany@gmail.com", phone: "201001349405", image: null },
    { name: "م. معتز طلبه - مصر", role: "عضو اللجنة التنفيذية", email: null, phone: null, image: "/معتز طلبه.jpg" },
    { name: "م. توفيق سنان - لبنان", role: "عضو اللجنة التنفيذية", email: null, phone: null, image: "/توفيق سنان.jpg" },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {!hideTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              أعضاء اللجنة <span className="text-secondary">التنفيذية</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </motion.div>
        )}

        {/* Chairman Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-0 mb-32"
        >
          {/* Chairman Image (Right side structurally, but visually left in RTL context depending on flex. Let's make it standard RTL) */}
          <div className="w-full md:w-1/3 z-20">
            <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              {/* Placeholder for the chairman's image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src="/members/m_ghoula.png" alt="م.إمحمد غولة" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Chairman Quote & Info */}
          <div className="w-full md:w-2/3 bg-primary rounded-3xl p-10 md:p-16 text-white shadow-2xl relative md:-mr-12 z-10">
            <Quote className="absolute top-10 right-10 w-16 h-16 text-white/10 rotate-180" />

            <div className="relative z-10 text-right">
              <h3 className="text-3xl font-bold mb-2">م.إمحمد عبد الرحمن غولة</h3>
              <p className="text-secondary font-semibold mb-8">رئيس اللجنة التنفيذية </p>

              <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-light">
                <p className="font-bold mb-2">
                  أهلاً بكم في المنصة الرقمية للهيئة العربية للتحكيم الهندسي
                </p>
                <p>
                  الزوار والأعضاء الكرام،
                  <br />
                  باسم اللجنة التنفيذية للهيئة العربية للتحكيم الهندسي، يسعدني أن أرحب بكم في موقعنا الإلكتروني، الذي أردناه أن يكون نافذة متكاملة تجمع بين الخبرة الهندسية والرصانة القانونية لخدمة قطاع التشييد والبناء في وطننا العربي.
                </p>
                <p>
                  تأسست الهيئة لتكون مرجعية عربية متخصصة في تسوية النزاعات الهندسية والإنشائية، ونحن في اللجنة التنفيذية نضع نصب أعيننا ترسيخ أطر العدالة الناجزة، ونشر ثقافة التحكيم المائي والوساطة، وتطوير قواعد تحكيم حديثة تواكب أفضل الممارسات الدولية وعقود الإنشاءات (مثل عقود الفيديك).
                </p>
                <p>
                  عبر هذا الموقع، نتيح لكم الاطلاع على قواعد التحكيم، وقوائم المحكمين والخبراء المعتمدين، والبرامج التدريبية التخصصية، إضافة إلى متابعة أحدث المبادرات التي تهدف إلى تعزيز البيئة الاستثمارية وتوفير الحماية القانونية للمشاريع الهندسية.
                </p>
                <p>
                  نتمنى أن تجدوا في منصتنا هذه ما يلبي تطلعاتكم، ونرحب دائماً بتواصلكم ومقترحاتكم لنرتقي معاً بمنظومة التحكيم الهندسي العربي.
                </p>
              </div>

              <div className="mt-8 text-white/90">
                <p className="font-bold text-lg">رئيس اللجنة التنفيذية</p>
                <p className="text-sm">الهيئة العربية للتحكيم الهندسي</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Member Image Area */}
              <div className="w-full h-64 shrink-0 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                {/* Fallback silhouette if no image */}
                {!member.image ? (
                  <User className="w-24 h-24 text-gray-300" />
                ) : (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                )}

              </div>

              {/* Member Info */}
              <div className="p-6 text-center bg-white relative z-10 flex flex-col grow">
                <h4 className="text-lg font-bold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4 font-bold">{member.role}</p>


              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommitteeSection;
