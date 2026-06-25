import { useState } from "react";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { submitToGoogleForm } from "../lib/googleForm";

/* ---------- Checkmark icons ---------- */
function CheckDark() {
  return (
    <svg className="shrink-0 text-[#2FBABC]" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dash() {
  return (
    <span className="text-base font-semibold text-[#cdd8d8]" aria-label="Not included">
      —
    </span>
  );
}

/* ---------- Plan data ---------- */
type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  alwaysIncluded: string[];
  anchor: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: "$950",
    period: "/mo",
    tagline: "Perfect for smaller businesses and solo marketers.",
    features: [
      "3 Sub-Accounts",
      "Unlimited Contacts",
      "Unlimited Users",
      "24/7 Support",
      "All Core Features",
    ],
    alwaysIncluded: [
      "Done-for-you marketing",
      "Clear reports & dashboards",
      "Founder-led team",
      "14-day first-win guarantee",
    ],
    anchor: "Replaces a $4-6K/mo freelancer or fractional CMO.",
  },
  {
    name: "Pro",
    price: "$1,950",
    period: "/mo",
    tagline: "Built for growing agencies.",
    features: [
      "Everything in Basic, plus:",
      "Unlimited Sub-Accounts",
      "Rebill Phone & Email (no markup)",
      "Basic API Access",
    ],
    alwaysIncluded: [
      "Done-for-you marketing",
      "Clear reports & dashboards",
      "Founder-led team",
      "14-day first-win guarantee",
    ],
    anchor: "Run client marketing at agency margins, without an agency team.",
    featured: true,
  },
  {
    name: "Advance",
    price: "$2,450",
    period: "/mo",
    tagline: "Ideal for SaaSpreneurs & agencies looking to go SaaS.",
    features: [
      "Everything in Pro, plus:",
      "SaaS Mode",
      "Automated Sub-Account Creation",
      "Rebill Phone & Email with Markup",
      "User/Agent Reporting",
      "Advanced API Access",
    ],
    alwaysIncluded: [
      "Done-for-you marketing",
      "Clear reports & dashboards",
      "Founder-led team",
      "14-day first-win guarantee",
    ],
    anchor: "Launch your own white-label marketing SaaS on Marselle.",
  },
];

/* ---------- Comparison table data ---------- */
type Row = {
  label: string;
  basic: string | boolean;
  pro: string | boolean;
  advance: string | boolean;
};

type Section = { group: string; rows: Row[] };

const sections: Section[] = [
  {
    group: "Core",
    rows: [
      { label: "Sub-Accounts", basic: "3", pro: "Unlimited", advance: "Unlimited" },
      { label: "Contacts", basic: "Unlimited", pro: "Unlimited", advance: "Unlimited" },
      { label: "Users", basic: "Unlimited", pro: "Unlimited", advance: "Unlimited" },
      { label: "All Core Features", basic: true, pro: true, advance: true },
    ],
  },
  {
    group: "Done-for-you",
    rows: [
      { label: "Strategy, content & campaigns managed", basic: true, pro: true, advance: true },
      { label: "Clear reports & dashboards", basic: true, pro: true, advance: true },
      { label: "Founder-led team", basic: true, pro: true, advance: true },
    ],
  },
  {
    group: "Rebilling / API / SaaS",
    rows: [
      { label: "Rebill Phone & Email", basic: false, pro: "No markup", advance: "With markup" },
      { label: "API Access", basic: false, pro: "Basic", advance: "Advanced" },
      { label: "SaaS Mode", basic: false, pro: false, advance: true },
      { label: "Automated Sub-Account Creation", basic: false, pro: false, advance: true },
    ],
  },
  {
    group: "Reporting & Support",
    rows: [
      { label: "User/Agent Reporting", basic: false, pro: false, advance: true },
      { label: "24/7 Support", basic: true, pro: true, advance: true },
      { label: "Priority onboarding", basic: false, pro: true, advance: true },
    ],
  },
  {
    group: "Guarantee",
    rows: [
      { label: "14-day free trial + first-win guarantee", basic: true, pro: true, advance: true },
    ],
  },
];

/* ---------- FAQ data ---------- */
const faqs = [
  {
    q: "Is it really done for me?",
    a: "Yes. Your founder-led team and Marselle AI handle strategy, content, ads, email, and analytics end to end. You do not run, approve, or manage any of the work. You stay informed through a calm weekly summary.",
  },
  {
    q: "What happens during the 14-day free trial?",
    a: "We set up your account, connect your channels, and your team starts shipping from day one. You see real campaigns, real content, and real motion. No credit card required, and you can cancel anytime before day 15.",
  },
  {
    q: "How is this different from an agency retainer?",
    a: "An agency charges you to manage work and often requires approvals at every step. GrowthSpeed is fully done-for-you: we run everything end to end, backed by Marselle AI working around the clock. You get agency-level output without the overhead, bottlenecks, or buzzwords.",
  },
  {
    q: "What's a sub-account / SaaS Mode?",
    a: "A sub-account is an isolated workspace for a single client or brand. Pro gives you unlimited sub-accounts so you can run marketing for every client. SaaS Mode (Advance) lets you automatically create sub-accounts, rebill phone and email with markup, and launch your own white-label marketing SaaS on Marselle.",
  },
  {
    q: "Can I upgrade or cancel anytime?",
    a: "Absolutely. You can upgrade, downgrade, or cancel at any time from your dashboard. Changes take effect immediately and we prorate the difference. No lock-in, no penalties.",
  },
];

/* ---------- Cell renderer ---------- */
function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <CheckDark />;
  if (value === false) return <Dash />;
  return <span className="text-sm font-medium text-[#282828]">{value}</span>;
}

/* ---------- Main component ---------- */
export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaSent, setCtaSent] = useState(false);
  const [ctaSubmitting, setCtaSubmitting] = useState(false);

  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaEmail.includes("@")) return;
    setCtaSubmitting(true);
    try {
      await submitToGoogleForm(ctaEmail);
      setCtaSent(true);
    } catch {
      setCtaSent(true);
    } finally {
      setCtaSubmitting(false);
    }
  };

  return (
    <main id="main" className="bg-white">
      {/* ---------- Header ---------- */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] glow-teal floaty" aria-hidden="true" />
        <div className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] glow-teal" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1280px] px-5 pb-14 pt-14 sm:px-8 sm:pt-20 lg:px-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#282828] sm:text-[44px] lg:text-[52px]">
              Plans for every Small Business Owner, Founder, Agency, and SaaS builder.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4F525F] sm:text-lg">
              Transparent pricing. No hidden fees, no "contact sales." Start
              with a 14-day free trial. Every plan is fully done-for-you and
              backed by our first-win guarantee.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Plan cards ---------- */}
      <section className="relative pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <article
                  className={`relative flex h-full flex-col rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    plan.featured
                      ? "border-[#02494A] bg-[#02494A] text-white shadow-[0_30px_70px_-30px_rgba(2,73,74,0.5)] lg:-mt-4 lg:mb-4"
                      : "border-[#E0E0E0] bg-white shadow-[0_12px_30px_-24px_rgba(2,73,74,0.25)]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2FBABC] px-3.5 py-1 text-[11px] font-bold text-[#02494A]">
                      MOST POPULAR
                    </span>
                  )}

                  <h2 className={`text-xl font-extrabold ${plan.featured ? "text-white" : "text-[#282828]"}`}>
                    {plan.name}
                  </h2>
                  <p className={`mt-1.5 text-sm leading-relaxed ${plan.featured ? "text-white/70" : "text-[#4F525F]"}`}>
                    {plan.tagline}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold ${plan.featured ? "text-white" : "text-[#282828]"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-medium ${plan.featured ? "text-white/60" : "text-[#9aaaaa]"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`mt-1 text-xs ${plan.featured ? "text-white/50" : "text-[#9aaaaa]"}`}>
                    14 days free · No credit card
                  </p>

                  <a
                    href="/start"
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                      plan.featured
                        ? "bg-[#2FBABC] text-[#02494A] hover:bg-[#7fd6cf] hover:-translate-y-0.5"
                        : "bg-[#02494A] text-white hover:bg-[#035d5e] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(2,73,74,0.55)]"
                    }`}
                  >
                    Start your free trial
                  </a>

                  <div className={`my-6 h-px ${plan.featured ? "bg-white/15" : "bg-[#E0E0E0]"}`} />

                  <ul className="space-y-3">
                    {plan.features.map((f) => {
                      const isHeader = f.includes("Everything in");
                      return (
                        <li key={f} className="flex items-start gap-2.5">
                          {isHeader ? (
                            <span className={`text-sm font-bold ${plan.featured ? "text-[#2FBABC]" : "text-[#02494A]"}`}>
                              {f}
                            </span>
                          ) : (
                            <>
                              <CheckDark />
                              <span className={`text-sm ${plan.featured ? "text-white/90" : "text-[#282828]"}`}>
                                {f}
                              </span>
                            </>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-6">
                    <p className={`text-[11px] font-bold uppercase tracking-wider ${plan.featured ? "text-white/40" : "text-[#9aaaaa]"}`}>
                      Always included
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {plan.alwaysIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckDark />
                          <span className={`text-[13px] ${plan.featured ? "text-white/80" : "text-[#4F525F]"}`}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <p className={`rounded-xl px-4 py-3 text-xs font-medium leading-relaxed ${plan.featured ? "bg-white/10 text-[#7fd6cf]" : "bg-[#F6F8F8] text-[#02494A]"}`}>
                      {plan.anchor}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10 text-center">
            <p className="mx-auto max-w-xl text-sm font-medium text-[#4F525F] sm:text-base">
              Less than the cost of one marketing hire, and the five tools
              you'd otherwise stitch together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Comparison table ---------- */}
      <section id="compare" className="scroll-mt-24 bg-[#F6F8F8] py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
              Compare plans
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#282828] sm:text-[40px]">
              Everything you get at each tier
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[680px] overflow-hidden rounded-[24px] border border-[#E0E0E0] bg-white text-left">
              <thead>
                <tr className="border-b border-[#E0E0E0] bg-[#F6F8F8]">
                  <th className="px-5 py-5 text-xs font-bold uppercase tracking-wider text-[#9aaaaa] sm:px-8">
                    Feature
                  </th>
                  <th className="px-5 py-5 text-center text-sm font-extrabold text-[#282828] sm:px-8">
                    Basic
                  </th>
                  <th className="px-5 py-5 text-center text-sm font-extrabold text-[#02494A] sm:px-8">
                    Pro
                  </th>
                  <th className="px-5 py-5 text-center text-sm font-extrabold text-[#282828] sm:px-8">
                    Advance
                  </th>
                </tr>
              </thead>
              <tbody>
                {sections.map((section) => (
                  <SectionRows key={section.group} section={section} />
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
              FAQ
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#282828] sm:text-[40px]">
              Questions, answered
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 80}>
                <div className="rounded-[24px] border border-[#E0E0E0] bg-white p-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-base font-bold text-[#282828]">
                      {f.q}
                    </span>
                    <svg
                      className={`shrink-0 text-[#2FBABC] transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: openFaq === i ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm leading-relaxed text-[#4F525F]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA band ---------- */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <Reveal className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-[#02494A] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 glow-teal-strong" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-[320px] w-[320px] glow-teal" aria-hidden="true" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[42px]">
              Hand over your marketing today.
            </h2>
            {!ctaSent ? (
              <form
                onSubmit={handleCtaSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                aria-label="Start your free trial"
              >
                <label htmlFor="pricing-cta-email" className="sr-only">
                  Work email
                </label>
                <input
                  id="pricing-cta-email"
                  type="email"
                  required
                  value={ctaEmail}
                  onChange={(e) => {
                    setCtaEmail(e.target.value);
                    setCtaSent(false);
                  }}
                  placeholder="you@company.com"
                  className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 focus:border-[#2FBABC] focus:outline-none focus:ring-2 focus:ring-[#2FBABC]/30"
                />
                <button
                  type="submit"
                  disabled={ctaSubmitting}
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#2FBABC] px-6 text-sm font-bold text-[#02494A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7fd6cf] disabled:opacity-60"
                >
                  {ctaSubmitting ? "Sending..." : "Start your free trial"}
                  {!ctaSubmitting && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            ) : (
              <p className="mx-auto mt-8 max-w-md text-sm font-semibold text-[#2FBABC]" role="status">
                Thanks! Your details have been received. We'll set up your team right away.
              </p>
            )}
            <p className="mt-3 text-xs font-medium text-white/60">
              14 days free · No credit card
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- Back to home ---------- */}
      <section className="pb-20 text-center sm:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#02494A] transition-colors hover:text-[#035d5e]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ---------- Section rows (separate component to avoid fragment key issues) ---------- */
function SectionRows({ section }: { section: Section }) {
  return (
    <>
      <tr className="border-b border-[#E0E0E0] bg-[#F6F8F8]">
        <td colSpan={4} className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#02494A] sm:px-8">
          {section.group}
        </td>
      </tr>
      {section.rows.map((row) => (
        <tr key={row.label} className="border-b border-[#f0f4f4] last:border-b-0">
          <td className="px-5 py-4 text-sm font-medium text-[#282828] sm:px-8">
            {row.label}
          </td>
          <td className="px-5 py-4 text-center sm:px-8">
            <Cell value={row.basic} />
          </td>
          <td className="px-5 py-4 text-center sm:px-8">
            <Cell value={row.pro} />
          </td>
          <td className="px-5 py-4 text-center sm:px-8">
            <Cell value={row.advance} />
          </td>
        </tr>
      ))}
    </>
  );
}
