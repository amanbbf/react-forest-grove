
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Expert guidance on software architecture, tech stack selection, and best practices implementation.",
      features: ["Architecture Design", "Technology Assessment", "Best Practices", "Code Reviews"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Augmentation",
      description: "Skilled developers and technical leads ready to join your team and accelerate project delivery.",
      features: ["Senior Developers", "Technical Leads", "Project Managers", "Agile Coaches"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Digital Innovation",
      description: "Transform your business with cutting-edge technology solutions and digital strategy consulting.",
      features: ["Digital Strategy", "Innovation Workshops", "Emerging Tech", "Process Automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Unlock your business potential with our comprehensive technology consulting services.
              We deliver innovative solutions tailored to your unique challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
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
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Button size="lg" className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
