import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";

const UpdateView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: update, isLoading } = useQuery({
    queryKey: ["update", id],
    queryFn: async () => {
      if (!id) throw new Error("Update ID is required");
      
      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .eq("id", id)
        .eq("status", "published")
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id, // Only run the query if we have an ID
  });

  return (
    <>
      <MainNav />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Button
          variant="ghost"
          className="mb-8 group"
          onClick={() => navigate("/updates")}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Updates
        </Button>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-pulse text-lg text-muted-foreground">
              Loading update...
            </div>
          </div>
        ) : update ? (
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">{update.title}</h1>
            <p className="text-muted-foreground mb-8">
              Published on {format(new Date(update.published_at), "MMMM dd, yyyy")}
            </p>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: update.content }}
            />
          </article>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Update not found</h2>
            <p className="text-muted-foreground">
              The update you're looking for doesn't exist or has been removed.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateView;