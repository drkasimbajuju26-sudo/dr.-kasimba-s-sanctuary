import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James M.",
    location: "Nairobi",
    text: "My business was on the verge of collapse. After Dr. Kasimba Juju performed the business ritual, clients started flowing in within a week. I am forever grateful.",
  },
  {
    name: "Aisha W.",
    location: "Mombasa",
    text: "I had lost hope of ever getting my husband back. Dr. Kasimba's love potion brought him home in just 3 days. Our marriage is stronger than ever.",
  },
  {
    name: "Peter O.",
    location: "Kisumu",
    text: "The lucky ring I received has completely changed my fortune. I won a court case that had dragged on for 2 years. This man is truly powerful.",
  },
  {
    name: "Grace N.",
    location: "Nakuru",
    text: "After years of trying to conceive, Dr. Kasimba's fertility rituals blessed us with twins. We are the happiest family now. God bless this healer.",
  },
  {
    name: "David K.",
    location: "Eldoret",
    text: "Someone had stolen my land and all legal avenues had failed. Dr. Kasimba helped me recover my property through his spiritual intervention. Incredible.",
  },
  {
    name: "Fatima A.",
    location: "Malindi",
    text: "I was suffering from terrible nightmares and spiritual attacks. The cleansing ritual freed me completely. I sleep peacefully now and my life has transformed.",
  },
  {
    name: "Samuel T.",
    location: "Thika",
    text: "My ex had moved on but I couldn't let go. Dr. Kasimba brought her back and now we are engaged. His powers are real and undeniable.",
  },
  {
    name: "Lucy W.",
    location: "Nyeri",
    text: "The spiritual cleansing was life-changing. Dark clouds that had followed me for years were lifted. I got a promotion within a month of the ritual.",
  },
  {
    name: "Hassan M.",
    location: "Lamu",
    text: "I was skeptical at first, but Dr. Kasimba proved me wrong. My shop's revenue tripled after the business ritual. I recommend him to everyone I know.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What My <span className="text-primary text-glow">Clients</span> Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-sm p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.location}, Kenya
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
