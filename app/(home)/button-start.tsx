'use client';

import { Button } from '@/components/ui/button';
import { SafeUser } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ButtonStartProps {
  currentUser: SafeUser | null;
}

export const ButtonStart = ({ currentUser }: ButtonStartProps) => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => {
        router.push(currentUser ? '/home' : '/login');
      }}
    >
      <Image src="/icon/start.png" alt="" width={200} height={60} />
    </Button>
  );
};
