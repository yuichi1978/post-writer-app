import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import { useLockBodyScroll } from "@uidotdev/usehooks";

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  useLockBodyScroll();

  return (
    <div className="fixed top-[24px] inset-0 z-30 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
      <div className="gird gap-3 bg-popover p-3 text-popover-foreground bg-teal-100 shadow-md shadow-teal-300/50">
        <Link href={"/"} className="font-bold">
          {siteConfig.name}
        </Link>
        <nav className="text-sm flex gap-2">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
