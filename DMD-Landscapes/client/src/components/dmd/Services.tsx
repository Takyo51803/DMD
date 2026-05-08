import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

import serviceLawn from "@assets/generated_images/perfectly_cut_lawn_close_up.png";
import serviceCottage from "@assets/generated_images/rustic_cottage_with_garden.png";
import serviceHardscape from "@assets/generated_images/stone_patio_outdoor_living.png";

const services = [
  {
    id: "lawn",
    title: "Lawn & Garden Care",
    description: "Keep your property pristine with our comprehensive maintenance programs.",
    image: serviceLawn,
    features: ["Weekly Mowing & Trimming", "Fertilization & Weed Control", "Seasonal Cleanups", "Garden Bed Maintenance"],
    color: "bg-forest-100 text-forest-900"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Expertise</h2>
          <p className="text-muted-foreground text-lg">
            We blend artistry with horticulture to create and maintain stunning outdoor environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
