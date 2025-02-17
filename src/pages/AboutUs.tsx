
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

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
      
      {/* About Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              About Bhumi Consultancy Services
            </h1>
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
            <Button 
              size="lg" 
              className="gap-2 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate('/contact')}
            >
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
