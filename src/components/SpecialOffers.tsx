import { motion } from "framer-motion";
import { Clock, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    title: "Flash Sale",
    subtitle: "Hasta 50% de descuento",
    description: "Solo por hoy en productos seleccionados",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    gradient: "from-red-500 to-orange-500",
    badge: "🔥 HOT",
  },
  {
    title: "Nuevos Lanzamientos",
    subtitle: "Los últimos productos",
    description: "Descubre lo más nuevo del mercado",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&q=80",
    gradient: "from-blue-500 to-cyan-500",
    badge: "✨ NUEVO",
  },
];

const SpecialOffers = () => {
  return (
    <section id="ofertas" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-destructive/20 text-destructive font-body text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline mr-1" />
            Ofertas Limitadas
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Ofertas Especiales
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            No te pierdas estas increíbles ofertas. ¡Tiempo limitado!
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <Clock className="w-6 h-6 text-accent" />
          <div className="flex gap-3">
            {[
              { value: "12", label: "Horas" },
              { value: "45", label: "Min" },
              { value: "30", label: "Seg" },
            ].map((time, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-foreground">
                    {time.value}
                  </span>
                </div>
                <span className="font-body text-xs text-muted-foreground mt-1 block">
                  {time.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${offer.gradient} opacity-80`} />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-body text-sm font-medium mb-4">
                    {offer.badge}
                  </span>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">
                    {offer.title}
                  </h3>
                  <p className="font-heading font-semibold text-xl text-white/90 mb-2">
                    {offer.subtitle}
                  </p>
                  <p className="font-body text-white/80">
                    {offer.description}
                  </p>
                </div>

                <Button
                  className="w-fit mt-6 bg-white text-gray-900 hover:bg-white/90 font-body font-semibold gap-2"
                >
                  Ver Ofertas
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary to-accent text-center"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
            ¿Quieres recibir ofertas exclusivas?
          </h3>
          <p className="font-body text-white/80 mb-6 max-w-lg mx-auto">
            Suscríbete a nuestro boletín y recibe las mejores ofertas directamente en tu correo
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/60 font-body focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-primary hover:bg-white/90 font-body font-semibold px-6">
              Suscribirse
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;
