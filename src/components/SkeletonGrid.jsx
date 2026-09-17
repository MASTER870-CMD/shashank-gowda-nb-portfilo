'use client';
import React from 'react';

function SkeletonCard() {
  return (
    <div className="border-2 border-[#24211E]/10 bg-white flex flex-col overflow-hidden">
      {/* Image area */}
      <div className="relative w-full h-52 bg-[#24211E]/5 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#24211E]/5 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Category + date row */}
        <div className="flex justify-between items-center">
          <div className="h-3 w-16 rounded bg-[#C1603A]/20 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
          <div className="h-3 w-20 rounded bg-[#24211E]/10 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-3/4 rounded bg-[#24211E]/10 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
          <div className="h-5 w-1/2 rounded bg-[#24211E]/10 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </div>

        {/* Desc lines */}
        <div className="space-y-2 flex-1">
          <div className="h-3 w-full rounded bg-[#24211E]/8 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
          <div className="h-3 w-full rounded bg-[#24211E]/8 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
          <div className="h-3 w-2/3 rounded bg-[#24211E]/8 overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-2">
          {[60, 48, 72, 40].map((w, i) => (
            <div key={i} style={{ width: w }} className="h-5 rounded bg-[#24211E]/8 overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Action button area */}
      <div className="border-t-2 border-[#24211E]/10 p-4 flex gap-3">
        <div className="flex-1 h-8 rounded bg-[#24211E]/8 overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
        <div className="flex-1 h-8 rounded bg-[#24211E]/8 overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6, cols = 3 }) {
  const gridClass = cols === 2
    ? 'grid grid-cols-1 md:grid-cols-2 gap-12'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

  return (
    <div className={gridClass}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
