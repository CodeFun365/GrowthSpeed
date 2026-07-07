import { useState } from "react";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import SaplingLogo from "../components/SaplingLogo";
import GrowthSpeedLogo from "../components/GrowthSpeedLogo";

const industries = [
  "SaaS / Software",
  "E-commerce / Retail",
  "Agency / Marketing",
  "Healthcare",
  "Finance / Fintech",
  "Education / EdTech",
  "Real Estate",
  "Hospitality / Travel",
  "Media / Entertainment",
  "Manufacturing",
  "Non-profit",
  "Other",
];

const timeSlots = [
  "Today, 09:00 AM",
  "Today, 11:00 AM",
  "Today, 02:00 PM",
  "Today, 04:00 PM",
  "Tomorrow, 09:00 AM",
  "Tomorrow, 11:00 AM",
  "Tomorrow, 02:00 PM",
  "Tomorrow, 04:00 PM",
  "This week — Mon, 10:00 AM",
  "This week — Tue, 02:00 PM",
  "This week — Wed, 11:00 AM",
  "This week — Thu, 03:00 PM",
  "This week — Fri, 10:00 AM",
  "Next week — pick a slot",
];

const inputBase =
  "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[#282828] placeholder:text-[#9aaaaa] transition-all focus:outline-none focus:ring-2 focus:ring-[#2FBABC]/30 focus:border-[#2FBABC]";
const borderOk = "border-[#E0E0E0]";
const borderErr = "border-[#e57373] bg-[#fef6f6]";

export default function StartTrial() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    industry: "",
    preferredTime: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: false }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !form.email.includes("@")) newErrors.email = true;
    if (!form.contact.trim()) newErrors.contact = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeng0BLDvHeKtSxoWX41kt5_CCFBwR6RlLV4DS5M6QJ36tMaw/viewform";
  };

  if (submitted) {
    return (
      <main id="main" className="bg-white">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] glow-teal floaty" aria-hidden="true" />
          <div className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] glow-teal" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2FBABC]/15 text-[#2FBABC]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="mt-6 text-[28px] font-extrabold tracking-tight text-[#282828] sm:text-[36px]">
              You're all set, {form.name.split(" ")[0]}!
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#4F525F]">
              We've received your details and locked in your preferred time. Our
              founder-led team will reach out shortly to kick off your 14-day
              free trial.
            </p>
            <div className="mt-8 rounded-[24px] border border-[#E0E0E0] bg-[#F6F8F8] p-5 text-left">
              <dl className="space-y-2.5">
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-[#9aaaaa]">Name</dt>
                  <dd className="text-sm font-semibold text-[#282828]">{form.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-[#9aaaaa]">Email</dt>
                  <dd className="text-sm font-semibold text-[#282828]">{form.email}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-[#9aaaaa]">Contact</dt>
                  <dd className="text-sm font-semibold text-[#282828]">{form.contact}</dd>
                </div>
                {form.industry && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-sm text-[#9aaaaa]">Industry</dt>
                    <dd className="text-sm font-semibold text-[#282828]">{form.industry}</dd>
                  </div>
                )}
                {form.preferredTime && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-sm text-[#9aaaaa]">Preferred time</dt>
                    <dd className="text-sm font-semibold text-[#282828]">{form.preferredTime}</dd>
                  </div>
                )}
              </dl>
            </div>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#02494A] transition-colors hover:text-[#035d5e]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main" className="bg-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] glow-teal floaty" aria-hidden="true" />
        <div className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] glow-teal" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Left — copy */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#02494A]/5 px-3.5 py-1.5 text-xs font-semibold text-[#02494A] ring-1 ring-[#02494A]/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2FBABC]" />
                14-day free trial · No credit card
              </span>
              <h1 className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#282828] sm:text-[42px]">
                Start your free trial
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#4F525F] sm:text-lg">
                Tell us a little about yourself and pick a time to connect. Our
                founder-led team will set up your account, connect your
                channels, and start shipping marketing from day one.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Fully done-for-you marketing across every channel",
                  "Founder-led team powered by Marselle AI",
                  "Real campaigns live within 48 hours",
                  "Cancel anytime, no questions asked",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2FBABC]/15 text-[#2FBABC]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-[#282828]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-[24px] border border-[#E0E0E0] bg-[#F6F8F8] p-5">
                <div className="flex items-center gap-2.5">
                  <SaplingLogo className="h-7 w-7" />
                  <span className="text-sm font-bold text-[#282828]">
                    <GrowthSpeedLogo className="text-[16px]" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4F525F]">
                  "I started GrowthSpeed because too many founders were stuck
                  between doing marketing themselves or handing it to an agency
                  that never quite got them. We built a small, founder-led team
                  and gave it Marselle AI. You stay in the loop, never in the
                  weeds."
                </p>
                <p className="mt-3 text-xs font-bold text-[#02494A]">
                  Deepanshu, Founder
                </p>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={120}>
              <div className="rounded-[24px] border border-[#E0E0E0] bg-white p-6 shadow-[0_24px_60px_-40px_rgba(2,73,74,0.35)] sm:p-8">
                <h2 className="text-xl font-extrabold text-[#282828]">
                  Let's get you started
                </h2>
                <p className="mt-1.5 text-sm text-[#4F525F]">
                  Fill in your details and we'll take care of the rest.
                </p>

                <form onSubmit={submit} className="mt-6 space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[#282828]">
                      Name <span className="text-[#e57373]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Jane Doe"
                      className={`${inputBase} ${errors.name ? borderErr : borderOk}`}
                      aria-invalid={errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs font-medium text-[#e57373]">
                        Please enter your name.
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[#282828]">
                      Email <span className="text-[#e57373]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@company.com"
                      className={`${inputBase} ${errors.email ? borderErr : borderOk}`}
                      aria-invalid={errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs font-medium text-[#e57373]">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>

                  {/* Contact */}
                  <div>
                    <label htmlFor="contact" className="mb-1.5 block text-sm font-semibold text-[#282828]">
                      Contact number <span className="text-[#e57373]">*</span>
                    </label>
                    <input
                      id="contact"
                      type="tel"
                      required
                      value={form.contact}
                      onChange={(e) => update("contact", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className={`${inputBase} ${errors.contact ? borderErr : borderOk}`}
                      aria-invalid={errors.contact}
                    />
                    {errors.contact && (
                      <p className="mt-1 text-xs font-medium text-[#e57373]">
                        Please enter your contact number.
                      </p>
                    )}
                  </div>

                  {/* Industry dropdown */}
                  <div>
                    <label htmlFor="industry" className="mb-1.5 block text-sm font-semibold text-[#282828]">
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        id="industry"
                        value={form.industry}
                        onChange={(e) => update("industry", e.target.value)}
                        className={`${inputBase} ${borderOk} cursor-pointer appearance-none pr-10`}
                      >
                        <option value="">Select your industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9aaaaa]"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Preferred time dropdown */}
                  <div>
                    <label htmlFor="preferredTime" className="mb-1.5 block text-sm font-semibold text-[#282828]">
                      Preferred time to connect
                    </label>
                    <div className="relative">
                      <select
                        id="preferredTime"
                        value={form.preferredTime}
                        onChange={(e) => update("preferredTime", e.target.value)}
                        className={`${inputBase} ${borderOk} cursor-pointer appearance-none pr-10`}
                      >
                        <option value="">Pick a date & time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9aaaaa]"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#02494A] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#035d5e] hover:shadow-[0_12px_30px_-12px_rgba(2,73,74,0.55)]"
                  >
                    Start your free trial
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <p className="text-center text-xs text-[#9aaaaa]">
                    14 days free · No credit card · Cancel anytime
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
