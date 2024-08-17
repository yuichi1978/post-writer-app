import { ReactNode } from "react";
import SiteFooter from "@/components/site-footer";
import { dashboardConfig } from "@/config/dashboard";
import MainNav from "@/components/main-nav";
import DashboardNav from "@/components/dashboard-nav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="w-full bg-background fixed shadow-md px-5 z-40">
        <div className="h-10 md:h-20 py-6 flex items-center justify-between">
          <MainNav items={dashboardConfig.mainNav} />
        </div>
      </header>
      <div className="container py-[80px] md:py-[100px] grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden md:flex w-[200px] flex-col">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex flex-col w-full flex-1 overflow-hidden">
          {children}
        </main>
      </div>
      {/* footerコンテンツ */}
      <SiteFooter />
    </div>
  );
}
