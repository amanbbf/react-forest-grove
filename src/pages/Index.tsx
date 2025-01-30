import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Users, Lightbulb, Award, BadgeCheck } from "lucide-react";
import { CertificateVerification } from "@/components/CertificateVerification";

const Index = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Consulting",
      description: "Expert guidance on software architecture, tech stack selection, and best practices implementation."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Augmentation",
      description: "Skilled developers and technical leads ready to join your team and accelerate project delivery."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Digital Innovation",
      description: "Transform your business with cutting-edge technology solutions and digital strategy consulting."
    }
  ];

  const certifications = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      name: "ISO 27001 Certified",
      description: "Information Security Management System certification ensuring highest security standards."
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-primary" />,
      name: "AWS Advanced Consulting Partner",
      description: "Recognized expertise in AWS cloud solutions and implementations."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      name: "Microsoft Gold Partner",
      description: "Elite partnership status for Microsoft technology solutions and services."
    }
  ];

  return (
    <>
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Transform Your Business with Expert Tech Consulting
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
            We help businesses navigate the digital landscape with strategic technology solutions and expert guidance.
          </p>
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Our Consultancy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over a decade of experience in technology consulting, we've helped hundreds of businesses achieve their digital transformation goals. Our team of expert consultants combines deep technical knowledge with strategic business acumen to deliver solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-accent hover:border-primary transition-colors duration-300">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Verification Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Verify Certificate</h2>
          <CertificateVerification />
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Active Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="border-2 border-accent hover:border-primary transition-colors duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{cert.name}</h3>
                    <p className="text-muted-foreground text-center">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
