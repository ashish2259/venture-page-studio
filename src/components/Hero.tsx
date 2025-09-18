import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/30 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/40 rounded-full blur-lg animate-glow" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your{" "}
          <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent animate-glow">
            Business Vision
          </span>{" "}
          Into Reality
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          We build cutting-edge solutions that drive growth, enhance efficiency, and deliver exceptional user experiences for forward-thinking companies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => window.location.href = 'mailto:contact@fusionnexinnovations.com?subject=Get Started - Project Inquiry'}
          >
            Get Started Today
          </Button>
          <Button 
            variant="hero-outline" 
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => window.location.href = '/services'}
          >
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-white/80">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-white/80">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};