import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Shield, Zap, Users, Target, Trophy } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "Cutting-edge technologies and forward-thinking solutions that keep you ahead of the competition."
  },
  {
    icon: Shield,
    title: "Enterprise Security", 
    description: "Bank-level security protocols and data protection to keep your business safe and compliant."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance and rapid deployment to get your solutions to market quickly."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with deep industry expertise and proven track records."
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "Data-driven strategies and measurable outcomes that directly impact your bottom line."
  },
  {
    icon: Trophy,
    title: "Award Winning",
    description: "Recognized excellence in design, development, and customer satisfaction across industries."
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that not only work but transform your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-smooth group cursor-pointer"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};