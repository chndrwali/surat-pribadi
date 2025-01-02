'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const image = [
  { id: 1, img: '/icon/cendrawasih.jpg' },
  { id: 2, img: '/icon/raksasa.jpg' },
  { id: 3, img: '/icon/naga.jpg' },
  { id: 4, img: '/icon/keong.jpg' },
];

export const LiveWork = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  // Calculate the items to display based on the current page
  const currentItems = image.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Check if there are more items to display
  const hasNextPage = (currentPage + 1) * itemsPerPage < image.length;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative mb-8 flex items-center gap-2">
        <Image src="/bg/ubur.png" alt="Mascot character" width={60} height={60} className="h-[60px] w-auto" />
        <h1 className="rounded-full bg-[#90c95b] px-6 py-2 text-xl font-bold text-white">AKTIVITAS 2</h1>
      </div>

      <h2 className="mb-6 text-center text-xl font-semibold uppercase text-gray-800">Pilihlah tema cerpen dibawah ini, lalu baca bersama teman kelompokmu!</h2>

      {/* Laptop frame */}
      <div className="relative mx-auto w-full max-w-[900px]">
        <div className={` px-6 py-4 space-y-4 flex flex-col items-center`}>
          {currentItems.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger>
                <Image src={image.img} alt="" width={300} height={300} />
              </DialogTrigger>
              <DialogContent className="max-w-[900px] w-[90%]">
                <DialogHeader>
                  <DialogTitle>Cerpen</DialogTitle>
                </DialogHeader>
                <div className="max-h-[75vh] overflow-y-auto px-2 ">
                  <Image src={image.img} alt="" width={600} height={300} className="object-cover" />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex gap-2">
          {currentPage > 0 ? (
            <Button variant="outline" size="icon" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          ) : (
            <Button variant="outline" size="icon" onClick={() => router.back()}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
          {hasNextPage ? (
            <Button variant="outline" size="icon" onClick={() => setCurrentPage((prev) => prev + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button variant="outline" size="icon" onClick={() => router.push('/practice/activity-three')}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
