import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1160px] mx-auto px-[20px]">
      {children}
    </div>
  );
}