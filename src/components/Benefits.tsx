import Reveal from "./Reveal";

const benefits = [
  {
    title: "Growth that compounds",
    body: "Steady campaigns across every channel add up. Month over month, your pipeline gets fuller and your brand gets louder.",
    accent: "bg-[#2FBABC]/12 text-[#02494A]",
    icon: (
      <path d="M3 17l6-6 4 4 8-8M14 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Peace of mind, always",
    body: "A founder-led team watches your marketing like it's their own. You sleep well knowing the work is being done, well.",
    accent: "bg-[#02494A]/8 text-[#02494A]",
    icon: (
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Instant results",
    body: "No long ramp. Your team ships in days, not quarters, and keeps shipping, so you see motion right away.",
    accent: "bg-[#2FBABC]/12 text-[#02494A]",
    icon: (
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#F6F8F8] py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
            Why founders choose us
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#0b1f1f] sm:text-[40px]">
                          Marketing custom build as per your business requirements
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <article className="h-full rounded-[24px] border border-[#e3eaea] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-36px_rgba(2,73,74,0.5)]">
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${b.accent}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {b.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#0b1f1f]">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5b6b6b]">{b.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
