
import { useState } from "react";
import { Menu } from "lucide-react";
import { AdminSidebar } from "./AdminSidebar";
import { CertificateList } from "./CertificateList";
import { CertificateForm } from "./CertificateForm";
import { Settings } from "./Settings";
import UpdatesManagement from "./UpdatesManagement";
import SocialMediaManagement from "./SocialMediaManagement";
import { Button } from "./ui/button";

type ViewType = "viewAll" | "add" | "settings" | "updates" | "edit" | "social";

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState<ViewType>("viewAll");
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case "add":
        return <CertificateForm />;
      case "edit":
        return <CertificateForm certificate={selectedCertificate} />;
      case "settings":
        return <Settings />;
      case "updates":
        return <UpdatesManagement />;
      case "social":
        return <SocialMediaManagement />;
      default:
        return <CertificateList onEdit={(cert) => {
          setSelectedCertificate(cert);
          setCurrentView("edit");
        }} />;
    }
  };

  const handleViewChange = (action: string) => {
    if (action === "viewAll") {
      setSelectedCertificate(null);
    }
    setCurrentView(action as ViewType);
    setSidebarOpen(false); // Close sidebar after selection on mobile
  };

  return (
    <div className="flex min-h-screen w-full bg-background relative">
      <div className={`transition-transform duration-300 ease-in-out absolute md:relative z-30 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <AdminSidebar onActionSelect={handleViewChange} currentView={currentView} />
      </div>
      
      {/* Floating Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 left-4 z-40 rounded-full shadow-lg md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 min-h-screen">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
