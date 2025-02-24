'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowBigLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const CardExampleDinas = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-4">
        {/* Header section */}
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[70px]">
          {/* Text at the top left */}
          <div className="absolute top-0 left-0 flex flex-col space-y-2">
            <h2 className=" rounded-md bg-amber-200 w-[150px] -ml-8 p-1 font-black text-sm uppercase text-center text-red-600 -rotate-3">Contoh</h2>
            <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4 w-[130px]  p-1 font-black text-sm text-center uppercase">Surat dinas</h3>
          </div>
        </div>

        {/* Content Box */}
        <div className=" max-w-xs sm:max-w-xl">
          <div className={` px-6 py-4 space-y-4 flex flex-col items-center`}>
            <Dialog>
              <DialogTrigger>
                <Image src="/icon/struktur-formal-1.png" alt="" width={300} height={300} />
              </DialogTrigger>
              <DialogContent className="max-w-[900px] w-[90%]">
                <DialogHeader>
                  <DialogTitle>Contoh</DialogTitle>
                </DialogHeader>
                <div className="max-h-[75vh] overflow-y-auto px-2 ">
                  <Image src="/icon/struktur-formal-1.png" alt="" width={600} height={300} className="object-cover" />
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Image src="/icon/struktur-formal-2.png" alt="" width={300} height={300} />
              </DialogTrigger>
              <DialogContent className="max-w-[900px] w-[90%]">
                <DialogHeader>
                  <DialogTitle>Contoh</DialogTitle>
                </DialogHeader>
                <div className="max-h-[75vh] overflow-y-auto px-2 ">
                  <Image src="/icon/struktur-formal-2.png" alt="" width={600} height={300} className="object-cover" />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <button
          onClick={() => router.back()}
          className={`mt-4 border-4 border-yellow-700 outline outline-8 outline-yellow-600  flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-12 hover:bg-yellow-500`}
        >
          <ArrowBigLeft className="size-6" />
        </button>
      </div>
    </>
  );
};
