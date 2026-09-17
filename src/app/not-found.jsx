import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col justify-center items-center text-center px-6">
      <h1 className="font-['Epilogue'] text-9xl font-bold text-[#C1603A] mb-4">404</h1>
      <h2 className="font-['Epilogue'] text-3xl md:text-4xl text-[#24211E] font-bold mb-6">Page Not Found</h2>
      <p className="font-['Literata'] text-xl text-[#24211E] max-w-lg mb-10">
        The system architecture you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="px-8 py-3 bg-[#C1603A] text-[#FAF6F0] font-['Epilogue'] uppercase tracking-wider text-sm font-bold transition-colors hover:bg-transparent hover:text-[#C1603A] border-2 border-[#C1603A]">
        Return to Core System
      </Link>
    </div>
  );
}
