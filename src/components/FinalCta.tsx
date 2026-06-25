import { useState } from "react";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import { submitToGoogleForm } from "../lib/googleForm";

export default function FinalCta() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitting(true);
    try {
      await submitToGoogleForm(email);
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="start" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <Reveal className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-[#02494A] px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 glow-teal-strong" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-[320px] w-[320px] glow-teal" aria-hidden="true" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-[30px] font-extrabold leading-tight tracking-tight text-white sm:text-[44px]">
            Hand your marketing to a team that treats it like their own
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Start your free trial today. 14 days, no credit card, cancel anytime.
            Your team is ready to go.
          </p>

          {/* Email signup form */}
          {!sent ? (
            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              aria-label="Start your free trial"
            >
              <label htmlFor="final-email" className="sr-only">
                Work email
              </label>
              <input
                id="final-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSent(false);
                }}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 focus:border-[#2FBABC] focus:outline-none focus:ring-2 focus:ring-[#2FBABC]/30"
              />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#2FBABC] px-6 text-sm font-bold text-[#02494A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7fd6cf] disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Start your free trial"}
              </button>
            </form>
          ) : (
            <p className="mx-auto mt-8 max-w-md text-sm font-semibold text-[#2FBABC]" role="status">
              Thanks! Your details have been received. We'll set up your team right away.
            </p>
          )}

          <p className="mt-3 text-xs font-medium text-white/50">
            14 days free · No credit card · Cancel anytime
          </p>

          {/* Pricing link */}
          <Link
            to="/pricing"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2FBABC] transition-colors hover:text-[#7fd6cf]"
          >
            View pricing
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
