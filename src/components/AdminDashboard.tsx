import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { CertificateList } from "./CertificateList";
import { CertificateForm } from "./CertificateForm";
import { Settings } from "./Settings";
import UpdatesManagement from "./UpdatesManagement";

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState<"viewAll" | "add" | "settings" | "updates">("viewAll");

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

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar onActionSelect={setCurrentView} currentView={currentView} />
      <main className="flex-1 p-6">
        <div className="container mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}