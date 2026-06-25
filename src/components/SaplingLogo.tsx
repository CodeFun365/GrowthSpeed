type Props = {
  className?: string;
  stem?: string;
  leaf?: string;
  leafSoft?: string;
};

export default function SaplingLogo({
  className = "h-8 w-8",
  stem = "#02494A",
  leaf = "#2FBABC",
  leafSoft = "#7fd6cf",
}: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <path d="M32 56V28" stroke={stem} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M32 30c0-8 5.5-13.5 13-13.5C45 24 39.5 30 32 30Z" fill={leaf} />
      <path d="M32 34c0-7-4.2-11-10.5-11C21.5 30 25.7 34 32 34Z" fill={leafSoft} />
      <path d="M32 56c0-3.4 2.4-5.8 5.8-5.8" stroke={leaf} strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
