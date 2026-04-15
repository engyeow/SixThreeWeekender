import TournamentHero from "./TournamentHero";
import TournamentDetails from "./TournamentDetails";
import TournamentRules from "./TournamentRules";
import { Button } from "./button";
import { ChevronRight } from "lucide-react";

const SHOW_REGISTRATION = false; // Toggle this to show/hide the registration section

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <main>
        <TournamentHero />
        <TournamentDetails />
        <TournamentRules />
        
        {/* Registration CTA - Dark Panel */}
        {SHOW_REGISTRATION && (
          <section className="py-24 bg-primary text-primary-foreground">
            <div className="container px-4 mx-auto">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-left">
                  <span className="section-label text-white/40">Registration</span>
                  <h2 className="text-5xl font-display italic mb-4">Ready to Compete?</h2>
                  <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
                    Join 9 other chess enthusiasts for a weekend of fun classical chess in Singapore.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button size="lg" className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary rounded-none h-14 px-10 text-sm font-bold uppercase tracking-widest transition-all">
                    Register Now
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className={`py-16 border-t border-border ${!SHOW_REGISTRATION ? 'bg-black text-white' : 'bg-background'}`}>
        <div className="container px-4 mx-auto text-center md:text-left">
          <div>
            <h3 className="text-2xl font-display italic mb-2">Six Three Weekender</h3>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${!SHOW_REGISTRATION ? 'text-white/40' : 'text-muted-foreground'}`}>Singapore</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
