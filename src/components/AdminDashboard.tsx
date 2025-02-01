import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { CertificateList } from "./CertificateList";
import { CertificateForm } from "./CertificateForm";
import { Settings } from "./Settings";
import UpdatesManagement from "./UpdatesManagement";

type ViewType = "viewAll" | "add" | "settings" | "updates";

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState<ViewType>("viewAll");

  const renderContent = () => {
    switch (currentView) {
      case "add":
        return <CertificateForm />;
      case "settings":
        return <Settings />;
      case "updates":
        return <UpdatesManagement />;
      default:
        return <CertificateList />;
    }
  };

  const handleViewChange = (action: string) => {
    setCurrentView(action as ViewType);
  };

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar onActionSelect={handleViewChange} currentView={currentView} />
      <main className="flex-1 p-6">
        <div className="container mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}