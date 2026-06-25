import { Link } from "react-router-dom";
import SaplingLogo from "./SaplingLogo";
import GrowthSpeedLogo from "./GrowthSpeedLogo";

const groups = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Marselle AI", href: "/#marselle" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/#top" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Founder-led", href: "/#top" },
      { label: "Security", href: "/#top" },
      { label: "Careers", href: "/#top" },
      { label: "Contact", href: "/#top" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/#top" },
      { label: "Guides", href: "/#top" },
      { label: "Help center", href: "/#top" },
      { label: "Status", href: "/#top" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/deepanshubhatnagar/", icon: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" },
  { label: "X", href: "https://x.com", icon: "M3 3h4.5l4 5.6L16 3h3l-6.2 8.2L20 21h-4.5l-4.3-6L6 21H3l6.6-8.7L3 3z" },
  { label: "GitHub", href: "https://github.com", icon: "M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e3eaea] bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="GrowthSpeed home">
              <SaplingLogo className="h-9 w-9" />
              <GrowthSpeedLogo className="text-[22px]" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#5b6b6b]">
              Your personal AI marketing team, taking care of it all, 24/7.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#02494A]/5 px-3 py-1.5 text-xs font-semibold text-[#02494A] ring-1 ring-[#02494A]/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2FBABC]" />
              Powered by <span className="text-[#2FBABC]">Marselle AI</span>
            </p>
            <p className="mt-4 text-xs text-[#9aaaaa]">
              Plans from $950/mo · Basic $950 · Pro $1,950 · Advance $2,450
            </p>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#7d8d8d]">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[#5b6b6b] transition-colors hover:text-[#02494A]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#e3eaea] pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-[#9aaaaa]">
            © {new Date().getFullYear()} GrowthSpeed. All rights reserved.
          </p>
          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#5b6b6b] ring-1 ring-[#e3eaea] transition-all hover:-translate-y-0.5 hover:text-[#02494A] hover:ring-[#2FBABC]/50"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.icon} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
