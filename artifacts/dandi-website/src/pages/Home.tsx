import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Layers, Box, Type } from "lucide-react";

export default function Home() {
  const projects = [
    { name: "Brew Wave", category: "Coffee Brand", img: "/images/brew-wave.png", color: "bg-dandi-blue" },
    { name: "Rangnikaa", category: "Bold Orange Logo", img: "/images/rangnikaa.png", color: "bg-primary" },
    { name: "SK Samosa", category: "Food Packaging", img: "/images/sk-samosa.png", color: "bg-dandi-green" },
    { name: "Roastara", category: "Coffee Brand", img: "/images/roastara.png", color: "bg-foreground" },
  ];

  const services = [
    { icon: <Palette className="w-8 h-8" />, title: "Brand Identity", desc: "Logos that stick in the mind." },
    { icon: <Box className="w-8 h-8" />, title: "Packaging", desc: "Boxes people want to keep." },
    { icon: <Layers className="w-8 h-8" />, title: "Strategy", desc: "The brain behind the beauty." },
    { icon: <Type className="w-8 h-8" />, title: "Typography", desc: "Words that look as good as they read." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-[#140F0C] text-white pt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-abstract.png')] bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8"
          >
            We Make Brands <br/>
            <span className="text-primary italic px-4">Unforgettable</span>
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center justify-center gap-6 mb-6"
          >
            <span className="font-display font-black uppercase tracking-widest text-lg md:text-2xl border-b-4 border-dandi-yellow text-white pb-1">Discover</span>
            <span className="w-8 h-[3px] bg-white/20 rounded-full" />
            <span className="font-display font-black uppercase tracking-widest text-lg md:text-2xl border-b-4 border-primary text-white pb-1">Approach</span>
            <span className="w-8 h-[3px] bg-white/20 rounded-full" />
            <span className="font-display font-black uppercase tracking-widest text-lg md:text-2xl border-b-4 border-dandi-green text-white pb-1">Launch</span>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl md:text-2xl font-sans max-w-2xl mx-auto mb-12 text-gray-300"
          >
            The design studio that makes startups look like industry giants.
          </motion.p>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button size="xl" className="h-16 px-10 text-lg rounded-full font-bold uppercase tracking-wider bg-dandi-yellow text-black hover:bg-white transition-all">
              See Our Work
            </Button>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="h-16 px-10 text-lg rounded-full font-bold uppercase tracking-wider border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                Let's Talk
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Marquee */}
      <div className="bg-primary py-4 overflow-hidden border-y-4 border-foreground rotate-[-1deg] scale-105 my-12 shadow-[0_8px_0_0_rgba(20,15,12,1)]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-4xl font-display font-bold text-white uppercase px-4 flex items-center gap-4">
              Branding <span className="text-foreground text-5xl">·</span> Logos <span className="text-foreground text-5xl">·</span> Packaging <span className="text-foreground text-5xl">·</span> Identity <span className="text-foreground text-5xl">·</span> Typography <span className="text-foreground text-5xl">·</span>
            </span>
          ))}
        </motion.div>
      </div>
      {/* Services Mini */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(20,15,12,1)] hover:-translate-y-2 transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-dandi-yellow flex items-center justify-center border-2 border-foreground mb-6">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{s.title}</h3>
                <p className="text-foreground/70 font-sans">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Selected Work */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">Selected<br/>Work.</h2>
            <Button variant="ghost" className="hidden md:flex rounded-full text-lg font-bold border-2 border-foreground uppercase">
              View All <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(20,15,12,1)] aspect-[4/5] bg-gray-100">
                  <img src={p.img} alt={p.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  <div className={`absolute inset-0 ${p.color} opacity-0 group-hover:opacity-90 mix-blend-multiply transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <p className="text-white font-sans font-bold tracking-widest uppercase mb-2 drop-shadow-md">{p.category}</p>
                    <h3 className="text-5xl font-display font-bold text-white drop-shadow-md">{p.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats/Why Us */}
      <section className="py-32 bg-dandi-blue text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-16 leading-tight">
              We build brands that people <span className="italic text-dandi-yellow">actually</span> care about.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border-4 border-white/20 rounded-3xl backdrop-blur-sm bg-white/5">
                <div className="text-6xl font-display font-bold text-dandi-yellow mb-2">10+</div>
                <div className="font-sans text-xl uppercase tracking-wider">Brands Built</div>
              </div>
              <div className="p-6 border-4 border-white/20 rounded-3xl backdrop-blur-sm bg-white/5">
                <div className="text-6xl font-display font-bold text-primary mb-2">100%</div>
                <div className="font-sans text-xl uppercase tracking-wider">Passion Driven</div>
              </div>
              <div className="p-6 border-4 border-white/20 rounded-3xl backdrop-blur-sm bg-white/5">
                <div className="text-4xl font-display font-bold text-dandi-green mb-2 mt-4">INDIA</div>
                <div className="font-sans text-xl uppercase tracking-wider">Made for the World</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Big CTA */}
      <section className="py-32 bg-dandi-yellow text-foreground text-center border-t-8 border-foreground">
        <div className="container mx-auto px-6">
          <h2 className="text-7xl md:text-9xl font-display font-bold tracking-tighter mb-12">
            Ready to stand out?
          </h2>
          <Link href="/contact">
            <Button size="xl" className="h-20 px-16 text-2xl rounded-full font-bold uppercase tracking-wider bg-foreground text-white hover:bg-primary transition-all shadow-[8px_8px_0px_0px_rgba(20,15,12,0.2)] hover:shadow-none hover:translate-y-2 hover:translate-x-2">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
