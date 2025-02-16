
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  ClipboardCheck, 
  GraduationCap, 
  ArrowRight,
  Building2,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO Certifications",
      description: "Comprehensive certification services including ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and IATF 16949:2016.",
      features: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "IATF 16949:2016"]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Audits",
      description: "Expert audit services including VDA Audits and Customer Audits for leading automotive manufacturers.",
      features: ["VDA Audits", "Customer Audits", "Maruti VSA & MACE", "JCB Hydraulic"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training Programs",
      description: "Comprehensive training in behavioral, technical, and management systems.",
      features: ["Core Tools", "Lean Manufacturing", "Six Sigma", "TPM & Kaizen"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Manpower Solutions",
      description: "Placement services across automotive and non-automotive sectors, with over 3500+ successful placements.",
      features: ["Executive Level", "Management Level", "Technical Level", "Supervisory Level"]
    }
  ];

  const achievements = [
    {
      number: "100+",
      text: "Customer Audit Projects"
    },
    {
      number: "88+",
      text: "Green Zone Companies"
    },
    {
      number: "3500+",
      text: "Successful Placements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)",
            opacity: 0.5
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 tracking-tight leading-tight">
            Your Trusted Partner for ISO Certification, Audits, and Manpower Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            We specialize in providing comprehensive consultancy services, training programs, and manpower solutions to enhance your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Get a Free Consultation <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Explore Our Services <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">About Bhumi Consultancy Services</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Based in Faridabad, Haryana, we are dedicated to helping businesses achieve excellence through systematic processes and industry-specific solutions. Founded by Mr. Veer Arjun Upadhyay and Mr. Vinod Kumar Tiwari, we deliver value to clients across India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-primary mb-2">{achievement.number}</span>
                  <span className="text-muted-foreground">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 border-accent hover:border-primary transition-all duration-300 group hover:shadow-lg"
              >
                <CardContent className="pt-8 p-6">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how our services can help you achieve excellence in your industry.
            </p>
            <Button size="lg" className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
