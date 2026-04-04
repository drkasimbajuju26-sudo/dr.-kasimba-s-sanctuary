import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/254798905200"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
        className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all animate-pulse-glow"
        aria-label="WhatsApp Dr. Kasimba Juju"
        style={{ boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
      >
        <MessageCircle className="w-6 h-6 text-foreground" />
      </motion.a>
      <motion.a
        href="tel:0798905200"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8 }}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all animate-pulse-glow"
        aria-label="Call Dr. Kasimba Juju"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </motion.a>
    </div>
  );
};

export default FloatingActions;
