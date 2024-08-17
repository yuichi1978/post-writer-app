"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { NavItem } from "@/types/index";
import MobileNav from "@/components/mobile-nav";

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center md:gap-3">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">Post Writer</span>
      </Link>
      <nav className="md:flex gap-3 hidden">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
}
