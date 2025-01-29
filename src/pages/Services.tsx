import MainNav from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Lightbulb, Building, ChartBar, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "Technical Consulting",
      description: "Expert guidance on software architecture, tech stack selection, and best practices implementation. Our seasoned consultants help you make informed technology decisions.",
      features: ["Architecture Review", "Tech Stack Optimization", "Best Practices Implementation"]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Team Augmentation",
      description: "Scale your development team with skilled professionals who seamlessly integrate into your existing workflow. Get the expertise you need, when you need it.",
      features: ["Senior Developers", "Technical Leads", "Project Managers"]
    },
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: "Enterprise Solutions",
      description: "Custom enterprise-grade solutions designed to streamline your business operations and drive digital transformation across your organization.",
      features: ["Digital Transformation", "Legacy System Modernization", "Cloud Migration"]
    },
    {
      icon: <ChartBar className="w-12 h-12 text-primary" />,
      title: "Performance Optimization",
      description: "Comprehensive analysis and optimization of your systems to enhance performance, scalability, and user experience.",
      features: ["System Analysis", "Performance Tuning", "Scalability Planning"]
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Innovation Lab",
      description: "Stay ahead of the curve with our innovation lab services. We help you explore and implement cutting-edge technologies and methodologies.",
      features: ["Emerging Tech Research", "Proof of Concepts", "Innovation Workshops"]
    },
    {
      icon: <Cog className="w-12 h-12 text-primary" />,
      title: "DevOps Implementation",
      description: "Streamline your development and operations with modern DevOps practices. Improve deployment efficiency and reduce time-to-market.",
      features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Monitoring Solutions"]
    }
  ];

  return (
    <>
      <MainNav />
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;