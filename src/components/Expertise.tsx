import Reveal from "./Reveal";

const cards = [
  { title: "Brand strategy", body: "Positioning, messaging, and a voice that stays consistent everywhere it shows up." },
  { title: "Copywriting", body: "Clear, warm writing for ads, pages, and emails, never robotic, never generic." },
  { title: "Performance marketing", body: "Budgets managed across networks with steady testing and steady gains." },
  { title: "Design & creative", body: "Scroll-stopping visuals and clean layouts that match your brand." },
  { title: "Marketing automation", body: "Workflows that move the right message to the right person at the right time." },
  { title: "CRO & experimentation", body: "Small, careful tests that turn more visitors into customers over time." },
];

export default function Expertise() {
  return (
    <section id="marselle" className="relative scroll-mt-24 overflow-hidden bg-[#F6F8F8] py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-10 h-[360px] w-[360px] glow-teal" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
            <span className="text-[#2FBABC]">Marselle AI</span>
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#0b1f1f] sm:text-[40px]">
            An AI engine, guided by people who care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5b6b6b] sm:text-lg">
            <span className="font-semibold text-[#2FBABC]">Marselle AI</span> does the heavy lifting: drafting, analyzing, optimizing
            around the clock. Our founder-led team steers it with judgment, taste,
            and a real understanding of your business.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal as="li" key={c.title} delay={(i % 3) * 90}>
              <article
                className={`h-full bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-36px_rgba(2,73,74,0.5)] ${
                  i === 1 || i === 4 ? "r-asym" : "rounded-[24px]"
                } border border-[#e3eaea]`}
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2FBABC]">
                  Expertise
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#0b1f1f]">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5b6b6b]">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
