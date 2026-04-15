import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { LayoutGrid, Users, Timer } from "lucide-react";

export default function TournamentDetails() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="mb-16 border-b border-border pb-8">
          <span className="section-label">Tournament</span>
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
                title="Structure" 
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
            <Tabs defaultValue="day1" className="w-full">
              <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                <h3 className="text-2xl font-display italic">Event Timeline</h3>
                <TabsList className="bg-transparent h-auto p-0 gap-8">
                  <TabsTrigger value="day1" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-accent data-[state=active]:underline underline-offset-8 rounded-none px-0 font-bold uppercase tracking-widest text-[10px]">18 April</TabsTrigger>
                  <TabsTrigger value="day2" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-accent data-[state=active]:underline underline-offset-8 rounded-none px-0 font-bold uppercase tracking-widest text-[10px]">19 April</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="day1" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="shadow-none border-border bg-white rounded-none">
                    <CardHeader className="border-b border-border/50 pb-4">
                      <CardTitle className="text-lg font-display italic">Morning</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Table>
                        <TableBody>
                          <ScheduleRow round="1" time="08:30 AM" />
                          <ScheduleRow round="2" time="10:45 AM" />
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  <Card className="shadow-none border-border bg-white rounded-none">
                    <CardHeader className="border-b border-border/50 pb-4">
                      <CardTitle className="text-lg font-display italic">Afternoon</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Table>
                        <TableBody>
                          <ScheduleRow round="3" time="01:30 PM" />
                          <ScheduleRow round="4" time="03:45 PM" />
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  <Card className="shadow-none border-border bg-white rounded-none">
                    <CardHeader className="border-b border-border/50 pb-4">
                      <CardTitle className="text-lg font-display italic">Evening</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Table>
                        <TableBody>
                          <ScheduleRow round="5" time="06:30 PM" />
                          <ScheduleRow round="6" time="08:45 PM" />
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="day2" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-none border-border bg-white rounded-none">
                    <CardHeader className="border-b border-border/50 pb-4">
                      <CardTitle className="text-lg font-display italic">Morning</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Table>
                        <TableBody>
                          <ScheduleRow round="7" time="09:00 AM" />
                          <ScheduleRow round="8" time="11:15 AM" />
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  <Card className="shadow-none border-border bg-white rounded-none">
                    <CardHeader className="border-b border-border/50 pb-4">
                      <CardTitle className="text-lg font-display italic">Afternoon</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Table>
                        <TableBody>
                          <ScheduleRow round="9" time="02:00 PM" />
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
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
    <TableRow className="hover:bg-transparent border-b border-border/30">
      <TableCell className="py-3 pl-0 font-bold text-xs uppercase tracking-wider">Round {round}</TableCell>
      <TableCell className="py-3 pr-0 text-right">
        <span className="font-mono text-xs text-muted-foreground">{time}</span>
      </TableCell>
    </TableRow>
  );
}
