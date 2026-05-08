import { Leaf, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary-foreground" />
              <span className="font-serif font-bold text-2xl">DMD Landscape & Cottage Care</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Professional landscaping and cottage care services committed to quality, reliability, and the natural beauty of your property.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} DMD Landscape & Cottage Care. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
