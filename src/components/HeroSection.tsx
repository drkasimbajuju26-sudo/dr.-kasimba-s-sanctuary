import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Mystical ritual scene"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <p className="font-display text-sm md:text-base tracking-[0.4em] uppercase text-primary mb-4 animate-flicker">
          Traditional Healer & Spiritual Guide
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-glow leading-tight mb-6">
          Dr. Kasimba<br />Juju
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Renowned witch doctor and spiritual healer based in Kenya. Unlock the ancient powers that transform lives, mend hearts, and restore fortunes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase rounded-sm border-glow hover:brightness-110 transition-all"
          >
            Explore Services
          </a>
          <a
            href="tel:0748826597"
            className="inline-block px-8 py-4 border border-primary text-primary font-display text-sm tracking-widest uppercase rounded-sm hover:bg-primary/10 transition-all"
          >
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
