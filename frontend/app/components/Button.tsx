import React from "react";

export default function Button({ text }: { text: string }) {
  return (
    <button className="px-[28px] py-[14px] rounded-[6px] bg-black text-white hover:opacity-85 transition">
      {text}
    </button>
  );
}