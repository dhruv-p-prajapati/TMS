import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, placeholder, label, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className="relative block rounded border border-foreground shadow-sm focus-within:border-foreground focus-within:ring-0"
      >
        <input
          type={type || "text"}
          id={id}
          className="peer border-foreground bg-transparent placeholder-transparent placeholder:select-none focus:placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-0 px-4 py-3 w-full"
          placeholder={placeholder}
          ref={ref}
          {...props}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-foreground transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs">
          {label}
        </span>
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
