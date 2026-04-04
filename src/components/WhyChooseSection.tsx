import { motion } from "framer-motion";
import { Clock, Star, Lock, MapPin, Zap, Users } from "lucide-react";

const reasons = [
  {
    icon: Star,
    title: "Proven Results",
    desc: "Thousands of satisfied clients across East Africa and beyond.",
  },
  {
    icon: Clock,
    title: "30+ Years Experience",
    desc: "Decades of mastering ancient spiritual practices and rituals.",
  },
  {
    icon: Lock,
    title: "100% Confidential",
    desc: "Your secrets are safe. Complete privacy and discretion guaranteed.",
  },
  {
    icon: MapPin,
    title: "Based in Kenya",
    desc: "Authentic traditional healing rooted in Kenyan spiritual heritage.",
  },
  {
    icon: Zap,
    title: "Fast & Powerful",
    desc: "Many clients see results within days of consultation.",
  },
  {
    icon: Users,
    title: "All Problems Welcome",
    desc: "No matter how big or small, Dr. Kasimba Juju can help.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-smoke relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Why Choose Me
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Why <span className="text-primary text-glow">Dr. Kasimba Juju</span>
            ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {r.title}
              </h3>
              <p className="font-body text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
