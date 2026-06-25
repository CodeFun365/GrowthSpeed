import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SaplingLogo from "./SaplingLogo";
import GrowthSpeedLogo from "./GrowthSpeedLogo";
import CtaButton from "./CtaButton";

const links = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Marselle AI", href: "/#marselle" },
  { label: "Pricing", href: "/pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSubPage =
    location.pathname.startsWith("/pricing") ||
    location.pathname.startsWith("/start");
  const solid = scrolled || isSubPage;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/85 backdrop-blur-md border-b border-[#e3eaea]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#02494A] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="GrowthSpeed home"
        >
          <SaplingLogo className="h-9 w-9" />
          <GrowthSpeedLogo className="text-[22px]" />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#5b6b6b] transition-colors hover:text-[#02494A]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CtaButton href="/start" className="px-5 py-2.5">
            Start your free trial
          </CtaButton>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#02494A] ring-1 ring-[#02494A]/15 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="mx-5 mb-4 rounded-3xl border border-[#e3eaea] bg-white p-4 shadow-[0_18px_40px_-24px_rgba(2,73,74,0.4)]">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#0b1f1f] hover:bg-[#F6F8F8]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 px-1">
              <CtaButton href="/start" className="w-full">
                Start your free trial
              </CtaButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
