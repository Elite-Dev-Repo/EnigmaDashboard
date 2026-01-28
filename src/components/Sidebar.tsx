import React from "react";
import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import {
  LogOutIcon,
  Users,
  ChartColumnIncreasing,
  Settings2,
  Database,
  LayoutDashboard,
  ScanBarcodeIcon,
  CommandIcon,
} from "lucide-react";

function Sidebar() {
  type cust = {
    label: string;
    icon: React.ReactNode;
    link?: string;
  };
  const customers: cust[] = [
    {
      label: "My Account",
      icon: <Users size={20} />,
      link: "/users",
    },
    {
      label: "Analytics",
      icon: <ChartColumnIncreasing />,
      link: "/analytics",
    },

    {
      label: "Decisions Models",
      icon: <ScanBarcodeIcon />,
    },
    {
      label: "Saved Database",
      icon: <Database />,
    },

    {
      label: "CLI",
      icon: <CommandIcon />,
    },
    {
      label: "Preferences",
      icon: <Settings2 />,
      link: "/",
    },
  ];

  return (
    <>
      <ShadSidebar className="mt-[80px]">
        <SidebarContent className="bg-background flex gap-5 text-primary overflow-y-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <SidebarHeader className="">
            <a href="/">
              <h3 className="flex items-center mt-5 justify-start px-2 font-light gap-4 text-2xl ">
                {" "}
                <LayoutDashboard size={20} /> Dashboard{" "}
              </h3>
            </a>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="gap-3">
                {" "}
                {/* Added this wrapper */}
                {customers.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      className="itemm text-primary/60 font-light hover:text-primary hover:bg-foreground rounded-none py-5"
                    >
                      <a href={item.link || "#"} className="px-2 ">
                        {item.icon}
                        <span className=" text-[.85rem]">{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>{" "}
          <SidebarSeparator className="bg-primary/20" />
          <SidebarFooter className="px-5">
            <button className="cursor-pointer flex items-center justify-center py-2 border border-[#ef444480] rounded-sm bg-[#ef44441a] text-[#ef4444] ">
              <LogOutIcon className="mr-2 h-4 w-4" /> Logout
            </button>
          </SidebarFooter>
        </SidebarContent>
      </ShadSidebar>
    </>
  );
}

export default Sidebar;
