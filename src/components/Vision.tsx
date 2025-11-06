import { motion } from "motion/react";
import { Sparkles, Award, Heart, Leaf } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "جودة عالمية",
    description: "نستخدم شوكولاتة Callebaut البلجيكية - واحدة من أفضل ماركات الشوكولاتة في العالم"
  },
  {
    icon: Leaf,
    title: "طبيعية 100%",
    description: "بدون أي بدائل لزبدة الكاكاو، فقط مكونات طبيعية أصلية"
  },
  {
    icon: Heart,
    title: "صنع بحب",
    description: "كل قطعة شوكولاتة مصنوعة بعناية فائقة وحب للتفاصيل"
  },
  {
    icon: Sparkles,
    title: "تجربة فريدة",
    description: "نقدم لك تجربة شوكولاتة لا تُنسى مع نكهات وحشوات متنوعة"
  }
];

export function Vision() {
  return (
    <section id="vision" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/20 to-black"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center rotate-12 mx-auto">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            رؤيتنا <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">وقيمنا</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            في O.A Chocolate، نؤمن بأن الشوكولاتة ليست مجرد حلوى، بل هي فن وتجربة حسية فريدة.
            نسعى لتقديم أفضل أنواع الشوكولاتة البلجيكية الفاخرة بجودة استثنائية ونكهات لا تُنسى.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl text-white mb-6">
                  ليه تختار <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">O.A Chocolate</span>؟
                </h3>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    ✨ نستخدم أجود أنواع الشوكولاتة البلجيكية من ماركة Callebaut العريقة، المعروفة بجودتها العالمية منذ عام 1911
                  </p>
                  <p>
                    🍫 كل منتجاتنا خالية تماماً من البدائل الصناعية - فقط زبدة الكاكاو الطبيعية 100%
                  </p>
                  <p>
                    💎 نقدم تشكيلة واسعة من النكهات والحشوات الفاخرة لتناسب جميع الأذواق
                  </p>
                  <p>
                    🎁 تغليف فاخر ومميز يجعل منتجاتنا هدية مثالية لأحبائك
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1758191443045-da47b43f5a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaG9jb2xhdGUlMjBiYXJ8ZW58MXx8fHwxNjI0NTMzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Luxury Chocolate"
                  className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
