import React from "react";

interface LandingCardProps {
  children: React.ReactNode;
  iconBg: keyof typeof iconBgMap;
  title: string;
  description: string;
}
const iconBgMap = {
  blue: "bg-blue-100",
  green: "bg-green-100",
  purple: "bg-purple-100",
} as const;

export default function LandingCard({
  children,
  iconBg,
  title,
  description,
}: LandingCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div
        className={`w-16 h-16 ${iconBgMap[iconBg]} rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        {children}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
