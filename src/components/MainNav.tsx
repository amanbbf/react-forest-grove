
import * as React from "react";
import { Link } from "react-router-dom";
import { Home, Mail, Briefcase, UserCircle2, Bell, Shield, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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
    <nav className="nav-responsive">
      <div className="container-responsive">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="gap-1 sm:gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                <Link
                  to={item.path}
                  className={navigationMenuTriggerStyle() + " gap-1 sm:gap-2 px-2 sm:px-4 py-2"}
                >
                  {item.icon}
                  {!isMobile && <span className="hidden sm:inline">{item.label}</span>}
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
