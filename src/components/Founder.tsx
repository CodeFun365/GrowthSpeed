import Reveal from "./Reveal";
import CtaButton from "./CtaButton";

export default function Founder() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Photo */}
          <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="pointer-events-none absolute -inset-5 glow-teal rounded-[40px]" aria-hidden="true" />
            <div className="relative r-asym overflow-hidden border border-[#e3eaea] bg-[#F6F8F8]">
              <img
                src="/images/founder.jpg"
                alt="Deepanshu, founder of GrowthSpeed"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Message */}
          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
              Founder-led
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#0b1f1f] sm:text-[40px]">
              Hi, I'm Deepanshu
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#5b6b6b] sm:text-lg">
              <p>
                I started GrowthSpeed because too many founders were stuck between
                doing marketing themselves or handing it to an agency that never
                quite got them.
              </p>
              <p>
                So we built a small, founder-led team and gave it{" "}
                <span className="font-semibold text-[#2FBABC]">Marselle AI</span>, an
                engine that works through the night. Together, we run your
                marketing like it's our own. You stay in the loop, never in the
                weeds.
              </p>
              <p>
                If anything ever feels off, you reach me directly. That's the
                promise I make to every founder we work with.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton href="/start">Start your free trial</CtaButton>
              <a
                href="https://www.linkedin.com/in/deepanshubhatnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#02494A] transition-colors hover:text-[#035d5e]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
