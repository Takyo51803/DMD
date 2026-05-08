import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Stone Patio",
    category: "Hardscaping",
    image: "/images/portfolio_1.jpg",
  },
  {
    title: "Lawn Restoration",
    category: "Lawn Care",
    image: "/images/portfolio_2.jpg",
  },
  {
    title: "Garden Design",
    category: "Planting",
    image: "/images/portfolio_3.jpg",
  },
  {
    title: "Walkway Installation",
    category: "Hardscaping",
    image: "/images/portfolio_4.jpg",
  },
  {
    title: "Seasonal Cleanup",
    category: "Maintenance",
    image: "/images/portfolio_5.jpg",
  },
  {
    title: "Backyard Oasis",
    category: "Full Landscape",
    image: "/images/portfolio_6.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore a selection of our recent landscaping and cottage care projects. We take pride in transforming outdoor spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary-foreground/80 text-sm font-medium mb-2 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-serif font-bold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
