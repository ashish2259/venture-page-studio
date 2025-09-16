import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">FUSIONNEX INNOVATIONS</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Consulting</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-muted-foreground mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@fusionnex.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3">Subscribe to Newsletter</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button variant="default" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 FUSIONNEX INNOVATIONS INDIA PVT LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};