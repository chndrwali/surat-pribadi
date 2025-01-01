'use client';

import { ButtonNextPrevious } from '@/components/button-next-previous';
import { Dot } from 'lucide-react';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const CardCharacteristic = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-4">
        {/* Header section */}
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[70px]">
          {/* Text at the top left */}
          <div className="absolute top-0 left-0 flex flex-col space-y-2">
            <h2 className=" rounded-md bg-amber-200 w-[80px] -ml-8 p-1 font-black text-sm uppercase text-center text-red-600 -rotate-3">Ciri-ciri</h2>
            <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4 w-[130px]  p-1 font-black text-sm text-center uppercase">Surat pribadi</h3>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-lime-100  max-w-xs sm:max-w-xl shadow-lg border-2 border-r-gray-800 border-b-gray-800">
          <div className={`${inter.className} px-6 py-4 space-y-4 text-xs sm:text-sm leading-relaxed`}>
            <div className="flex items-center justify-between">
              <Dot className=" text-emerald-500 -ml-8 -mt-6" size={60} />
              <Dot className=" text-emerald-500 -mr-8 -mt-6" size={60} />
            </div>
            <ul>
              <ol className="list-decimal ml-4 -mt-8 text-justify">
                <li> Surat pribadi tidak dilengkapi dengan kepala surat (kop surat).</li>
                <li>Surat pribadi tidak memiliki nomor surat.</li>
                <li>Salam pembuka dan penutup dalam surat pribadi bisa bersifat nonformal dan santai.</li>
                <li>Bahasa yang digunakan disesuaikan dengan tujuan surat pribadi tersebut. Bahasa baku digunakan jika sifatnya resmi, dan bahasa tidak baku digunakan jika sifatnya tidak resmi.</li>
                <li>Bentuk atau bagian-bagian surat pribadi umumnya lebih bebas.</li>
              </ol>
            </ul>
          </div>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[80px]">
          {/* Text at the top left */}
          <div className="absolute top-0 left-0 flex flex-col space-y-2 pt-4">
            <h2 className=" rounded-md bg-amber-200 w-[80px] -ml-8 p-1 font-black text-sm uppercase text-center text-red-600 -rotate-3">Ciri-ciri</h2>
            <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4 w-[130px]  p-1 font-black text-sm text-center uppercase">Surat Dinas</h3>
          </div>
        </div>
        <div className="bg-lime-100  max-w-xs sm:max-w-xl shadow-lg border-2 border-r-gray-800 border-b-gray-800">
          <div className={`${inter.className} px-6 py-4 space-y-4 text-xs sm:text-sm leading-relaxed`}>
            <div className="flex items-center justify-between">
              <Dot className=" text-emerald-500 -ml-8 -mt-6" size={60} />
              <Dot className=" text-emerald-500 -mr-8 -mt-6" size={60} />
            </div>
            <ul>
              <ol className="list-decimal ml-4 -mt-8 text-justify">
                <li>Surat dinas memiliki kepala surat (kop surat) serta nama instansi/ lembaga pada bagian kepala surat.</li>
                <li>Surat dinas memiliki nomor surat dan juga lampiran sebagai berkas pendukung.</li>
                <li>Surat dinas menggunakan bahasa baku dan resmi, serta dibuat dalam format tertentu.</li>
                <li>Pada bagian surat terdapat salam pembuka dan salam penutup sebagai bentuk kesopanan dalam berkomunikasi melalui surat.</li>
                <li>Surat dinas harus dilengkapi dengan stempel atau atau cap dari instansi/ lembaga yang mengeluarkannya.</li>
                <li>Surat dinas ditandatangani oleh pejabat yang berwenang meskipun surat itu dibuat oleh seorang pengonsep berinisial.</li>
              </ol>
            </ul>
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
