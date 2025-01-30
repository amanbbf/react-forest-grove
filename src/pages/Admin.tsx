import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminDashboard } from "@/components/AdminDashboard";
import { supabase } from "@/integrations/supabase/client";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <AdminDashboard />
      </div>
    </SidebarProvider>
  );
}