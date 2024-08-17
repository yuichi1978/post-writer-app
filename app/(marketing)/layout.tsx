import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import MainNav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import SiteFooter from "@/components/site-footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* headerコンテンツ */}
      <header className="w-full bg-background fixed shadow-md px-5 z-40">
        <div className="h-10 md:h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-2 md:px-3 text-xs md:text-sm"
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>

      {/* mainコンテンツ */}
      <main className="container py-[80px] md:py-[100px]">{children}</main>

      {/* footerコンテンツ */}
      <SiteFooter />
    </div>
  );
}
