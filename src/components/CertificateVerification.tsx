import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Shield, ShieldCheck, ShieldX, Download } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  certificateNumber: z.string().min(4, "Please enter at least 4 digits"),
  holderName: z.string().min(2, "Name must be at least 2 characters"),
});

type Certificate = {
  certificate_number: string;
  holder_name: string;
  issue_date: string;
  expiry_date: string;
  certification_type: string;
  status: string;
  description: string | null;
  file_url: string | null;
};

export function CertificateVerification() {
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      certificateNumber: "",
      holderName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("certificates")
        .select()
        .ilike("certificate_number", `%${values.certificateNumber}`)
        .ilike("holder_name", `%${values.holderName}`)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setCertificate(data as Certificate);
        toast.success("Certificate found!");
      } else {
        toast.error("No matching certificate found");
        setCertificate(null);
      }
    } catch (error) {
      toast.error("Error verifying certificate");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDownload = async (fileUrl: string) => {
    try {
      // Extract the file path from the public URL
      const filePath = fileUrl.split('/certificates/').pop();
      
      if (!filePath) {
        throw new Error('Invalid file URL');
      }

      const { data, error } = await supabase.storage
        .from('certificates')
        .download(filePath);
      
      if (error) throw error;
      
      // Create a download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = filePath.split('/').pop() || 'certificate';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success('Certificate downloaded successfully');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Error downloading certificate');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            Certificate Verification
          </CardTitle>
          <CardDescription>
            Verify the authenticity of a certificate by entering the certificate number and holder name
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="certificateNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Certificate Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter certificate number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="holderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Holder Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter certificate holder name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify Certificate"}
              </Button>
            </form>
          </Form>

          {certificate && (
            <div className="mt-6 p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                {certificate.status === "valid" ? (
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                ) : (
                  <ShieldX className="h-6 w-6 text-red-500" />
                )}
                <h3 className="text-lg font-semibold">
                  Certificate {certificate.status === "valid" ? "Valid" : "Invalid"}
                </h3>
              </div>
              <dl className="space-y-2">
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium">Certificate Number:</dt>
                  <dd className="col-span-2">{certificate.certificate_number}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium">Holder Name:</dt>
                  <dd className="col-span-2">{certificate.holder_name}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium">Type:</dt>
                  <dd className="col-span-2">{certificate.certification_type}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium">Issue Date:</dt>
                  <dd className="col-span-2">{new Date(certificate.issue_date).toLocaleDateString()}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <dt className="font-medium">Expiry Date:</dt>
                  <dd className="col-span-2">{new Date(certificate.expiry_date).toLocaleDateString()}</dd>
                </div>
                {certificate.description && (
                  <div className="grid grid-cols-3 gap-4">
                    <dt className="font-medium">Description:</dt>
                    <dd className="col-span-2">{certificate.description}</dd>
                  </div>
                )}
                {certificate.file_url && (
                  <div className="grid grid-cols-3 gap-4">
                    <dt className="font-medium">Certificate File:</dt>
                    <dd className="col-span-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => handleDownload(certificate.file_url!)}
                      >
                        <Download className="h-4 w-4" />
                        Download Certificate
                      </Button>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}