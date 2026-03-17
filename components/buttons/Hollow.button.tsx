import React from "react";
interface hollowProps {
  title: string;
}
export default function Hollow({ title }: hollowProps) {
  return (
    <button className="text-blue-600 px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold text-lg">
      {title}
    </button>
  );
}
