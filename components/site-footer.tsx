import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-15">
        <p className="text-center text-sm md:text-left justify-center items-center">
          Built by {""}
          <Link
            href={siteConfig.links.x}
            className="hover:underline underline-offset-4 font-medium animate-in duration-150"
            target="_blank"
            rel="noreferrer"
          >
            blog
          </Link>
          . Hosted on {""}
          <Link
            href={siteConfig.links.vercel}
            className="hover:underline underline-offset-4 font-medium animate-in duration-150"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
}
