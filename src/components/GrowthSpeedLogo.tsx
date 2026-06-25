type Props = {
  className?: string;
};

/**
 * GrowthSpeed wordmark — enterprise Inter typography with a refined
 * rocket head pointing upward above the final "d", symbolising growth.
 * "Growth" is near-black, "Speed" is deep teal.
 */
export default function GrowthSpeedLogo({ className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-baseline font-extrabold tracking-tight ${className}`}
    >
      <span className="text-[#0b1f1f]">Growth</span>
      <span className="relative text-[#02494A]">
        Speed
        {/* Rocket head pointing up from the "d" ascender */}
        <svg
          className="pointer-events-none absolute left-[calc(100%-0.66em)] top-0 -translate-y-[62%]"
          width="0.5em"
          height="0.8em"
          viewBox="0 0 16 26"
          fill="none"
          aria-hidden="true"
        >
          {/* Rocket body tip (nose cone) */}
          <path
            d="M8 1.5C10 4 11.2 7 11.2 10.5v6.5H4.8v-6.5C4.8 7 6 4 8 1.5z"
            fill="#2FBABC"
          />
          {/* Body highlight */}
          <path
            d="M8 1.5C9 3 9.8 5 10 7.2H6C6.2 5 7 3 8 1.5z"
            fill="#7fd6cf"
            opacity="0.7"
          />
          {/* Window */}
          <circle cx="8" cy="9" r="1.6" fill="#ffffff" opacity="0.9" />
          {/* Fins */}
          <path d="M4.8 12L2 15.5v3.5l2.8-2z" fill="#02494A" />
          <path d="M11.2 12L14 15.5v3.5l-2.8-2z" fill="#02494A" />
          {/* Flame */}
          <path
            d="M8 17v4M6.2 18.2l1.8 4 1.8-4"
            stroke="#2FBABC"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}
