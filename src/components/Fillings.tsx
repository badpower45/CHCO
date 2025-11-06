import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const fillings = [
  { name: "فراولة", emoji: "🍓", color: "from-red-500 to-pink-500" },
  { name: "مانجو", emoji: "🥭", color: "from-yellow-500 to-orange-500" },
  { name: "كريز", emoji: "🍒", color: "from-red-600 to-red-700" },
  { name: "توت أحمر", emoji: "🫐", color: "from-purple-500 to-pink-500" },
  { name: "مربى حليب", emoji: "🥛", color: "from-amber-600 to-amber-700" },
  { name: "جبنة كريمي", emoji: "🧀", color: "from-yellow-200 to-yellow-400" },
  { name: "ويفر", emoji: "🍪", color: "from-amber-700 to-amber-800" },
  { name: "بيستاشيو", emoji: "🌰", color: "from-green-500 to-green-600" },
  { name: "مكسرات", emoji: "🥜", color: "from-amber-800 to-amber-900" }
];

export function Fillings() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl md:text-5xl text-white">
              الحشوات <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">المتاحة</span>
            </h2>
            <Sparkles className="w-8 h-8 text-amber-400" />
          </div>
          <p className="text-white/60 text-lg">اختر من تشكيلة واسعة من الحشوات اللذيذة</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {fillings.map((filling, index) => (
            <motion.div
              key={filling.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${filling.color} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50`}></div>
              <div className={`relative bg-gradient-to-br ${filling.color} rounded-2xl p-6 text-center shadow-xl`}>
                <div className="text-4xl mb-2">{filling.emoji}</div>
                <p className="text-white">{filling.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-lg">
            💡 يمكنك تخصيص طلبك بأي حشو تختاره
          </p>
        </motion.div>
      </div>
    </section>
  );
}
