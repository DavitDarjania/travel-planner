"use client";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <input
      placeholder="Search countries..."
      onChange={(e) => {
        const params = new URLSearchParams(searchParams.toString());
        if (e.target.value) {
          params.set("search", e.target.value);
        } else {
          params.delete("search"); // ← remove it when empty
        }

        router.push(`?${params.toString()}`);
      }}
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
}
export function FilterInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <select
      onChange={(e) => {
        const params = new URLSearchParams(searchParams.toString());

        if (e.target.value === "All") {
          params.delete("filter"); // ← clean URL when no filter
        } else {
          params.set("filter", e.target.value);
        }

        router.push(`?${params.toString()}`);
      }}
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
    >
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Antarctica">Antarctica</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="North America">North America</option>
      <option value="Oceania">Oceania</option>
      <option value="South America">South America</option>
    </select>
  );
}
