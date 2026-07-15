import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, BookOpen } from 'lucide-react';

const ArticlesSection = ({ hideTitle = true }) => {
  const articles = [
    {
      title: "أثر الوسائل البديلة في نجاح المشروعات",
      type: "PDF",
      url: "/اثر-الوسائل-البديلة-في-انجاح-المشروعات.pdf",
      desc: "دورة بعنوان أثر الوسائل البديلة في نجاح المشروعات برعاية الأمانة العامة لإتحاد المهندسين العرب وبالتعاون مع نقابة المهندسين المصريين.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden min-h-[70vh]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {!hideTitle && (
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            <span className="text-secondary">المقالات</span> والدراسات
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
            مجموعة من المقالات والأبحاث المتخصصة في مجالات التحكيم وفض المنازعات الهندسية، مقدمة من نخبة من الخبراء والمختصين.
          </p>
        </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-primary/30 transition-all duration-300 group flex flex-col"
            >
              {/* Card Header / Image Area */}
              <div className="h-64 relative flex items-center justify-center overflow-hidden group-hover:shadow-inner transition-all duration-500">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04111d]/90 via-[#04111d]/20 to-transparent opacity-80"></div>
                
                {/* Overlay Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-8 text-right flex flex-col flex-grow">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 self-end">
                  <FileText className="w-3 h-3" />
                  {article.type}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {article.desc}
                </p>
                
                {/* Action Button */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-gray-50 hover:bg-secondary hover:text-white text-secondary font-bold rounded-xl transition-all duration-300 group/btn"
                  >
                    <span>قراءة المقال</span>
                    <Download className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
