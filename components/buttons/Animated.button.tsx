import React from "react";

interface animatedProps {
  title: string;
  // action: () => void;
}

export default function Animated({ title }: animatedProps) {
  return (
    <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      {title}
    </button>
  );
}
