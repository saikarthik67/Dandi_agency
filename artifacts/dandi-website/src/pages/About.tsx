import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  const team = [
    { name: "Saikarthik.D", title: "Designer · Developer · Founder", color: "bg-primary" },
  ];

  const values = [
    { title: "Creativity", desc: "Safe is boring. We push boundaries to make you unforgettable." },
    { title: "Clarity", desc: "Boldness means nothing if the message is lost. We design with purpose." },
    { title: "Character", desc: "Every brand has a soul. Our job is to make it visible." },
  ];

  return (
    <div className="w-full pt-24 pb-32 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <section className="max-w-4xl py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10"
          >
            We are <span className="text-primary italic">Dandi.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-sans text-foreground/80 leading-relaxed"
          >
            <p className="mb-6">
              Born in India. Built for the bold. We're a young, scrappy team of designers who believe that early-stage startups deserve world-class branding.
            </p>
            <p>
              We don't do boring corporate templates. We create electric, memorable visual identities that punch above their weight.
            </p>
          </motion.div>
        </section>

        {/* Values */}
        <section className="py-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center md:text-left">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(20,15,12,1)]"
              >
                <div className="text-5xl font-display font-black text-dandi-yellow mb-6">0{i+1}</div>
                <h3 className="text-3xl font-display font-bold mb-4">{v.title}</h3>
                <p className="text-lg font-sans text-foreground/70">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="py-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">The Troublemakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:flex md:justify-center">
            {team.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[3/4] ${t.color} rounded-[3rem] border-4 border-foreground mb-6 overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(20,15,12,1)] group-hover:-translate-y-4 transition-transform duration-300`}>
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display font-black text-9xl uppercase -rotate-90 origin-center whitespace-nowrap">
                    Dandi
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-display font-bold">{t.name}</h3>
                  <p className="text-xl font-sans text-primary font-bold uppercase tracking-wider mt-2">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="mt-20 flex justify-center">
           <Link href="/contact">
              <Button size="xl" className="h-20 px-16 text-2xl rounded-full font-bold uppercase tracking-wider bg-dandi-yellow text-foreground border-4 border-foreground hover:bg-primary hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(20,15,12,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none">
                Join the Chaos
              </Button>
            </Link>
        </div>

      </div>
    </div>
  );
}
