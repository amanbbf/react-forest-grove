
import MainNav from "@/components/MainNav";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Updates = () => {
  const navigate = useNavigate();
  
  const { data: updates, isLoading } = useQuery({
    queryKey: ["public-updates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <MainNav />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Latest Updates
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay informed about our latest news, announcements, and developments
              </p>
            </div>
          </div>
        </section>

        {/* Updates Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array(6).fill(null).map((_, i) => (
                  <Card key={i} className="flex flex-col h-full">
                    <CardHeader className="animate-pulse">
                      <div className="h-6 w-3/4 bg-primary/10 rounded mb-2"></div>
                      <div className="h-4 w-1/4 bg-primary/10 rounded"></div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <div className="space-y-2 animate-pulse">
                        <div className="h-4 w-full bg-primary/10 rounded"></div>
                        <div className="h-4 w-full bg-primary/10 rounded"></div>
                        <div className="h-4 w-2/3 bg-primary/10 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {updates?.map((update) => (
                  <Card 
                    key={update.id} 
                    className="flex flex-col h-full border-2 border-accent hover:border-primary transition-all duration-300 group hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="space-y-2">
                        <CardTitle className="line-clamp-2 hover:line-clamp-none transition-all text-2xl">
                          {update.title}
                        </CardTitle>
                        <CardDescription>
                          {format(new Date(update.published_at), "MMMM dd, yyyy")}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <div 
                        className="prose prose-sm max-w-none mb-6 line-clamp-3 text-muted-foreground"
                        dangerouslySetInnerHTML={{ 
                          __html: update.content.substring(0, 200) + "..."
                        }}
                      />
                      <Button 
                        variant="outline" 
                        className="mt-auto w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={() => navigate(`/updates/${update.id}`)}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Updates;
