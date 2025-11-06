import { motion } from "motion/react";

const types = [
  { 
    name: "Milk", 
    nameAr: "ميلك", 
    color: "from-amber-600 to-amber-700",
    description: "شوكولاتة حليب كريمية"
  },
  { 
    name: "Dark", 
    nameAr: "دارك", 
    color: "from-amber-900 to-black",
    description: "شوكولاتة داكنة غنية"
  },
  { 
    name: "White", 
    nameAr: "وايت", 
    color: "from-amber-100 to-amber-200",
    description: "شوكولاتة بيضاء ناعمة",
    textColor: "text-amber-900"
  },
  { 
    name: "Ruby", 
    nameAr: "روبي", 
    color: "from-pink-400 to-pink-600",
    description: "شوكولاتة روبي الفريدة"
  }
];

export function ChocolateTypes() {
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
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            أنواع <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">الشوكولاتة</span>
          </h2>
          <p className="text-white/60 text-lg">اختر النوع المفضل لديك</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${type.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50`}></div>
              <div className={`relative bg-gradient-to-br ${type.color} rounded-3xl p-8 shadow-2xl`}>
                <div className={`${type.textColor || 'text-white'} text-center`}>
                  <div className="text-4xl mb-3">🍫</div>
                  <h3 className="text-2xl mb-2">{type.name}</h3>
                  <p className="text-xl mb-2 opacity-90">{type.nameAr}</p>
                  <p className="text-sm opacity-75">{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
