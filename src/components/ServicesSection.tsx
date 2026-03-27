import { motion } from "framer-motion";
import { Heart, Briefcase, Sparkles, Shield, Scale, Baby, TrendingUp, Search } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Perfect Marriage / Fix Marriage",
    description: "Restore harmony and reignite the flame in your marriage. Dr. Kasimba Juju uses powerful spiritual rituals to mend broken bonds and strengthen the foundation of your union.",
  },
  {
    icon: Sparkles,
    title: "Love Potion / Bring Back Your Ex",
    description: "Rekindle lost love and draw your soulmate back into your life. Through ancient love rituals and potent spiritual potions, experience the return of passion and devotion.",
  },
  {
    icon: Briefcase,
    title: "Business Ritual",
    description: "Let us help you unlock your business potential and achieve lasting success. Powerful rituals designed to attract customers, close deals, and remove obstacles blocking your path to wealth.",
  },
  {
    icon: Shield,
    title: "Spiritual Cleansing",
    description: "Find peace and clarity through transformative rituals. Dr. Kasimba Juju helps individuals cleanse negative energies, break curses, and restore spiritual well-being for a renewed life.",
  },
  {
    icon: Sparkles,
    title: "Lucky Rings",
    description: "Discover the enchanting collection of lucky rings designed to enhance love, business success, and protection. Each ring is crafted with care and intention, attracting positive energies and fortifying your aspirations.",
  },
  {
    icon: Search,
    title: "Get Your Lost Property Back",
    description: "Unlock the power of nature with our unique blend of strong herbs and spiritual practices designed to help you reclaim lost property and provide protection for your belongings.",
  },
  {
    icon: Scale,
    title: "Win Court Case",
    description: "Facing legal battles? Dr. Kasimba Juju offers powerful spiritual interventions that tip the scales of justice in your favor. Walk into that courtroom with confidence and spiritual backing.",
  },
  {
    icon: Baby,
    title: "Family & Fertility Support",
    description: "For those facing family challenges, Dr. Kasimba Juju offers cultural guidance and spiritual support to help clients feel prepared, confident, and blessed with fertility and family harmony.",
  },
  {
    icon: TrendingUp,
    title: "Business & Financial Growth",
    description: "This service helps clients focus on opportunities and growth using culturally inspired practices. Dr. Kasimba Juju encourages positivity, discipline, and alignment with personal financial goals.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">What I Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            My <span className="text-primary text-glow">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card border border-border rounded-sm p-6 hover:border-primary/50 transition-all duration-300 border-glow"
            >
              <service.icon className="w-10 h-10 text-primary mb-4 group-hover:animate-flicker" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
