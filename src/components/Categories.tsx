import { motion } from "framer-motion";
import { Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2, Home, Shirt } from "lucide-react";

const categories = [
  {
    name: "Electrónica",
    icon: Smartphone,
    count: "150+ productos",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Computadoras",
    icon: Laptop,
    count: "80+ productos",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Audio",
    icon: Headphones,
    count: "60+ productos",
    color: "from-pink-500 to-pink-600",
  },
  {
    name: "Relojes",
    icon: Watch,
    count: "45+ productos",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Fotografía",
    icon: Camera,
    count: "35+ productos",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    count: "70+ productos",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Hogar",
    icon: Home,
    count: "90+ productos",
    color: "from-teal-500 to-teal-600",
  },
  {
    name: "Moda",
    icon: Shirt,
    count: "120+ productos",
    color: "from-indigo-500 to-indigo-600",
  },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-body text-sm font-medium mb-4">
            Explora
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Categorías
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas navegando por nuestras categorías
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {category.count}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
