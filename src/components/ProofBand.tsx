import Reveal from "./Reveal";

const metrics = [
  { v: "3.2×", k: "Average pipeline growth in 6 months" },
  { v: "24/7", k: "Campaigns monitored and tuned" },
  { v: "48h", k: "From kickoff to first live campaign" },
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
      </div>
    </section>
  );
}
