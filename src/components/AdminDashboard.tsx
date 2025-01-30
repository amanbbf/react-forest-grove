import { useState } from "react";
import { CertificateList } from "./CertificateList";
import { CertificateForm } from "./CertificateForm";
import { Settings } from "./Settings";

export function AdminDashboard() {
  const [currentView, setCurrentView] = useState<"viewAll" | "add" | "settings">("viewAll");

  const renderContent = () => {
    switch (currentView) {
      case "add":
        return <CertificateForm />;
      case "settings":
        return <Settings />;
      default:
        return <CertificateList />;
    }
  };

  return (
    <main className="flex-1 p-6">
      <div className="container mx-auto">
        {renderContent()}
      </div>
    </main>
  );
}