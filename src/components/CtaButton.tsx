import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "light" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function CtaButton({
  children,
    href = "https://docs.google.com/forms/d/e/1FAIpQLSeng0BLDvHeKtSxoWX41kt5_CCFBwR6RlLV4DS5M6QJ36tMaw/viewform",
  variant = "primary",
  className = "",
  onClick,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

  const styles = {
    primary:
      "bg-[#02494A] text-white hover:bg-[#035d5e] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(2,73,74,0.55)]",
    light:
      "bg-white text-[#02494A] hover:bg-[#F6F8F8] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(2,73,74,0.45)]",
    ghost:
      "bg-transparent text-[#02494A] ring-1 ring-[#02494A]/20 hover:bg-[#02494A]/5",
  } as const;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
