import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  certificate_number: z.string().min(1, "Certificate number is required"),
  holder_name: z.string().min(1, "Holder name is required"),
  certification_type: z.string().min(1, "Certification type is required"),
  expiry_date: z.string().min(1, "Expiry date is required"),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function CertificateForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      certificate_number: "",
      holder_name: "",
      certification_type: "",
      expiry_date: "",
      description: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const { error } = await supabase.from("certificates").insert({
        certificate_number: values.certificate_number,
        holder_name: values.holder_name,
        certification_type: values.certification_type,
        expiry_date: values.expiry_date,
        description: values.description || null,
      });

      if (error) throw error;
      toast.success("Certificate added successfully");
      form.reset();
    } catch (error) {
      toast.error("Error adding certificate");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Add New Certificate</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="certificate_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Certificate Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="holder_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Holder Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="certification_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Certification Type</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expiry_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expiry Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add Certificate</Button>
        </form>
      </Form>
    </div>
  );
}