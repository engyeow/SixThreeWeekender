import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { Badge } from "./badge";
import { Ban, DollarSign, ShieldAlert } from "lucide-react";

export default function TournamentRules() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <span className="section-label">Regulations</span>
            <h2 className="text-4xl font-display italic mb-6 leading-tight">Rules & <br />Compliance</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Players are expected to conduct themselves with respectful and sportsmanlike behavior at all times.
            </p>
          </div>

          <div className="md:col-span-2">
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="draw-rules" className="border-b border-border">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <Ban className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold uppercase tracking-widest">Draw Rules</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6">
                  Players are not permitted to agree to a draw before Black’s 10th move. This rule is strictly enforced to encourage competitive play.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="entry-fee" className="border-b border-border">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <DollarSign className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold uppercase tracking-widest">Entry Fees</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white border border-border">
                    <span className="text-sm font-display italic">FIDE Standard Rated Players</span>
                    <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/10 rounded-none border-accent/20 font-bold">FREE</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-border">
                    <span className="text-sm font-display italic">Unrated Players</span>
                    <span className="text-sm font-bold">S$10.00</span>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="conduct" className="border-b border-border">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <ShieldAlert className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold uppercase tracking-widest">Conduct & Penalties</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 space-y-6 text-sm text-muted-foreground">
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <span className="text-accent font-bold">—</span>
                      <p><span className="font-bold text-foreground uppercase text-[10px] tracking-widest block mb-1">Withdrawal</span> Deadline is 48 hours before the first round. Late withdrawal incurs a fine of up to <span className="text-foreground font-bold">S$100</span>.</p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-accent font-bold">—</span>
                      <p><span className="font-bold text-foreground uppercase text-[10px] tracking-widest block mb-1">Forfeiture</span> Players must play all games. Rescheduling is possible by mutual agreement. Unplayed games incur a fine of up to <span className="text-foreground font-bold">S$100</span>.</p>
                    </div>
                  </div>
                  
                  <p className="text-[11px] italic pt-4 border-t border-border/50">Fines may be waived in extenuating circumstances of illness or bereavement.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
