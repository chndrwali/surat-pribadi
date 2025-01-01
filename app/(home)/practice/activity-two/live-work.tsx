'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const LiveWork = () => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative mb-8 flex items-center gap-2">
        <Image src="/bg/ubur.png" alt="Mascot character" width={60} height={60} className="h-[60px] w-auto" />
        <h1 className="rounded-full bg-[#90c95b] px-6 py-2 text-xl font-bold text-white">AKTIVITAS 2</h1>
      </div>
      <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4 w-[180px]  p-1 font-black text-sm text-center uppercase">Soal Menjodohkan</h3>
      <h2 className="mb-6 text-center text-xl font-semibold uppercase text-gray-800">Klik tomboh dibawah ini untuk memulai</h2>

      {/* Laptop frame */}
      <div className="relative mx-auto w-full max-w-[900px]">
        <div className="relative flex items-center justify-center w-full pb-[56.25%]">
          <Button variant="shine" onClick={() => window.open('https://www.liveworksheets.com/c?a=s&t=ArTM2EpyWs&sr=n&l=ka&i=snnfodf&r=nl&f=dzdcudtu&ms=uz&cd=p-s--5-hi-plcdpllejnelangnkxnzxxg&mw=hs', '_blank')}>
            MULAI
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => router.push('/practice/activity-three')}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
