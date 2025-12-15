import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroStore = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-navbar py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">P</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                PAUDRONIX <span className="text-accent">GT</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("productos")}
                className="text-foreground/80 hover:text-foreground font-body transition-colors"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("categorias")}
                className="text-foreground/80 hover:text-foreground font-body transition-colors"
              >
                Categorías
              </button>
              <button
                onClick={() => scrollToSection("ofertas")}
                className="text-foreground/80 hover:text-foreground font-body transition-colors"
              >
                Ofertas
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground/80 hover:text-foreground font-body transition-colors"
              >
                Contacto
              </button>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Button>
              <div className="flex items-center gap-1 text-foreground/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-body">Guatemala</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <button
                onClick={() => scrollToSection("productos")}
                className="block w-full text-left text-foreground/80 hover:text-foreground font-body py-2"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("categorias")}
                className="block w-full text-left text-foreground/80 hover:text-foreground font-body py-2"
              >
                Categorías
              </button>
              <button
                onClick={() => scrollToSection("ofertas")}
                className="block w-full text-left text-foreground/80 hover:text-foreground font-body py-2"
              >
                Ofertas
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left text-foreground/80 hover:text-foreground font-body py-2"
              >
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-body text-sm font-medium">
            🇬🇹 Envíos a toda Guatemala
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 text-shadow-strong"
        >
          PAUDRONIX{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            GT
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-body text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto"
        >
          Tu tienda en línea de confianza. Encuentra los mejores productos con los mejores precios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-6 text-lg"
            onClick={() => scrollToSection("productos")}
          >
            Ver Productos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 font-body font-semibold px-8 py-6 text-lg"
            onClick={() => scrollToSection("ofertas")}
          >
            Ofertas Especiales
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-accent">500+</div>
            <div className="font-body text-sm text-foreground/60">Productos</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-accent">24h</div>
            <div className="font-body text-sm text-foreground/60">Entrega</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-accent">100%</div>
            <div className="font-body text-sm text-foreground/60">Garantía</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroStore;
