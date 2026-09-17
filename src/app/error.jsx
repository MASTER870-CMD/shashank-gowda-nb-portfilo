'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col justify-center items-center text-center px-6">
      <h1 className="font-['Epilogue'] text-6xl md:text-8xl font-bold text-[#C1603A] mb-6">System Fault</h1>
      <h2 className="font-['Epilogue'] text-2xl md:text-3xl text-[#24211E] font-bold mb-6">An unexpected error occurred.</h2>
      <p className="font-['Literata'] text-lg text-[#24211E] max-w-lg mb-10">
        A critical error happened during execution. Please try again or return to the main dashboard.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button onClick={() => reset()} className="px-8 py-3 bg-[#24211E] text-[#FAF6F0] font-['Epilogue'] uppercase tracking-wider text-sm font-bold transition-colors hover:bg-transparent hover:text-[#24211E] border-2 border-[#24211E]">
          Re-Initialize
        </button>
        <a href="/" className="px-8 py-3 bg-[#C1603A] text-[#FAF6F0] font-['Epilogue'] uppercase tracking-wider text-sm font-bold transition-colors hover:bg-transparent hover:text-[#C1603A] border-2 border-[#C1603A]">
          Return Home
        </a>
      </div>
    </div>
  );
}
