import React from 'react';
import { motion } from 'framer-motion';
import { Users, Scale, Handshake, CheckCircle2 } from 'lucide-react';

const ArbitrationServicesSection = ({ hideTitle = true }) => {
  const cards = [
    {
      title: "مجلس فض النزاع",
      desc: "هو أحد الطرق البديلة لحل المنازعات يتم بمبادرة من أحد الخصوم أو من القاضي، بحيث يتم حل النزاع والخلاف وفضه بالتراضي بين الطرفين، ويقوم به القاضي",
      icon: <Handshake className="w-12 h-12 text-secondary" />
    },
    {
      title: "الوساطة",
      desc: "هي السعي لإيجاد حل ودي وسلمي بين الطرفين المتنازعين وتقريب وجهات النظر والوصول إلى حل دون اللجوء إلى الدعوى القضائية ويقوم به وسيط بأمر من القاضي.",
      icon: <Users className="w-12 h-12 text-secondary" />
    },
    {
      title: "التحكيم",
      desc: "هو قضاء خاص عن طريق الاتفاق على إحالة جميع أو المنازعات بين الأطراف التي نشأت أو قد تنشأ بينهما في شأن علاقة نظامية مُحدّدة، تعاقديّة كانت أم غير تعاقديّة.",
      icon: <Scale className="w-12 h-12 text-secondary" />
    }
  ];

  const disputeScaleList = [
    "تنوع النزاعات لتشمل المطالبات المالية وتمديد الوقت",
    "تزايد عدد القضايا الهندسية المطروحة للتحكيم سنوياً",
    "تعقيد النزاعات لتداخل الجوانب الفنية والقانونية",
    "ارتفاع القيمة المالية للمطالبات في المشاريع الكبرى",
    "الحاجة المتزايدة لخبراء ومحكمين متخصصين هندسياً"
  ];

  const disputeImpactList = [
    "تأخير في الجدول الزمني لتنفيذ المشروع",
    "زيادة في التكاليف والنفقات الإضافية",
    "تدهور العلاقات بين أطراف العقد",
    "التأثير السلبي على جودة العمل المنفذ",
    "تجميد المستحقات المالية للمقاولين"
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        
        {/* Title */}
        {!hideTitle && (
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            الصلح والوساطة <span className="text-secondary">والتحكيم</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        )}

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-24 h-24 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <div className="group-hover:brightness-200 transition-all duration-500">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Info Split Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Image Side (Right in visual, but using standard flex order) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Fallback image placeholder representing the engineering arbitration image */}
              <div className="w-full aspect-[4/3] bg-gray-300 flex flex-col items-center justify-center text-gray-500 relative">
                 {/* Real image would go here, representing the suits & hardhat from the screenshot */}
                 <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800" alt="Mediation and Arbitration" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Text Side (Left in visual) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 order-1 lg:order-2 text-right"
          >
            <h3 className="text-3xl font-bold text-primary mb-6 leading-tight">
              ما تقوم به <span className="text-secondary">الهيئة العربية للتحكيم</span>
            </h3>
            <p className="text-gray-500 leading-loose text-lg mb-8">
              إن اتحاد المهندسين العرب هو منظمة هندسية عربية توحد الأهداف والعمل المستقبلي والتعاون لكل المهندسين العرب. التعاون والتنسيق هو الهدف الرئيسي للاتحاد الهندسي العربي ولغرض زيادة حالة المهندسين العرب ومهنتهم بخدمة المجتمع العربي وقضاياه المختلفة سواء إن كانت علمياً ، تكنولوجياً أو تعليمياً وخدمة هدف الأمة العربية في بناء وحدتها، والاستقلال السياسي والاقتصادي.
            </p>
            
            <a 
              href="/اجراءات وقواعد التحكيم الهندسي.pdf#toolbar=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-white rounded-lg font-bold hover:bg-secondary/90 transition-colors shadow-lg"
            >
              <span>عرض إجراءات وقواعد التحكيم الهندسي</span>
              <Scale className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Two Lists Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-gray-100">
          
          {/* Right List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <h4 className="text-2xl font-bold text-secondary mb-8">توضيح حجم المنازعات الهندسية</h4>
            <ul className="space-y-4">
              {disputeScaleList.map((item, idx) => (
                <li key={idx} className="flex items-center justify-end gap-3 text-gray-500">
                  <span>{item}</span>
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Left List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-right"
          >
            <h4 className="text-2xl font-bold text-secondary mb-8">تأثير المنازعات الهندسية</h4>
            <ul className="space-y-4">
              {disputeImpactList.map((item, idx) => (
                <li key={idx} className="flex items-center justify-end gap-3 text-gray-500">
                  <span>{item}</span>
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ArbitrationServicesSection;
