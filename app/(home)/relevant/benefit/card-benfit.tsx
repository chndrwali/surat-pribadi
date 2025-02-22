'use client';

import { ButtonNextPrevious } from '@/components/button-next-previous';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const CardBenefit = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header section */}
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[70px]">
          {/* Text at the top left */}
          <div className="absolute top-0 left-0 flex flex-col space-y-2">
            <h2 className=" rounded-md bg-amber-200 w-[80px] -ml-8 p-1 font-black text-sm uppercase text-center text-red-600 -rotate-3">Capaian</h2>
            <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4 w-[130px]  p-1 font-black text-sm text-center uppercase">Pembelajaran</h3>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-yellow-400 rounded-xl max-w-xs sm:max-w-xl shadow-lg border border-gray-800">
          <div className={`${inter.className} px-6 py-4 space-y-4 text-sm leading-relaxed`}>
            <p className="text-justify">Peserta didik mampu menulis berbagai teks sederhana dengan rangkaian kalimat yang beragam dan informasi mengenai hal-hal menarik di lingkungan sekitar.</p>
          </div>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[70px]">
          {/* Text at the top left */}
          <div className="absolute top-0 left-0 flex flex-col space-y-2">
            <h2 className=" rounded-md bg-amber-200 w-[80px] -ml-8 p-1 font-black text-sm uppercase text-center text-red-600 -rotate-3">Tujuan</h2>
            <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4 w-[130px]  p-1 font-black text-sm text-center uppercase">Pembelajaran</h3>
          </div>
        </div>
        <div className="bg-yellow-400 rounded-xl max-w-xs sm:max-w-xl shadow-lg border border-gray-800">
          <div className={`${inter.className} px-6 py-4 space-y-4 text-sm leading-relaxed`}>
            <p className="text-justify">Setelah peserta didik mempelajari aplikasi ini peserta didik dapat membuat surat dinas dengan baik dan benar. </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-lg mt-4">
        <ButtonNextPrevious onClick={() => router.back()} isLeft={true} />
        <ButtonNextPrevious onClick={() => router.push('/relevant/developer')} isLeft={false} />
      </div>
    </>
  );
};
