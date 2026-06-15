import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import dandiLogoPath from "@assets/Dandi.co.in-white_1781466734364.png";

export function Footer() {
  return (
    <footer className="bg-[#140F0C] text-white pt-24 pb-12 overflow-hidden border-t-8 border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <img src={dandiLogoPath} alt="Dandi" className="h-40 w-auto mb-8" />
            <p className="text-xl text-gray-400 font-sans max-w-md mb-8">
              A bold, scrappy, color-obsessed studio making startups look like big brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">IG</a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">BE</a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">LI</a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-display text-2xl font-bold mb-6 text-dandi-yellow">Explore</h3>
            <ul className="flex flex-col gap-4 font-sans text-lg">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="font-display text-2xl font-bold mb-6 text-dandi-green">Say Hello</h3>
            <div className="flex flex-col gap-4 font-sans text-lg text-gray-300">
              <a href="mailto:dandi@dandiagency.com" className="hover:text-primary transition-colors">dandi@dandiagency.com</a>
              <p>Based in India.<br/>Made for the World.</p>
              <Link href="/contact" className="mt-4 inline-block">
                <Button variant="outline" className="rounded-full border-2 border-dandi-yellow text-dandi-yellow hover:bg-dandi-yellow hover:text-black font-bold uppercase tracking-wider transition-all">
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-sans text-sm">
          <p>© {new Date().getFullYear()} Dandi Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
