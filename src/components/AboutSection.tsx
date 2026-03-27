import { motion } from "framer-motion";
import aboutImg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-smoke relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/20 rounded-sm" />
            <img
              src={aboutImg}
              alt="Dr. Kasimba Juju - Spiritual Healer"
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          <div>
            <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">About Me</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Power Behind<br />
              <span className="text-primary text-glow">Dr. Kasimba Juju</span>
            </h2>
            <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                Born and raised in the heart of Kenya, Dr. Kasimba Juju inherited the ancient gift of spiritual healing from generations of powerful traditional healers. With decades of experience, he has helped thousands reclaim their lives.
              </p>
              <p>
                His practice combines deep-rooted African spiritual traditions with an intuitive understanding of the human condition. Whether you seek love, prosperity, protection, or healing — Dr. Kasimba Juju possesses the knowledge and power to guide you.
              </p>
              <p>
                Known across East Africa for his unwavering results, Dr. Kasimba Juju operates with integrity, compassion, and an ancient wisdom that transcends modern understanding.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
