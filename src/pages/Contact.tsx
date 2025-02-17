
import { useState, useEffect } from "react";
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Twitter,
  Linkedin,
  MessageCircle,
  Send,
  MessageSquare,
  Youtube
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type SocialMediaLink = {
  platform: string;
  url: string;
  icon: string;
  display_order: number;
};

// Map platform names to their corresponding icons
const platformIcons = {
  Twitter: Twitter,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  Telegram: Send,
  Discord: MessageSquare,
  YouTube: Youtube
};

const Contact = () => {
  const [showAllLinks, setShowAllLinks] = useState(false);
  const [socialLinks, setSocialLinks] = useState<SocialMediaLink[]>([]);

  useEffect(() => {
    fetchSocialLinks();
  }, []);

  const fetchSocialLinks = async () => {
    try {
      const { data, error } = await supabase
        .from('social_media_links')
        .select('*')
        .eq('is_visible', true)
        .order('display_order');
      
      if (error) throw error;
      setSocialLinks(data || []);
    } catch (error) {
      console.error('Error fetching social links:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@company.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "123 Business Ave, Tech City, TC 12345"
    }
  ];

  const displayedLinks = showAllLinks ? socialLinks : socialLinks.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <MainNav />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our services? We're here to help.
              Reach out to us using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 border-accent hover:border-primary transition-all duration-300 group hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4 group-hover:bg-primary/20 transition-colors">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">Connect With Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {displayedLinks.map((link) => {
                const Icon = platformIcons[link.platform as keyof typeof platformIcons];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border-2 border-accent hover:border-primary transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="rounded-full bg-primary/10 p-2">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>
                    <span className="font-medium">{link.platform}</span>
                  </a>
                );
              })}
            </div>
            {socialLinks.length > 3 && (
              <Button
                variant="outline"
                className="mx-auto flex items-center gap-2"
                onClick={() => setShowAllLinks(!showAllLinks)}
              >
                {showAllLinks ? (
                  <>Show Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Show More <ChevronDown className="w-4 h-4" /></>
                )}
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
