import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and drive growth.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&auto=format",
    features: ["Full-stack development", "API integration", "Legacy system modernization"],
    price: "Starting from $5,000"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&auto=format",
    features: ["iOS & Android apps", "React Native", "Flutter development"],
    price: "Starting from $8,000"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop&auto=format",
    features: ["Responsive design", "E-commerce solutions", "Progressive web apps"],
    price: "Starting from $3,000"
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform your data into actionable insights with our advanced analytics solutions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format",
    features: ["Data visualization", "Predictive analytics", "Real-time dashboards"],
    price: "Starting from $6,000"
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services to protect your digital assets and ensure compliance.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop&auto=format",
    features: ["Security audits", "Penetration testing", "Compliance consulting"],
    price: "Starting from $4,500"
  },
  {
    icon: Zap,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes and gain competitive advantages.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&auto=format",
    features: ["Machine learning models", "Natural language processing", "Computer vision"],
    price: "Starting from $10,000"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions to transform your business and drive innovation. 
            From custom software development to AI implementation, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group bg-gradient-card border-border shadow-card hover:shadow-elegant transition-smooth cursor-pointer overflow-hidden hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = 'mailto:contact@fusionnexinnovations.com?subject=Free Consultation Request'}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;