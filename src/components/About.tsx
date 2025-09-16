import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const achievements = [
  "Founded by industry veterans with 15+ years experience",
  "Trusted by Fortune 500 companies worldwide",
  "ISO 27001 certified for security excellence",
  "99.9% uptime across all client projects",
  "24/7 dedicated support team"
];

export const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Future of Business
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to empower businesses with innovative technology solutions that drive growth, 
              improve efficiency, and create competitive advantages in today's rapidly evolving marketplace.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
            
            <Button variant="default" size="lg" className="text-lg px-8 py-4">
              Learn About Our Story
            </Button>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-lg font-semibold text-card-foreground mb-2">Years Experience</div>
                <div className="text-muted-foreground">Delivering excellence across diverse industries</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-lg font-semibold text-card-foreground mb-2">Team Members</div>
                <div className="text-muted-foreground">Expert developers, designers, and strategists</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-lg font-semibold text-card-foreground mb-2">Countries Served</div>
                <div className="text-muted-foreground">Global reach with local expertise</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};