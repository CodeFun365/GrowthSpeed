import { useEffect, useState } from "react";
import SaplingLogo from "./SaplingLogo";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { submitToGoogleForm } from "../lib/googleForm";

const trustLogos = ["Northwind", "Lumen", "Pebble", "Cassia", "Verdant", "Mira"];

/* Marselle AI messages that cycle dynamically */
const marselleMessages = [
  "Drafts three social posts every day based on your brand guide.",
  "Optimizes your Meta ad spend hourly for the best return.",
  "Writes and schedules your weekly email newsletter automatically.",
  "Analyzes competitor content and finds your next opportunity.",
  "Publishes SEO articles tuned to what your audience is searching.",
];h

/* Stat cards with distinct colors */
const statCards = [
  { label: "Reach", value: "1.2M", color: "#2FBABC" },
  { label: "Pipeline", value: "+38%", color: "#6366F1" },
  { label: "Open rate", value: "52%", color: "#F59E0B" },
];

/* Task items with colored icons */
const tasks = [
  { label: "Meta ads targeted", pct: 100, color: "#2FBABC", icon: "#D4F7F8" },
  { label: "Email flow drafted", pct: 72, color: "#6366F1", icon: "#E0E7FF" },
  { label: "SEO article live", pct: 90, color: "#F59E0B", icon: "#FEF3C7" },
];

/* Animated line chart points (normalized 0-1, low to high = upward growth) */
const chartPoints = [0.12, 0.2, 0.16, 0.32, 0.42, 0.38, 0.56, 0.64, 0.78, 0.9];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* Cycling Marselle AI message */
  const [msgIndex, setMsgIndex] = useState(0);
  const [msgFade, setMsgFade] = useState(true);

  /* Animated chart */
  const [chartProgress, setChartProgress] = useState(0);
  const [donutProgress, setDonutProgress] = useState(0);

  /* Animated stat counters */
  const [statRevealed, setStatRevealed] = useState(false);

  /* Active task (hover/rotate) */
  const [activeTask, setActiveTask] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setChartProgress(1);
      setDonutProgress(1);
      setStatRevealed(true);
      return;
    }

    /* Chart draw animation */
    const chartTimer = setTimeout(() => setChartProgress(1), 400);
    const donutTimer = setTimeout(() => setDonutProgress(1), 700);
    const statTimer = setTimeout(() => setStatRevealed(true), 200);

    /* Cycling messages */
    const cycle = setInterval(() => {
      setMsgFade(false);
      setTimeout(() => {
        setMsgIndex((i) => (i + 1) % marselleMessages.length);
        setMsgFade(true);
      }, 350);
    }, 3400);

    /* Rotating active task */
    const taskCycle = setInterval(() => {
      setActiveTask((i) => (i + 1) % tasks.length);
    }, 2600);

    return () => {
      clearTimeout(chartTimer);
      clearTimeout(donutTimer);
      clearTimeout(statTimer);
      clearInterval(cycle);
      clearInterval(taskCycle);
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitting(true);
    try {
      await submitToGoogleForm(email);
      setSent(true);
    } catch {
      setSent(true); // Still show success to user
    } finally {
      setSubmitting(false);
    }
  };

  /* Build animated chart path */
  const W = 200;
  const H = 90;
  const visibleCount = Math.max(
    2,
    Math.ceil(chartPoints.length * chartProgress)
  );
  const pts = chartPoints.slice(0, visibleCount).map((v, i) => {
    const x = (i / (chartPoints.length - 1)) * W;
    const y = H - v * (H - 12) - 6;
    return [x, y] as const;
  });
  const linePath = pts
    .map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`))
    .join(" ");
  const areaPath =
    pts.length > 1
      ? `${linePath} L${pts[pts.length - 1][0]},${H} L${pts[0][0]},${H} Z`
      : "";
  const lastPt = pts[pts.length - 1];

  /* Donut: 68% growth */
  const donutPct = 68 * donutProgress;
  const circumference = 2 * Math.PI * 28;

  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft radial glows */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] glow-teal floaty" aria-hidden="true" />
      <div className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] glow-teal" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:pb-28 lg:pt-20">
        {/* Left */}
        <div>
          <Reveal delay={80}>
            <h1 className="mt-5 text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#0b1f1f] sm:text-[46px] lg:text-[54px]">
              Your Personal AI Marketing Team.{" "}
              <span className="text-[#02494A]">Taking Care of It All, 24/7.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5b6b6b] sm:text-lg">
              All-in-one AI agent that proactively runs marketing for every
              individual and company. It knows how you work and what works best
              for you, getting smarter every day.
            </p>
          </Reveal>

          <Reveal delay={240} className="hidden sm:block">
            <form
              onSubmit={submit}
              className="mt-7 flex flex-col gap-3 sm:max-w-md sm:flex-row"
              aria-label="Start your free trial"
            >
              <label htmlFor="hero-email" className="sr-only">
                Work email
              </label>
              <input
                id="hero-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSent(false);
                }}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-[#e3eaea] bg-white px-5 text-sm text-[#0b1f1f] placeholder:text-[#9aaaaa] focus:border-[#2FBABC] focus:outline-none focus:ring-2 focus:ring-[#2FBABC]/30"
              />
              <CtaButton onClick={undefined} href="https://docs.google.com/forms/d/e/1FAIpQLSeng0BLDvHeKtSxoWX41kt5_CCFBwR6RlLV4DS5M6QJ36tMaw/viewform" className="h-12 shrink-0">
                {submitting ? "Sending..." : "Start your free trial"}
              </CtaButton>
            </form>
          </Reveal>

          <Reveal delay={300} className="hidden sm:block">
            <p className="mt-3 text-xs font-medium text-[#7d8d8d]">
              14 days free · No credit card · Cancel anytime
            </p>
          </Reveal>

          {sent && (
            <p className="mt-3 text-sm font-semibold text-[#02494A]" role="status">
              Thanks! Your details have been received. We'll set up your team right away.
            </p>
          )}

        </div>

        {/* Right — dynamic glassmorphism dashboard */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* glow behind */}
            <div className="pointer-events-none absolute inset-0 glow-teal-strong rounded-[40px]" aria-hidden="true" />

            {/* Floating annotation card (top-left) — cycling Marselle AI messages */}
            <div className="absolute -top-5 -left-3 z-20 max-w-[230px] rounded-2xl border border-white/60 bg-white/75 p-3.5 shadow-[0_12px_30px_-12px_rgba(2,73,74,0.25)] backdrop-blur-md sm:-left-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#2FBABC]/15 text-[#2FBABC]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2FBABC]/40" />
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[11px] font-bold text-[#2FBABC]">Marselle AI</span>
              </div>
              <p
                className="mt-1.5 text-[11px] leading-snug text-[#5b6b6b] transition-opacity duration-300"
                style={{ opacity: msgFade ? 1 : 0 }}
                aria-live="polite"
              >
                {marselleMessages[msgIndex]}
              </p>
            </div>

            {/* Main glass container */}
            <div className="relative rounded-[24px] border border-white/50 bg-white/40 p-3 shadow-[0_30px_70px_-40px_rgba(2,73,74,0.35)] backdrop-blur-md sm:p-4">
              <div className="flex gap-3">
                {/* Sidebar */}
                <aside className="hidden w-[58px] shrink-0 flex-col gap-2 rounded-[16px] border border-white/50 bg-white/50 p-2.5 backdrop-blur-sm sm:flex">
                  <div className="flex items-center justify-center">
                    <SaplingLogo className="h-6 w-6" />
                  </div>
                  <div className="mt-2 flex flex-col gap-2">
                    {[
                      { active: true, shape: "rounded-lg", color: "#2FBABC" },
                      { active: false, shape: "rounded-lg", color: "#D4F7F8" },
                      { active: false, shape: "rounded-xl", color: "#D4F7F8" },
                      { active: false, shape: "rounded-lg", color: "#D4F7F8" },
                      { active: false, shape: "rounded-lg", color: "#D4F7F8" },
                    ].map((nav, i) => (
                      <span
                        key={i}
                        className={`h-8 w-full ${nav.shape} transition-colors duration-500`}
                        style={{ backgroundColor: nav.active ? nav.color : "#D4F7F8" }}
                      />
                    ))}
                  </div>
                </aside>

                {/* Main panel */}
                <div className="min-w-0 flex-1 rounded-[16px] border border-white/50 bg-white/55 p-3.5 backdrop-blur-sm sm:p-4">
                  {/* Top bar with live badge */}
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-20 rounded-full bg-[#02494A]/15" />
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#2FBABC]/12 px-2 py-0.5 text-[8px] font-bold text-[#02494A]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2FBABC] opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2FBABC]" />
                      </span>
                      LIVE
                    </span>
                  </div>

                  {/* Stat cards — colored, animated reveal */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {statCards.map((s, i) => (
                      <div
                        key={s.label}
                        className="rounded-lg border border-white/40 bg-white/50 p-2.5 transition-all duration-500"
                        style={{
                          opacity: statRevealed ? 1 : 0,
                          transform: statRevealed
                            ? "translateY(0)"
                            : "translateY(8px)",
                          transitionDelay: `${i * 120}ms`,
                        }}
                      >
                        <div className="flex items-center gap-1">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: s.color }}
                          />
                          <span className="text-[8px] font-medium text-[#7d8d8d]">
                            {s.label}
                          </span>
                        </div>
                        <div
                          className="mt-1.5 text-[13px] font-extrabold"
                          style={{ color: s.color }}
                        >
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area: animated line chart + donut */}
                  <div className="mt-3 rounded-[12px] border border-white/40 bg-white/40 p-3 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold text-[#0b1f1f]">
                        Pipeline growth
                      </span>
                      <span className="text-[10px] font-extrabold text-[#2FBABC]">
                        +38%
                      </span>
                    </div>

                    <div className="mt-2 flex items-end gap-3">
                      {/* Animated line chart */}
                      <div className="flex-1">
                        <svg
                          viewBox={`0 0 ${W} ${H}`}
                          className="h-[80px] w-full"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient id="heroLineFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#2FBABC" stopOpacity="0.28" />
                              <stop offset="100%" stopColor="#2FBABC" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {[18, 36, 54, 72].map((y) => (
                            <line key={y} x1="0" y1={y} x2={W} y2={y} stroke="#D4F7F8" strokeWidth="1" />
                          ))}
                          {areaPath && (
                            <path d={areaPath} fill="url(#heroLineFill)" />
                          )}
                          {pts.length > 1 && (
                            <path
                              d={linePath}
                              fill="none"
                              stroke="#2FBABC"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          )}
                          {lastPt && (
                            <circle
                              cx={lastPt[0]}
                              cy={lastPt[1]}
                              r="3.5"
                              fill="#2FBABC"
                            >
                              <animate
                                attributeName="r"
                                values="3.5;5;3.5"
                                dur="1.6s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                        </svg>
                      </div>

                      {/* Animated donut chart */}
                      <div className="relative h-[72px] w-[72px] shrink-0">
                        <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90" aria-hidden="true">
                          <circle cx="36" cy="36" r="28" fill="none" stroke="#D4F7F8" strokeWidth="8" />
                          <circle
                            cx="36"
                            cy="36"
                            r="28"
                            fill="none"
                            stroke="#2FBABC"
                            strokeWidth="8"
                            strokeDasharray={`${(donutPct / 100) * circumference} ${circumference}`}
                            strokeLinecap="round"
                            style={{ transition: "stroke-dasharray 1.2s ease-out" }}
                          />
                          <circle
                            cx="36"
                            cy="36"
                            r="28"
                            fill="none"
                            stroke="#6366F1"
                            strokeWidth="8"
                            strokeDasharray={`${(22 * donutProgress / 100) * circumference} ${circumference}`}
                            strokeDashoffset={`-${(donutPct / 100) * circumference}`}
                            strokeLinecap="round"
                            style={{ transition: "stroke-dasharray 1.2s ease-out 0.2s" }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-sm font-extrabold text-[#02494A]">
                            {Math.round(donutPct)}%
                          </span>
                          <span className="text-[8px] text-[#7d8d8d]">Growth</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom row: task items — active highlight rotates */}
                  <div className="mt-3 space-y-2">
                    {tasks.map((task, i) => (
                      <div
                        key={task.label}
                        className="flex items-center gap-2.5 rounded-lg border px-2.5 py-2 backdrop-blur-sm transition-all duration-300"
                        style={{
                          backgroundColor:
                            activeTask === i ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
                          borderColor:
                            activeTask === i ? `${task.color}55` : "rgba(255,255,255,0.4)",
                          transform: activeTask === i ? "translateX(2px)" : "translateX(0)",
                        }}
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                          style={{ backgroundColor: task.icon }}
                        >
                          {task.pct === 100 && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <path d="M5 12l4 4L19 7" stroke={task.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-[#0b1f1f]">
                          {task.label}
                        </span>
                        <span className="h-1.5 w-12 shrink-0 overflow-hidden rounded-full bg-[#D4F7F8]">
                          <span
                            className="block h-full rounded-full transition-all duration-700"
                            style={{
                              width: statRevealed ? `${task.pct}%` : "0%",
                              backgroundColor: task.color,
                            }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating status chip (bottom) */}
            <div className="absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-[#02494A] px-4 py-2.5 shadow-[0_18px_40px_-20px_rgba(2,73,74,0.7)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2FBABC]/25 text-[#2FBABC]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-[12px] font-medium text-white">
                Your business grows 24x7
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
