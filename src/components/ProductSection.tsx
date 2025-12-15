import { motion } from "framer-motion";
import { ShoppingCart, Star, Truck, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Smartphone Premium",
    price: "Q2,499",
    originalPrice: "Q3,200",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    rating: 4.8,
    reviews: 124,
    badge: "Más Vendido",
  },
  {
    id: 2,
    name: "Auriculares Inalámbricos",
    price: "Q449",
    originalPrice: "Q650",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    rating: 4.6,
    reviews: 89,
    badge: "Oferta",
  },
  {
    id: 3,
    name: "Reloj Inteligente",
    price: "Q899",
    originalPrice: "Q1,200",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    rating: 4.9,
    reviews: 256,
    badge: "Nuevo",
  },
  {
    id: 4,
    name: "Laptop Gaming",
    price: "Q8,999",
    originalPrice: "Q12,500",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80",
    rating: 4.7,
    reviews: 67,
    badge: "-28%",
  },
  {
    id: 5,
    name: "Cámara Profesional",
    price: "Q4,599",
    originalPrice: "Q5,800",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
    rating: 4.8,
    reviews: 43,
  },
  {
    id: 6,
    name: "Tablet Pro",
    price: "Q3,299",
    originalPrice: "Q4,500",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
    rating: 4.5,
    reviews: 98,
    badge: "Popular",
  },
];

const ProductSection = () => {
  return (
    <section id="productos" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-body text-sm font-medium mb-4">
            Catálogo
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Productos Destacados
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de productos de alta calidad con los mejores precios de Guatemala
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Truck className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Envío Rápido</h3>
              <p className="font-body text-sm text-muted-foreground">A toda Guatemala</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Compra Segura</h3>
              <p className="font-body text-sm text-muted-foreground">Pago protegido</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center">
              <Star className="w-6 h-6 text-accent-gold" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Mejor Calidad</h3>
              <p className="font-body text-sm text-muted-foreground">Productos garantizados</p>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent-gold text-accent-gold" />
                      <span className="font-body text-sm text-foreground font-medium">
                        {product.rating}
                      </span>
                    </div>
                    <span className="font-body text-xs text-muted-foreground">
                      ({product.reviews} reseñas)
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading font-bold text-2xl text-accent">
                      {product.price}
                    </span>
                    <span className="font-body text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Agregar al Carrito
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold px-8"
          >
            Ver Todos los Productos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
