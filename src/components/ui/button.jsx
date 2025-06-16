import React from "react";

export function Button({ children, className, asChild, ...props }) {
  const Component = asChild ? "span" : "button";
  return (
    <Component
      className={`px-4 py-2 border rounded-lg font-semibold transition hover:bg-blue-50 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
