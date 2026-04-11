"use client";

import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

type SelectDropdownOption = {
  value: string;
  label: string;
};

type SelectDropdownProps = {
  id?: string;
  value: string;
  options: SelectDropdownOption[];
  onChange: (value: string) => void;
  className?: string;
  iconClassName?: string;
};

export function SelectDropdown({
  id,
  value,
  options,
  onChange,
  className = "",
  iconClassName = "",
}: SelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        // onFocus={() => setIsOpen(true)}
        onClick={() => setIsOpen((current) => !current)}
        onBlur={() => setIsOpen(false)}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        className={`w-full appearance-none rounded-[16px] border border-[#d7e3ec] bg-white px-5 py-4 pr-14 font-space-grotesk text-[1rem] font-bold text-[#2D8BBA] shadow-[0_12px_30px_rgba(105,140,170,0.2)] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#4AA8D6] focus:shadow-[0_0_0_3px_rgba(74,168,214,0.16)] ${className}`.trim()}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        className={`pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[1.75rem] text-[#2D8BBA] ${iconClassName}`.trim()}
      >
        {isOpen ? <HiChevronUp /> : <HiChevronDown />}
      </span>
    </div>
  );
}
