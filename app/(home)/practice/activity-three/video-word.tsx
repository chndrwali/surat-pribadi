'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const VideoWord = () => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative mb-8 flex items-center gap-2">
        <Image src="/bg/ubur.png" alt="Mascot character" width={60} height={60} className="h-[60px] w-auto" />
        <h1 className="rounded-full bg-[#90c95b] px-6 py-2 text-xl font-bold text-white">AKTIVITAS 3</h1>
      </div>
      <h2 className="mb-6 text-center text-xl font-semibold uppercase text-gray-800">Simak Video dibawah ini</h2>

      {/* Laptop frame */}
      <div className="relative mx-auto w-full max-w-[900px]">
        <div className="relative h-0 w-full pb-[56.25%]">
          <iframe
            className="absolute inset-0 h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/_FLh7ao3w5E"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => router.push('/practice/activity-three/word')}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
