import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    name: "بار مكسرات",
    price: "250",
    description: "بار شوكولاتة فاخر محشو بالمكسرات الطبيعية",
    images: [
      "https://i.postimg.cc/vmjRHMhH/527463506-1111958144207385-5022599227981336830-n.jpg",
      "https://i.postimg.cc/gJ6Cx5tq/575618111-810970011826458-6832067630041112549-n.jpg"
    ]
  },
  {
    name: "بار كنافة بيستاشيو",
    price: "300",
    description: "تحفة فنية من الشوكولاتة بحشو الكنافة والبيستاشيو",
    images: [
      "https://i.postimg.cc/rmtBDbZ8/553232556-1898010964468967-6103205913362185034-n.jpg",
      "https://i.postimg.cc/1tNk8T7m/553536568-2076183889855013-9057662121708438241-n.jpg"
    ],
    featured: true
  },
  {
    name: "علبة 6 قطع",
    price: "210",
    description: "مجموعة مختارة من أفضل نكهاتنا",
    images: [
      "https://i.postimg.cc/xCbwX7p9/566392359-809194315365911-3388862481044028694-n.jpg",
      "https://i.postimg.cc/Y9m5vVDk/566483509-1621648562140305-4816609800818509539-n.jpg"
    ]
  },
  {
    name: "علبة 12 قطعة",
    price: "420",
    description: "تشكيلة متنوعة من الشوكولاتة الفاخرة",
    images: [
      "https://i.postimg.cc/rmtBDbZz/566515498-2792578327746201-2856689955881611481-n.jpg",
      "https://i.postimg.cc/sXZkM8HB/566638968-2034521463958665-2746886850248167082-n.jpg"
    ]
  },
  {
    name: "علبة 24 قطعة",
    price: "840",
    description: "الخيار المثالي للمناسبات والهدايا الفخمة",
    images: [
      "https://i.postimg.cc/qRCPNYDC/567110113-1356113292531010-3223477886650606826-n.jpg",
      "https://i.postimg.cc/QtW2FPY7/568199479-33144589821807163-2774123367654965605-n.jpg"
    ],
    featured: true
  },
  {
    name: "علبة بابلز مكسرات",
    price: "300",
    description: "5 قطع من شوكولاتة البابلز الفريدة",
    images: [
      "https://i.postimg.cc/W3JBdKYG/569179386-810315258278950-2681081867200469672-n.jpg"
    ]
  },
  {
    name: "علبة عمود",
    price: "650",
    description: "6 قطع بتصميم عمودي مميز",
    images: [
      "https://i.postimg.cc/4dhDYM21/577603869-24824217147264059-6541983239376586914-n.jpg"
    ]
  },
  {
    name: "علبة 6 قطع + ميني بار",
    price: "300",
    description: "تشكيلة مميزة مع ميني بار إضافي",
    images: [
      "https://i.postimg.cc/xCbwX7p9/566392359-809194315365911-3388862481044028694-n.jpg"
    ]
  }
];

export function Products() {
  return (
    <section id="products" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/10 to-black"></div>
      
      {/* Decorative Blur */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">
            منتجاتنا <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">المميزة</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            اكتشف مجموعتنا الفاخرة من الشوكولاتة البلجيكية الأصلية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {product.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-pink-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm shadow-lg">
                    ⭐ مميز
                  </div>
                </div>
              )}

              <div className="relative h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden group-hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square">
                    <ImageWithFallback
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl text-white flex-1">{product.name}</h3>
                      <div className="flex flex-col items-end">
                        <div className="text-3xl bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">{product.price}</div>
                        <div className="text-sm text-white/40">جنيه</div>
                      </div>
                    </div>
                    <p className="text-white/60">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
