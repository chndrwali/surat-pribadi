'use client';

import { ButtonNextPrevious } from '@/components/button-next-previous';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const CardExample = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-4">
        {/* Header section */}
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[70px]">
          {/* Text at the top left */}
          <div className="absolute top-0 left-0 flex flex-col space-y-2">
            <h2 className=" rounded-md bg-amber-200 w-[150px] -ml-8 p-1 font-black text-sm uppercase text-center text-red-600 -rotate-3">Contoh</h2>
            <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4 w-[130px]  p-1 font-black text-sm text-center uppercase">Surat pribadi</h3>
          </div>
        </div>

        {/* Content Box */}
        <div className=" max-w-xs sm:max-w-xl">
          <div className={` px-6 py-4 space-y-4 text-xs sm:text-sm leading-relaxed`}>
            <Dialog>
              <DialogTrigger>
                <Image src="/icon/pribadi.jpeg" alt="" width={300} height={300} />
              </DialogTrigger>
              <DialogContent className="max-w-[900px] w-[90%]">
                <DialogHeader>
                  <DialogTitle>Contoh</DialogTitle>
                </DialogHeader>
                <div className="max-h-[75vh] overflow-y-auto px-2 ">
                  <Image src="/icon/pribadi.jpeg" alt="" width={600} height={300} className="object-cover" />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-lg mt-4">
        <ButtonNextPrevious onClick={() => router.back()} isLeft={true} />
        <ButtonNextPrevious onClick={() => router.push('/learning-materials/example/dinas')} isLeft={false} />
      </div>
    </>
  );
};
