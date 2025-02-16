
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
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO Certifications",
      description: "Expert guidance and support for obtaining key ISO certifications that enhance your business credibility.",
      features: [
        "ISO 9001:2015 - Quality Management",
        "ISO 14001:2015 - Environmental Management",
        "ISO 45001:2018 - Occupational Health & Safety",
        "IATF 16949:2016 - Automotive Quality Management"
      ]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Audits",
      description: "Comprehensive audit services for automotive and manufacturing sectors.",
      features: [
        "VDA Audits (SCANIA, AMG, VOLKSWAGEN, NAVISTAR)",
        "Maruti VSA & MACE Audit",
        "JCB Hydraulic Cleanliness Audit",
        "Internal Quality Audits"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training Programs",
      description: "Industry-focused training programs delivered by experienced professionals.",
      features: [
        "Core Tools (APQP, PPAP, FMEA, MSA, SPC)",
        "Lean Manufacturing & Six Sigma",
        "TPM & Kaizen Implementation",
        "Behavioral & Technical Training"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Manpower Solutions",
      description: "Expert placement services across various organizational levels with over 3500+ successful placements in 2021-22.",
      features: [
        "L1: CEO & MD Level",
        "L2: VP, AVP, GM Level",
        "L3: DGM, AGM, Sr. Manager",
        "L4 & L5: Engineers & Supervisors"
      ]
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

  const clients = [
    "M/s S.M. Industries, Greater Noida",
    "M/s Mastercraft Engineers Pvt. Ltd., Bangalore",
    "M/s Ganeshraj, Faridabad",
    "M/s Venus Stamping, Faridabad",
    "M/s Samtech Industries, Faridabad",
    "M/s CICO Technologies, Gurgaon & Haridwar",
    "M/s Supertech, Faridabad",
    "M/s Mag Filters & Equipments Pvt. Ltd.",
    "M/s Wounder, Faridabad"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91-7827284027, +91-8700761218"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "bcs04062013@gmail.com, varjunupadhyay@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "Above Rajdhani Jobs Corner, Near Auto Stand Sohna Railway Ballabhgarh, Faridabad (HR)-121005"
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
            Empowering Businesses with Expert Consultancy and Training Solutions
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
              Based in Faridabad, Haryana, we are dedicated to helping businesses achieve excellence through systematic processes and industry-specific solutions. Founded by Mr. Veer Arjun Upadhyay (Managing Director) and Mr. Vinod Kumar Tiwari (CEO), we deliver value to clients across India through our expert team including Mr. B.S. Negi (Relationship Manager), Mr. Amit (Account Manager), Mr. Shrikant (Marketing Manager), Mr. Lokesh (HR & Admin Manager), and Mr. Prashant (Legal Compliance Manager).
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

      {/* Clients Section */}
      <section className="py-24 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Our Clients</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border-2 border-accent hover:border-primary transition-all">
                <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 border-accent">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.details}</p>
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
