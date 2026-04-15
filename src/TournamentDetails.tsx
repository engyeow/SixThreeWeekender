import React from "react";
import { LayoutGrid, Users, Timer } from "lucide-react";

export default function TournamentDetails() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="mb-16 border-b border-border pb-8">
          <span className="section-label">Edition</span>
          <h2 className="text-5xl font-display italic">1. Six Three Weekender</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <div>
              <span className="section-label">Tournament Format</span>
              <h3 className="text-3xl font-display italic mb-6">Classical Round-Robin</h3>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">—</span>
                  10 Players, 9 Rounds of Play
                </li>
                <li className="flex flex-col gap-1">
                  <div className="flex items-start gap-3">
                    <span className="text-accent font-bold">—</span>
                    50 minutes for the whole game
                  </div>
                  <div className="flex items-start gap-3 pl-6">
                    10 seconds increment per move, starting from move 1
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">—</span>
                  Draws permitted only after Black's 10th move
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">—</span>
                  FIDE Standard Rated event
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <InfoItem 
                icon={<LayoutGrid className="w-4 h-4" />} 
                title="Format" 
                description="Round-Robin" 
              />
              <InfoItem 
                icon={<Users className="w-4 h-4" />} 
                title="Roster" 
                description="10 Players" 
              />
              <InfoItem 
                icon={<Timer className="w-4 h-4" />} 
                title="Time Control" 
                description="50 minutes + 10 seconds" 
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <span className="section-label">Playing Schedule</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="mb-8 border-b border-border pb-4">
                  <h3 className="text-2xl font-display italic">Saturday, 18 April</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Day One</p>
                </div>
                <div className="divide-y divide-border/30">
                  <ScheduleRow round="1" time="08:30 AM" />
                  <ScheduleRow round="2" time="10:45 AM" />
                  <ScheduleRow round="3" time="01:30 PM" />
                  <ScheduleRow round="4" time="03:45 PM" />
                  <ScheduleRow round="5" time="06:30 PM" />
                  <ScheduleRow round="6" time="08:45 PM" />
                </div>
              </div>
              <div>
                <div className="mb-8 border-b border-border pb-4">
                  <h3 className="text-2xl font-display italic">Sunday, 19 April</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Day Two</p>
                </div>
                <div className="divide-y divide-border/30">
                  <ScheduleRow round="7" time="09:00 AM" />
                  <ScheduleRow round="8" time="11:15 AM" />
                  <ScheduleRow round="9" time="02:00 PM" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-border/50">
      <div className="text-accent">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">{title}</span>
        <span className="text-sm font-display italic">{description}</span>
      </div>
    </div>
  );
}

function ScheduleRow({ round, time }: { round: string, time: string }) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent w-6">R{round}</span>
        <span className="text-sm font-medium">Round {round}</span>
      </div>
      <span className="font-mono text-xs text-muted-foreground">{time}</span>
    </div>
  );
}
