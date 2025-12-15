import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

const FooterStore = () => {
  return (
    <footer id="contacto" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">P</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                PAUDRONIX <span className="text-accent">GT</span>
              </span>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              Tu tienda de confianza en Guatemala. Calidad, variedad y los mejores precios.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {["Inicio", "Productos", "Categorías", "Ofertas", "Sobre Nosotros"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              Atención al Cliente
            </h3>
            <ul className="space-y-3">
              {[
                "Preguntas Frecuentes",
                "Métodos de Pago",
                "Envíos y Entregas",
                "Devoluciones",
                "Garantía",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              Contáctanos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="font-body text-muted-foreground">
                  Ciudad de Guatemala, Guatemala
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-muted-foreground">+502 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body text-muted-foreground">info@paudronixgt.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-body text-sm text-muted-foreground">
            © 2024 PAUDRONIX GT. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidad
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterStore;
