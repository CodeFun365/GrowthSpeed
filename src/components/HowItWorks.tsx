import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Tell us about your business",
    body: "A short kickoff call with our founder-led team. We learn your goals, voice, and customers. No questionnaires to fill out alone.",
  },
  {
    n: "02",
    title: "Marselle AI builds your plan",
    body: "Our AI maps a full marketing plan across channels, then a human strategist refines it into something that sounds like you.",
    highlight: true,
  },
  {
    n: "03",
    title: "Your team gets to work",
    body: "Content, ads, email, and landing pages are created, scheduled, and shipped, quietly in the background, week after week.",
  },
  {
    n: "04",
    title: "You watch the numbers climb",
    body: "A calm dashboard shows what's working. We keep tuning, so growth keeps compounding without you lifting a finger.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
            How it works
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#0b1f1f] sm:text-[40px]">
            From kickoff to compounding growth in four calm steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5b6b6b] sm:text-lg">
            You hand us the keys once. From there, your team runs everything.
            You stay informed, never overloaded.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 90}>
              <article
                className={`group h-full border border-[#e3eaea] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-36px_rgba(2,73,74,0.5)] ${
                  i % 2 === 1 ? "r-asym-r" : "rounded-[24px]"
                }`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#02494A]/5 text-sm font-extrabold text-[#02494A] ring-1 ring-[#02494A]/10">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#0b1f1f]">
                  {s.title.includes("Marselle AI") ? (
                    <>
                      <span className="text-[#2FBABC]">Marselle AI</span>
                      {s.title.replace("Marselle AI", "")}
                    </>
                  ) : (
                    s.title
                  )}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5b6b6b]">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
