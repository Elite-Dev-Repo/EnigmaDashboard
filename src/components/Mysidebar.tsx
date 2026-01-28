import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar from "./Sidebar";

// Make children optional with '?'
export default function Mysidebar({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full">
        <SidebarTrigger className="md:hidden text-primary" />
        {children}
      </main>
    </SidebarProvider>
  );
}
