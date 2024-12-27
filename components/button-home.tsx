import UserMenu from '@/components/auth/user-menu';
import { SafeUser } from '@/types';
import { House } from 'lucide-react';
import Link from 'next/link';

interface Props {
  currentUser: SafeUser | null;
}

export const ButtonHome = ({ currentUser }: Props) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
      {/* Tombol WhatsApp */}
      <Link
        href="/"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-primary hover:shadow-xl hover:opacity-90 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-background"
      >
        <House size={24} />
      </Link>
      {currentUser && <UserMenu currentUser={currentUser} />}
    </div>
  );
};
