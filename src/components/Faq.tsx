"use client";

import { useState } from "react";
import { faqs } from "@/config/site";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? "border-brand-200 bg-brand-50/50" : "border-slate-100 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-sm font-semibold text-brand-900 sm:text-base">
                {faq.question}
              </span>
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-brand-600 text-white" : "bg-slate-100 text-brand-700"
                }`}
              >
                <svg
                  className={`h-4 w-4 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
