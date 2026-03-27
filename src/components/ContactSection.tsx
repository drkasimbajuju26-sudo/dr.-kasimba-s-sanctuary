import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-smoke relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Contact <span className="text-primary text-glow">Dr. Kasimba Juju</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to transform your life? Reach out today for a confidential consultation.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid gap-6">
            <a
              href="tel:0748826597"
              className="flex items-center gap-4 bg-card border border-border rounded-sm p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-sm text-muted-foreground uppercase tracking-wider">Call Directly</p>
                <p className="font-display text-xl text-foreground">0748 826 597</p>
              </div>
            </a>

            <a
              href="https://wa.me/254748826597"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card border border-border rounded-sm p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-sm text-muted-foreground uppercase tracking-wider">WhatsApp / Text</p>
                <p className="font-display text-xl text-foreground">0748 826 597</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-card border border-border rounded-sm p-6">
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="font-display text-xl text-foreground">Kenya, East Africa</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
