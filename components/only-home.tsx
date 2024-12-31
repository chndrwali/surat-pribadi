import { House } from 'lucide-react';
import Link from 'next/link';

export const OnlyHome = () => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
      <Link
        href="/"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-primary hover:shadow-xl hover:opacity-90 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-background"
      >
        <House size={24} />
      </Link>
    </div>
  );
};
