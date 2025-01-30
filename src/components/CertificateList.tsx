import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function CertificateList() {
  const { data: certificates, isLoading } = useQuery({
    queryKey: ["certificates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("certificates")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast.success("Certificate deleted successfully");
    } catch (error) {
      toast.error("Error deleting certificate");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Certificates</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Certificate Number</TableHead>
            <TableHead>Holder Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates?.map((cert) => (
            <TableRow key={cert.id}>
              <TableCell>{cert.certificate_number}</TableCell>
              <TableCell>{cert.holder_name}</TableCell>
              <TableCell>{cert.certification_type}</TableCell>
              <TableCell>{cert.status}</TableCell>
              <TableCell className="space-x-2">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleDelete(cert.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}