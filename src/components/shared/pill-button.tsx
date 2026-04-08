type PillButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function PillButton({
  label,
  isActive = false,
  onClick,
  className = "",
  type = "button",
}: PillButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        "group relative isolate min-w-[126px] cursor-pointer overflow-hidden rounded-full border-2 px-6 py-3 font-lexend text-[1rem] font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01] before:absolute before:inset-0 before:-translate-x-[130%] before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:before:translate-x-[130%] after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:opacity-100",
        isActive
          ? "border-[#2D8BBA] bg-[#2D8BBA] text-white shadow-[0_4px_20px_rgba(45,139,186,0.18)] before:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.16)_46%,rgba(255,255,255,0.3)_52%,rgba(255,255,255,0.16)_58%,transparent_100%)] after:bg-black/8 hover:border-[#247ba4] hover:shadow-[0_12px_28px_rgba(45,139,186,0.28)]"
          : "border-[#2D8BBA] bg-white text-[#2D8BBA] shadow-[0_4px_18px_rgba(150,199,224,0.12)] before:bg-[linear-gradient(120deg,transparent_0%,rgba(45,139,186,0.08)_46%,rgba(45,139,186,0.18)_52%,rgba(45,139,186,0.08)_58%,transparent_100%)] after:bg-[#dff2fb] hover:border-[#1f88ba] hover:text-[#1f88ba] hover:shadow-[0_12px_26px_rgba(45,139,186,0.16)]",
        className,
      ].join(" ")}
    >
      <span className="relative z-[1]">{label}</span>
    </button>
  );
}
