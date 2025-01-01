'use client';

import { ButtonNextPrevious } from '@/components/button-next-previous';
import { Dot } from 'lucide-react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const CardConclusion = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-xs sm:max-w-xl ">
          {/* Text at the top left */}
          <Image src="/icon/child.png" alt="" width={100} height={60} />
          <div className="top-0 left-0 flex flex-col space-y-2">
            <h3 className="bg-red-600 rounded-md text-amber-200 w-[130px]  p-1 font-black text-sm text-center uppercase">Kesimpulan</h3>
          </div>
        </div>
        <div className="bg-lime-100 rounded-xl max-w-xs sm:max-w-xl shadow-lg border-2 border-r-gray-800 border-b-gray-800">
          <div className={`${inter.className} px-6 py-4 text-sm leading-relaxed`}>
            <div className="flex items-center justify-between">
              <Dot className=" text-emerald-500 -ml-8 -mt-6" size={60} />
              <Dot className=" text-emerald-500 -mr-8 -mt-6" size={60} />
            </div>
            <h1 className="font-semibold -mt-8">Definisi</h1>
            <div className="space-y-3">
              <p className="text-justify">Surat adalah salah satu alat komunikasi untuk menyampaikan informasi atau pesan secara tertulis.</p>
              <p className="text-justify">Surat pribadi merupakan jenis surat yang berisi keperluan pribadi yang biasanya ditulis dengan secara pribadi dan ditujukan kepada orang lain atau instansi (dinas).</p>
              <p className="text-justify">Surat dinas adalah alat komunikasi tertulis untuk menyampaikan berita atau informasi yang berisi hal-hal yang berhubungan dengan kedinasan atau kegiatan dinas sebuah instansi pemerintah.</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs sm:max-w-xl rounded-xl bg-amber-300 p-4 mt-8 ">
          <div className="bg-amber-200 p-4 rounded-xl -mt-8 relative">
            <p>Fungsi surat yaitu untuk menuliskan pesan kepada orang lain.</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-lg mt-4">
        <ButtonNextPrevious onClick={() => router.back()} isLeft={true} />
      </div>
    </>
  );
};
