
import * as React from "react";
import { Link } from "react-router-dom";
import { Home, Mail, Briefcase, UserCircle2, Bell, Shield, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MainNav = () => {
  const isMobile = useIsMobile();

  const navItems = [
    { label: "Home", icon: <Home className="w-4 h-4" />, path: "/" },
    { label: "About", icon: <Users className="w-4 h-4" />, path: "/about" },
    { label: "Contact", icon: <Mail className="w-4 h-4" />, path: "/contact" },
    {
      label: "Our Services",
      icon: <Briefcase className="w-4 h-4" />,
      path: "/services",
    },
    {
      label: "Updates",
      icon: <Bell className="w-4 h-4" />,
      path: "/updates",
    },
    {
      label: "Verify Certificate",
      icon: <Shield className="w-4 h-4" />,
      path: "/verify-certificate",
    },
    {
      label: "Admin Login",
      icon: <UserCircle2 className="w-4 h-4" />,
      path: "/admin",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-border">
      <div className="container mx-auto px-4">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                <Link
                  to={item.path}
                  className={navigationMenuTriggerStyle() + " gap-2"}
                >
                  {item.icon}
                  {!isMobile && <span>{item.label}</span>}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default MainNav;
