import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is GrowthSpeed?",
    a: "GrowthSpeed is your personal AI marketing team. A founder-led crew, powered by Marselle AI, runs your marketing across content, SEO, paid ads, email, and social media 24/7, so you get compounding growth without managing it yourself.",
  },
  {
    q: "How does GrowthSpeed work?",
    a: "It takes four steps: a short kickoff call to learn your goals and voice, Marselle AI builds a full marketing plan refined by a human strategist, your team creates and ships content, ads, email, and pages, and you watch results on a calm dashboard while the team keeps tuning.",
  },
  {
    q: "How much does GrowthSpeed cost?",
    a: "Plans start at $950/month. There are three tiers: Basic at $950/mo, Pro at $1,950/mo, and Advance at $2,450/mo. You can start a 14-day free trial with no credit card and cancel anytime.",
  },
  {
    q: "What marketing work does GrowthSpeed handle?",
    a: "GrowthSpeed handles content and SEO, paid ads on Google, Meta, and LinkedIn, email and lifecycle flows, social media, analytics and reporting, and conversion-ready landing pages.",
  },
  {
    q: "Is my data safe with GrowthSpeed?",
    a: "Yes. Your customer data is never shared across accounts, data is encrypted in transit and at rest, and GrowthSpeed connects only the accounts you approve, with access you can revoke at any time.",
  },
  {
    q: "What is Marselle AI?",
    a: "Marselle AI is the engine that powers GrowthSpeed. It does the heavy lifting of drafting, analyzing, and optimizing around the clock, while a founder-led human team steers strategy and quality.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[820px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
            FAQ
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#0b1f1f] sm:text-[40px]">
            Questions founders ask us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5b6b6b] sm:text-lg">
            Everything you need to know about how GrowthSpeed runs your
            marketing. Still curious? Reach out anytime.
          </p>
        </Reveal>

        <dl className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-[20px] border border-[#e3eaea] bg-[#F6F8F8] p-6 transition-colors open:bg-white sm:p-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[#0b1f1f]">
                  <dt>{f.q}</dt>
                  <span
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#02494A]/5 text-[#02494A] ring-1 ring-[#02494A]/10 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <dd className="mt-4 text-[15px] leading-relaxed text-[#5b6b6b]">
                  {f.a}
                </dd>
              </details>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
