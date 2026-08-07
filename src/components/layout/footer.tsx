import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { navLinks, siteConfig } from "@/lib/site-config";

const legalLinks = [
  { label: "Legal Notice", href: "/contact" },
  { label: "Privacy Policy", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="container-edge grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Premium IPTV subscription built for Germany — 15,000+ live channels,
            HD/4K/8K streaming and instant activation, backed by real support on WhatsApp.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition-colors hover:border-purple-400/40 hover:text-white"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition-colors hover:border-purple-400/40 hover:text-white"
              aria-label="Email support"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-cloud">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-cloud">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <li>
              <a href={`mailto:${siteConfig.supportEmail}`} className="transition-colors hover:text-white">
                {siteConfig.supportEmail}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp: {siteConfig.whatsapp.numberDisplay}
              </a>
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold text-cloud">Legal</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-edge flex flex-col gap-3 py-6 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            Channel availability and streaming quality may vary by device, plan and internet
            connection. {siteConfig.domain} is an independent IPTV service provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
