import Navbar from "@/components/dmd/Navbar";
import Hero from "@/components/dmd/Hero";
import Services from "@/components/dmd/Services";
import About from "@/components/dmd/About";
import Contact from "@/components/dmd/Contact";
import Footer from "@/components/dmd/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
