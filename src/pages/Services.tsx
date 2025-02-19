
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  ClipboardCheck, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Briefcase,
  Trophy
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const coreServices = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO Certifications",
      description: "Comprehensive certification services for quality, environmental, and safety management systems.",
      features: [
        "ISO 9001:2015 (Quality Management)",
        "ISO 14001:2015 (Environmental Management)",
        "ISO 45001:2018 (Occupational Health & Safety)",
        "IATF 16949:2016 (Automotive Quality Management)"
      ]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Customer Audits & Visits",
      description: "Expert audit services for leading automotive manufacturers and technical assessments.",
      features: [
        "Maruti Suzuki VSA & MACE Audits",
        "JCB NSA & Hydraulic Cleanliness Audit",
        "Technical Audits (PSA, QAV)",
        "VDA Audits (Scania, AMG, Volkswagen)"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training Programs",
      description: "Comprehensive training in behavioral, technical, and management systems.",
      features: [
        "Systems Training (IATF, ISO)",
        "Basic Training (7QC Tools, 5S)",
        "Conceptual Training (TQM, Lean)",
        "Technical Training (GD&T, Six Sigma)"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Manpower Consultancy",
      description: "Expert placement services across various levels and industries.",
      features: [
        "L1-L2: CEO, MD, VP, GM",
        "L3: DGM, AGM, Senior Manager",
        "L4: Manager, Deputy Manager",
        "L5: Engineers, Executives, Supervisors"
      ]
    }
  ];

  const specializedTraining = [
    {
      title: "Systems Training",
      items: ["IATF 16949:2016", "ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "VDA 6.3 Process Audit"]
    },
    {
      title: "Basic Training",
      items: ["7QC Tools", "5S, 3G, 3M", "POKA YOKE", "Kaizen & OEE"]
    },
    {
      title: "Conceptual Training",
      items: ["TQM (Total Quality Management)", "Lean Manufacturing", "Kanban", "Problem-Solving Tools"]
    },
    {
      title: "Technical Training",
      items: ["GD&T", "Six Sigma", "Core Tools (APQP, PPAP, FMEA)", "COPQ"]
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "100+",
      description: "Customer Audit Projects"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "88+",
      description: "Green Zone Companies"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "3500+",
      description: "Successful Placements"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Comprehensive consultancy solutions tailored to elevate your business performance through systematic processes and industry-specific expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreServices.map((service, index) => (
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

      {/* Specialized Training */}
      <section className="py-24 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Specialized Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {specializedTraining.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                  <ul className="space-y-2">
                    {program.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Our Services?</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-primary mt-1" />
                    <p className="text-muted-foreground">Expertise in handling complex audits and certifications with proven success rates</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-primary mt-1" />
                    <p className="text-muted-foreground">Guidance from experienced professionals with decades of industry experience</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-primary mt-1" />
                    <p className="text-muted-foreground">Practical, base-level training methodology ensuring better understanding and improvements</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-primary mt-1" />
                    <p className="text-muted-foreground">Track record of successful placement of over 3500+ candidates across various industries</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Button 
              size="lg" 
              className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate('/contact')}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
