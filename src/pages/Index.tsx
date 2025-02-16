
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Users, Lightbulb, Award, BadgeCheck, CheckCircle } from "lucide-react";
import { CertificateVerification } from "@/components/CertificateVerification";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const { data: activeCertifications, isLoading } = useQuery({
    queryKey: ["active-certifications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .eq("status", "valid")
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) throw error;
      return data;
    },
  });

  const maskCertificateNumber = (number: string) => {
    if (number.length <= 4) return "****";
    return "****" + number.slice(-4);
  };

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

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 tracking-tight">
            Transform Your Business with Expert Tech Consulting
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            We help businesses navigate the digital landscape with strategic technology solutions and expert guidance.
          </p>
          <Button size="lg" className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">About Our Consultancy</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With over a decade of experience in technology consulting, we've helped hundreds of businesses achieve their digital transformation goals. Our team of expert consultants combines deep technical knowledge with strategic business acumen to deliver solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-accent hover:border-primary transition-all duration-300 group hover:shadow-lg">
                <CardContent className="pt-8 p-6">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Verification Section */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Verify Certificate</h2>
          <CertificateVerification />
        </div>
      </section>

      {/* Active Certifications Section */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Active Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {isLoading ? (
              Array(3).fill(null).map((_, index) => (
                <Card 
                  key={index}
                  className="border-2 border-accent hover:border-primary transition-all duration-300"
                >
                  <CardContent className="pt-8">
                    <div className="flex flex-col items-center animate-pulse">
                      <div className="w-12 h-12 bg-primary/10 rounded-full mb-6"></div>
                      <div className="h-8 w-3/4 bg-primary/10 rounded mb-4"></div>
                      <div className="h-6 w-1/2 bg-primary/10 rounded mb-2"></div>
                      <div className="h-6 w-2/3 bg-primary/10 rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : activeCertifications && activeCertifications.length > 0 ? (
              activeCertifications.map((cert, index) => (
                <Card 
                  key={cert.id}
                  className="border-2 border-accent hover:border-primary transition-all duration-300 group hover:shadow-lg"
                >
                  <CardContent className="pt-8">
                    <div className="flex flex-col items-center">
                      <div className="mb-6 relative">
                        <div className="absolute -right-2 -top-2">
                          <CheckCircle className="w-6 h-6 text-green-500 fill-white" />
                        </div>
                        <Award className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-center">
                        {cert.certification_type}
                      </h3>
                      <p className="text-muted-foreground text-center mb-3 font-mono">
                        ID: {maskCertificateNumber(cert.certificate_number)}
                      </p>
                      <div className="px-4 py-2 bg-primary/10 rounded-full">
                        <p className="text-sm text-primary font-medium">
                          Valid until {new Date(cert.expiry_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-3 text-center text-muted-foreground text-lg">
                No active certifications found
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
