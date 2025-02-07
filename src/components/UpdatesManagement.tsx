
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { SearchBar } from "./updates/SearchBar";
import { UpdateForm } from "./updates/UpdateForm";
import { UpdateList } from "./updates/UpdateList";

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

      if (error) {
        toast.error("Failed to load updates");
        throw error;
      }
      return data;
    },
  });

  const createUpdateMutation = useMutation({
    mutationFn: async (newUpdate: {
      title: string;
      content: string;
      status: string;
    }) => {
      const { data, error } = await supabase
        .from("updates")
        .insert([{ ...newUpdate, published_at: new Date().toISOString() }]);
      
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
    mutationFn: async (update: {
      id: string;
      title: string;
      content: string;
      status: string;
    }) => {
      const { error } = await supabase
        .from("updates")
        .update({
          title: update.title,
          content: update.content,
          status: update.status,
          updated_at: new Date().toISOString(),
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
        id: currentUpdate.id,
        title: newUpdate.title,
        content: newUpdate.content,
        status: newUpdate.status,
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

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-pulse text-lg text-muted-foreground">
        Loading updates...
      </div>
    </div>;
  }

  return (
    <div className="space-y-8">
      <UpdateForm
        isEditing={isEditing}
        update={newUpdate}
        onUpdateChange={setNewUpdate}
        onSubmit={handleSubmit}
        onCancel={() => {
          setIsEditing(false);
          setCurrentUpdate(null);
          setNewUpdate({ title: "", content: "", status: "published" });
        }}
      />

      <div className="mb-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <UpdateList
        updates={filteredUpdates}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UpdatesManagement;
