
import {
  LayoutDashboard,
  Plus,
  Settings as SettingsIcon,
  Bell,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Action = "viewAll" | "add" | "settings" | "updates" | "social" | "edit";

interface AdminSidebarProps {
  onActionSelect: (action: Action) => void;
  currentView: Action;
}

export function AdminSidebar({ onActionSelect, currentView }: AdminSidebarProps) {
  const menuItems = [
    {
      icon: <LayoutDashboard className="h-4 w-4" />,
      label: "Certificates",
      action: "viewAll"
    },
    {
      icon: <Plus className="h-4 w-4" />,
      label: "Add Certificate",
      action: "add"
    },
    {
      icon: <Bell className="h-4 w-4" />,
      label: "Updates",
      action: "updates"
    },
    {
      icon: <Share2 className="h-4 w-4" />,
      label: "Social Media",
      action: "social"
    },
    {
      icon: <SettingsIcon className="h-4 w-4" />,
      label: "Settings",
      action: "settings"
    }
  ];

  return (
    <div className="pb-12 min-h-screen w-64 bg-muted/40">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Admin Dashboard
          </h2>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.action}
                variant={currentView === item.action ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-2", {
                  "bg-secondary": currentView === item.action,
                })}
                onClick={() => onActionSelect(item.action as Action)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
