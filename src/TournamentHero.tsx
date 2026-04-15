import { motion } from "motion/react";

export default function TournamentHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-background text-foreground border-b border-border">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <h1 className="text-7xl md:text-[120px] font-display font-normal mb-8 leading-[0.85] tracking-[-0.04em] uppercase">
            Six Three <br />
            <span className="italic text-accent ml-6 sm:ml-10 md:ml-20 block">Weekender</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12">
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
                The Six Three Weekender Chess Tournament is played in a classical round-robin format and takes place in the Civic District of Singapore. The eponymous "Six Three" format challenges players to a battle of wits across two days, each with six rounds and three rounds respectively.
              </p>
            </div>
            
            <div className="text-sm font-bold uppercase tracking-widest border-l-2 border-accent pl-6 py-2">
              Civic District, Singapore <br />
              <span className="text-muted-foreground">18 — 19 April 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
