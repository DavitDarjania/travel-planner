import React from "react";

type Props = {
  count: number;
  title: string;
  description: string;
};

export default function HowCard({ count, description, title }: Props) {
  return (
    <div
      className="text-center"
      data-yw="c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5MDoxNA"
    >
      <div
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
        data-yw="c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5MToxNg"
        data-yw-t="true"
      >
        {count}
      </div>
      <h4
        className="font-semibold text-gray-900 mb-2"
        data-yw="c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5NDoxNg"
        data-yw-t="true"
      >
        {title}
      </h4>
      <p
        className="text-gray-600 text-sm"
        data-yw="c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA5NToxNg"
        data-yw-t="true"
      >
        {description}
      </p>
    </div>
  );
}
