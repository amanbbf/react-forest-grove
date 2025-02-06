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
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Latest Updates</h1>
          <p className="text-lg text-muted-foreground">
            Stay informed about our latest news, announcements, and developments
          </p>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-pulse text-lg text-muted-foreground">
              Loading updates...
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {updates?.map((update) => (
              <Card key={update.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="line-clamp-2 hover:line-clamp-none transition-all">
                      {update.title}
                    </CardTitle>
                    <CardDescription>
                      {format(new Date(update.published_at), "MMMM dd, yyyy")}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div 
                    className="prose prose-sm max-w-none mb-4 line-clamp-3 text-muted-foreground"
                    dangerouslySetInnerHTML={{ 
                      __html: update.content.substring(0, 200) + "..."
                    }}
                  />
                  <Button 
                    variant="outline" 
                    className="mt-auto w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => navigate(`/updates/${update.id}`)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Updates;