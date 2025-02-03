import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { CertificateList } from "./CertificateList";
import { CertificateForm } from "./CertificateForm";
import { Settings } from "./Settings";
import UpdatesManagement from "./UpdatesManagement";

type ViewType = "viewAll" | "add" | "settings" | "updates" | "edit";

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState<ViewType>("viewAll");
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

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
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AdminSidebar onActionSelect={handleViewChange} currentView={currentView} />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 min-h-screen">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}