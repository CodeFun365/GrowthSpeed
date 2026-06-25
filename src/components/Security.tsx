import Reveal from "./Reveal";

const points = [
  {
    title: "Your data stays yours",
    body: "We never share your customer data across accounts. What's yours stays yours, full stop.",
    icon: "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z",
  },
  {
    title: "Encrypted by default",
    body: "Data is encrypted in transit and at rest, with access limited to your dedicated team.",
    icon: "M6 10V8a6 6 0 1112 0v2M5 10h14v10H5z",
  },
  {
    title: "Only the access you grant",
    body: "We connect only the accounts you approve, and you can revoke access any time.",
    icon: "M3 7h18v12H3zM3 7l9 6 9-6",
  },
];

export default function Security() {
  return (
    <section className="bg-[#F6F8F8] py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2FBABC]">
            Security & trust
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold tracking-tight text-[#0b1f1f] sm:text-[40px]">
            Built with your customers' trust in mind
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5b6b6b] sm:text-lg">
            We treat your data the way we'd want ours treated: carefully,
            transparently, and only ever in service of your growth.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100}>
              <article className="h-full rounded-[24px] border border-[#e3eaea] bg-white p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#02494A]/5 text-[#02494A] ring-1 ring-[#02494A]/10">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={p.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#0b1f1f]">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5b6b6b]">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
