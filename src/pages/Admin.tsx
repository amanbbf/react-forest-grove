
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminDashboard } from "@/components/AdminDashboard";
import { supabase } from "@/integrations/supabase/client";
import MainNav from "@/components/MainNav";

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
    <>
      <MainNav />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <SidebarProvider defaultOpen>
          <AdminDashboard />
        </SidebarProvider>
      </div>
    </>
  );
}
