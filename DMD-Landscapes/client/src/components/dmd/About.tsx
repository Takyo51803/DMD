import { motion } from "framer-motion";
import { Sprout, Users, Clock, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-forest-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Rooted in Quality, <br />
              <span className="text-primary">Grown by Trust.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At DMD Landscape and Cottage Care, we believe your outdoor space should be an extension of your home—a place of relaxation, beauty, and connection with nature.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded on the principles of old-world craftsmanship and modern reliability, our team is dedicated to preserving the natural beauty of your property while ensuring it remains a functional, welcoming space for your family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Users, title: "Expert Team", desc: "Trained horticulturists and craftsmen." },
                { icon: Clock, title: "Reliable Service", desc: "Consistent schedules you can count on." },
                { icon: Sprout, title: "Eco-Friendly", desc: "Sustainable practices and organic options." },
                { icon: Shield, title: "Fully Insured", desc: "Professional protection for your property." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Using a solid color placeholder or reusing an image if needed, but a nice color block is artistic too if we ran out of generations. Let's reuse the cottage one but zoomed differently via object-cover or just a nice div pattern. Actually, let's use a pattern div for "About" if we don't generate another. I'll use a color block with a quote. */}
              <div className="w-full h-full bg-primary flex flex-col items-center justify-center p-12 text-center text-primary-foreground relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                 <h3 className="text-3xl font-serif italic relative z-10">
                   "The love of gardening is a seed once sown that never dies."
                 </h3>
                 <p className="mt-6 font-medium uppercase tracking-widest text-sm opacity-80 relative z-10">— Gertrude Jekyll</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
