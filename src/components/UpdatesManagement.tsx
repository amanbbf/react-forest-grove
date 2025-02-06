import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "./RichTextEditor";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Pencil, Trash2, Search } from "lucide-react";

interface Update {
  id: string;
  title: string;
  content: string;
  status: string;
  published_at: string;
}

const UpdatesManagement = () => {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [currentUpdate, setCurrentUpdate] = useState<Update | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newUpdate, setNewUpdate] = useState({
    title: "",
    content: "",
    status: "published",
  });

  const { data: updates, isLoading } = useQuery({
    queryKey: ["updates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const createUpdateMutation = useMutation({
    mutationFn: async (newUpdate: {
      title: string;
      content: string;
      status: string;
    }) => {
      const { data, error } = await supabase.from("updates").insert([newUpdate]);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["updates"] });
      setNewUpdate({ title: "", content: "", status: "published" });
      toast.success("Update created successfully!");
    },
    onError: (error) => {
      toast.error("Failed to create update: " + error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (update: Update) => {
      const { error } = await supabase
        .from("updates")
        .update({
          title: update.title,
          content: update.content,
          status: update.status,
        })
        .eq("id", update.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["updates"] });
      setIsEditing(false);
      setCurrentUpdate(null);
      setNewUpdate({ title: "", content: "", status: "published" });
      toast.success("Update modified successfully!");
    },
    onError: (error) => {
      toast.error("Failed to modify update: " + error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("updates").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["updates"] });
      toast.success("Update deleted successfully!");
    },
    onError: (error) => {
      toast.error("Failed to delete update: " + error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && currentUpdate) {
      updateMutation.mutate({
        ...currentUpdate,
        title: newUpdate.title,
        content: newUpdate.content,
      });
    } else {
      createUpdateMutation.mutate(newUpdate);
    }
  };

  const handleEdit = (update: Update) => {
    setIsEditing(true);
    setCurrentUpdate(update);
    setNewUpdate({
      title: update.title,
      content: update.content,
      status: update.status,
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this update?")) {
      deleteMutation.mutate(id);
    }
  };

  const filteredUpdates = updates?.filter((update) =>
    update.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>
            {isEditing ? "Edit Update" : "Create New Update"}
          </CardTitle>
          <CardDescription>
            {isEditing
              ? "Modify the existing update"
              : "Add a new update to share with users"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Update Title"
                value={newUpdate.title}
                onChange={(e) =>
                  setNewUpdate({ ...newUpdate, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <RichTextEditor
                content={newUpdate.content}
                onChange={(content) =>
                  setNewUpdate({ ...newUpdate, content: content })
                }
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">
                {isEditing ? "Save Changes" : "Create Update"}
              </Button>
              {isEditing && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setCurrentUpdate(null);
                    setNewUpdate({ title: "", content: "", status: "published" });
                  }}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search updates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredUpdates?.map((update: Update) => (
          <Card key={update.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{update.title}</CardTitle>
                  <CardDescription>
                    {new Date(update.published_at).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(update)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(update.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="prose max-w-none text-sm text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: update.content }}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpdatesManagement;