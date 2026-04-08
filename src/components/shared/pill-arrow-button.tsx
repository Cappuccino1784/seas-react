import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

type PillArrowButtonVariant = "brand" | "light" | "outline-light";

type PillArrowButtonProps = {
  href: string;
  label: string;
  className?: string;
  variant?: PillArrowButtonVariant;
};

const variantClasses: Record<PillArrowButtonVariant, string> = {
  brand:
    "bg-[linear-gradient(90deg,#2D8BBA_0%,#2D8BBA_100%)] text-white shadow-[0_4px_24px_rgba(45,139,186,0.28)] before:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.16)_46%,rgba(255,255,255,0.32)_52%,rgba(255,255,255,0.16)_58%,transparent_100%)] after:bg-black/10 hover:shadow-[0_14px_34px_rgba(45,139,186,0.34)]",
  light:
    "border-2 border-white bg-white text-[#2D8BBA] shadow-[0_4px_24px_rgba(255,255,255,0.16)] before:bg-[linear-gradient(120deg,transparent_0%,rgba(45,139,186,0.08)_46%,rgba(45,139,186,0.18)_52%,rgba(45,139,186,0.08)_58%,transparent_100%)] after:bg-[#d9f1fb] hover:shadow-[0_10px_22px_rgba(255,255,255,0.16)]",
  "outline-light":
    "border-2 border-white bg-transparent text-white shadow-[0_4px_24px_rgba(4,77,97,0.14)] before:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_46%,rgba(255,255,255,0.22)_52%,rgba(255,255,255,0.12)_58%,transparent_100%)] after:bg-white/12 hover:shadow-[0_14px_34px_rgba(4,77,97,0.22)]",
};

export function PillArrowButton({
  href,
  label,
  className = "",
  variant = "brand",
}: PillArrowButtonProps) {
  return (
    <Link href={href}>
      <div
        className={`group relative isolate inline-flex min-h-[44px] min-w-[232px] items-center justify-center gap-3 overflow-hidden rounded-full px-6 font-space-grotesk text-[1.05rem] font-semibold uppercase transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:inset-0 before:-translate-x-[130%] before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:before:translate-x-[130%] after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:opacity-100 ${variantClasses[variant]} ${className}`.trim()}
      >
        <span className="relative z-[1]">{label}</span>
        <HiArrowRight
          aria-hidden="true"
          className="relative z-[1] text-[1.35rem]"
        />
      </div>
    </Link>
  );
}
