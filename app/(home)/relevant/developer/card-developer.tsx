'use client';

import { ArrowBigLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const CardDeveloper = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header section */}
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[70px]">
          {/* Text at the top left */}
          <div className="absolute top-10 left-16 flex flex-col space-y-2">
            <h2 className=" rounded-md bg-amber-200 w-[80px] -ml-8 p-1 font-black text-sm uppercase text-center text-red-600 -rotate-3">Created</h2>
            <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4  p-1 font-black text-sm text-center uppercase">By</h3>
          </div>
        </div>

        {/* Content Box */}
        <div className="flex flex-col items-center justify-center max-w-xs sm:max-w-xl">
          <Image src="/bg/Amulistia.png" alt="" width={200} height={200} />
          <div className="bg-pink-100 rounded-xl max-w-xs sm:max-w-xl shadow-lg border-4 border-[#DBA49B]">
            <div className={` flex flex-col px-4 py-1 text-sm uppercase font-semibold text-center`}>
              <h1>Amulistia</h1>
              <h2>2108971</h2>
              <span>Pendidikan Guru Sekolah Dasar</span>
              <span>Universitas Pendidikan Indonesia</span>
              <span>Kampus Daerah Sumedang</span>
            </div>
          </div>
          <button
            onClick={() => router.back()}
            className={`mt-4 border-4 border-yellow-700 outline outline-8 outline-yellow-600  flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-12 hover:bg-yellow-500`}
          >
            <ArrowBigLeft className="size-6" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
    </>
  );
};
