import { FileText, Plus, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "All Certificates",
    icon: FileText,
    action: "viewAll"
  },
  {
    title: "Add Certificate",
    icon: Plus,
    action: "add"
  },
  {
    title: "Settings",
    icon: Settings,
    action: "settings"
  }
];

interface AdminSidebarProps {
  onActionSelect?: (action: string) => void;
}

export function AdminSidebar({ onActionSelect }: AdminSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Certificate Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => onActionSelect?.(item.action)}
                    tooltip={item.title}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}