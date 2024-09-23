"use client";

import { ButtonProps } from "@/lib/types/types";

const ButtonEl = ({ className, width = "w-max", text, icon, children, ...props }: ButtonProps): JSX.Element => {
  switch (props.variant) {
    case "primary":
      return (
        <button
          onClick={props.onClick}
          className={`${className} ${width} bg-black text-white font-semibold rounded-xl px-12 sm:px-16 py-3.5`}
        >
          {!children && text && icon && (
            <span
              className={`flex items-center gap-1.5 ${
                icon.align === "left" ? "flex-row-reverse" : ""
              }`}
            >
              {text}
              <span className="text-lg">{icon.src}</span>
            </span>
          )}
          {!children && !icon && text}
          {!text && !icon && children}
        </button>
      );

    case "bordered":
      return (
        <button
          onClick={props.onClick}
          className={`${className} border-2 border-black text-black font-semibold rounded-xl px-12 sm:px-16 py-3.5`}
        >
          {!children && text && icon && (
            <span
              className={`flex items-center gap-1.5 ${
                icon.align === "left" ? "flex-row-reverse" : ""
              }`}
            >
              {text}
              <span className="text-lg">{icon.src}</span>
            </span>
          )}
          {!children && !icon && text}
          {!text && !icon && children}
        </button>
      );

    default:
      throw new Error(`Unsupported variant: ${props.variant}`);
  }
};

export default ButtonEl;