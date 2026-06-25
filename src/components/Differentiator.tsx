import Reveal from "./Reveal";
import CtaButton from "./CtaButton";

const rows = [
  {
    us: "A founder-led team that knows your name",
    them: "An account manager juggling 40 clients",
  },
  {
    us: "Marselle AI working 24/7 in the background",
    highlight: true,
    them: "Humans limited to business hours",
  },
  {
    us: "One team across every channel",
    them: "Separate vendors for ads, email, and content",
  },
  {
    us: "Work shipped in days, every week",
    them: "Quarterly plans and approval bottlenecks",
  },
];

export default function Differentiator() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
            What sets us apart
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#0b1f1f] sm:text-[40px]">
            The difference between hiring a team and handing it over
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12 overflow-hidden rounded-[24px] border border-[#e3eaea]">
          <div className="grid grid-cols-2 bg-[#F6F8F8] text-xs font-bold uppercase tracking-wider text-[#7d8d8d]">
            <div className="px-5 py-4 sm:px-8">With GrowthSpeed</div>
            <div className="border-l border-[#e3eaea] px-5 py-4 sm:px-8">The usual agency</div>
          </div>
          <ul>
            {rows.map((r, i) => (
              <li
                key={r.us}
                className={`grid grid-cols-2 ${
                  i !== rows.length - 1 ? "border-b border-[#e3eaea]" : ""
                }`}
              >
                <div className="flex items-start gap-3 bg-white px-5 py-5 sm:px-8 sm:py-6">
                  <svg className="mt-0.5 shrink-0 text-[#2FBABC]" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-medium text-[#0b1f1f] sm:text-base">
                    {r.us.startsWith("Marselle AI") ? (
                      <>
                        <span className="font-semibold text-[#2FBABC]">Marselle AI</span>
                        {r.us.replace("Marselle AI", "")}
                      </>
                    ) : (
                      r.us
                    )}
                  </span>
                </div>
                <div className="flex items-start gap-3 border-l border-[#e3eaea] bg-[#F6F8F8] px-5 py-5 sm:px-8 sm:py-6">
                  <svg className="mt-0.5 shrink-0 text-[#b6c2c2]" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm text-[#7d8d8d] sm:text-base">{r.them}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <CtaButton href="/start">Start your free trial</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
