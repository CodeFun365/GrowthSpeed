import Reveal from "./Reveal";

const metrics = [
  { v: "3.2×", k: "Average pipeline growth in 6 months" },
  { v: "24/7", k: "Campaigns monitored and tuned" },
  { v: "48h", k: "From kickoff to first live campaign" },
];

const testimonials = [
  {
    quote:
      "I stopped worrying about marketing entirely. The team just keeps shipping, and the numbers keep climbing.",
    name: "Amara Okafor",
    role: "Founder, Pebble",
  },
  {
    quote:
      "It feels like having a senior marketing team in-house, without the overhead. Marselle AI is genuinely impressive.",
    name: "Daniel Reyes",
    role: "CEO, Lumen",
  },
  {
    quote:
      "Warm, thoughtful, and fast. They sound like us, and our customers notice. Best decision we made this year.",
    name: "Sofia Marchetti",
    role: "Founder, Cassia",
  },
];

export default function ProofBand() {
  return (
    <section className="relative overflow-hidden bg-[#02494A] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-0 h-[420px] w-[420px] glow-teal-strong" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[460px] w-[460px] glow-teal-strong" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
            Proof
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight sm:text-[40px]">
            Founders sleep better with GrowthSpeed on it
          </h2>
        </Reveal>

        <dl className="mt-12 grid gap-5 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.k} delay={i * 100}>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <dt className="text-4xl font-extrabold text-[#2FBABC] sm:text-5xl">
                  {m.v}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/75">
                  {m.k}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white p-6 text-[#0b1f1f] sm:p-7">
                <svg className="text-[#2FBABC]" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2H4v2h1a4 4 0 004-4V9a2 2 0 00-2-2zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V9a2 2 0 00-2-2z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#0b1f1f]">
                  "{t.quote.split("Marselle AI").map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="font-semibold text-[#2FBABC]">Marselle AI</span>
                      )}
                    </span>
                  ))}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#e3eaea] pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#02494A] text-sm font-bold text-[#2FBABC]">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[#0b1f1f]">{t.name}</span>
                    <span className="block text-xs text-[#7d8d8d]">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
