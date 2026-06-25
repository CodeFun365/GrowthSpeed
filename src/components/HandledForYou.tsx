import Reveal from "./Reveal";

const items = [
  { title: "Content & SEO", body: "Articles, landing pages, and on-page SEO that compound into organic traffic.", icon: "M4 6h16M4 12h16M4 18h10" },
  { title: "Paid ads", body: "Google, Meta, and LinkedIn campaigns built, launched, and tuned weekly.", icon: "M3 3v18h18M7 14l3-3 3 3 5-6" },
  { title: "Email & lifecycle", body: "Welcome flows, newsletters, and win-backs that sound like a human wrote them.", icon: "M4 6h16v12H4zM4 7l8 6 8-6" },
  { title: "Social media", body: "A consistent presence across the channels your customers actually use.", icon: "M7 7h10v10H7zM17 9l3-2v10l-3-2" },
  { title: "Analytics & reporting", body: "A calm weekly summary of what moved and what's next. No dashboards to babysit.", icon: "M4 19V5M4 19h16M8 16l3-4 3 2 4-5" },
  { title: "Landing pages", body: "Conversion-ready pages built and iterated so every click counts.", icon: "M4 4h16v16H4zM4 9h16" },
];

export default function HandledForYou() {
  return (
    <section id="capabilities" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
            Handled for you
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#0b1f1f] sm:text-[40px]">
            Everything marketing, quietly taken care of
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5b6b6b] sm:text-lg">
            One team, every channel. Here's the work we pick up so you don't have to.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 3) * 90}>
              <article className="group flex h-full gap-4 rounded-[24px] border border-[#e3eaea] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2FBABC]/40 hover:shadow-[0_24px_50px_-36px_rgba(2,73,74,0.5)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#02494A]/5 text-[#02494A] ring-1 ring-[#02494A]/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={it.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#0b1f1f]">{it.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5b6b6b]">{it.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
