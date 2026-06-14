import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PenTool, Target, Package, Smartphone, Type, Presentation } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <PenTool className="w-10 h-10" />, title: "Logo & Brand Identity", desc: "More than just a logo. A complete visual system that speaks your language." },
    { icon: <Target className="w-10 h-10" />, title: "Brand Strategy & Naming", desc: "Finding the perfect name and the exact right angle to attack your market." },
    { icon: <Package className="w-10 h-10" />, title: "Packaging Design", desc: "Physical products that look too good to throw the box away." },
    { icon: <Smartphone className="w-10 h-10" />, title: "Social Media Design", desc: "Scroll-stopping graphics that command attention in crowded feeds." },
    { icon: <Type className="w-10 h-10" />, title: "Typography & Print", desc: "Editorial design, posters, and print collateral with Swiss precision." },
    { icon: <Presentation className="w-10 h-10" />, title: "Pitch Decks", desc: "Presentations so beautiful investors will give you money just for the slides." },
  ];

  return (
    <div className="w-full pt-24 pb-32 bg-background">
      {/* Hero */}
      <section className="bg-primary text-white py-32 px-6 border-b-8 border-foreground">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-display font-bold tracking-tighter max-w-4xl"
          >
            What we do <br/> <span className="text-dandi-yellow italic">best.</span>
          </motion.h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(20,15,12,1)] hover:bg-dandi-yellow/10 transition-colors"
              >
                <div className="w-20 h-20 rounded-2xl bg-foreground text-white flex items-center justify-center mb-8 -rotate-3">
                  {s.icon}
                </div>
                <h3 className="text-4xl font-display font-bold mb-4">{s.title}</h3>
                <p className="text-xl font-sans text-foreground/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-foreground text-white border-y-8 border-dandi-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-20">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 -z-10 -translate-y-1/2"></div>
            
            {["Discover", "Design", "Deliver"].map((step, i) => (
              <div key={i} className="flex-1 relative bg-foreground z-10 px-8 py-10 rounded-[3rem] border-4 border-white/20 hover:border-dandi-yellow transition-colors">
                <div className="text-6xl font-display font-black text-white/10 mb-4 absolute top-4 left-6">0{i+1}</div>
                <h3 className="text-4xl font-display font-bold text-dandi-yellow relative z-10">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 max-w-3xl mx-auto">
          Not sure what you need? Let's figure it out together.
        </h2>
        <Link href="/contact">
          <Button size="xl" className="h-20 px-16 text-2xl rounded-full font-bold uppercase tracking-wider bg-primary text-white border-4 border-foreground hover:bg-foreground hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(20,15,12,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none">
            Book a Call
          </Button>
        </Link>
      </section>
    </div>
  );
}
