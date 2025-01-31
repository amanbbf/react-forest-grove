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

const Updates = () => {
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
        <h1 className="text-4xl font-bold text-center mb-12">Latest Updates</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {updates?.map((update) => (
              <Card key={update.id} className="h-full">
                <CardHeader>
                  <CardTitle>{update.title}</CardTitle>
                  <CardDescription>
                    {new Date(update.published_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {update.content}
                  </p>
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