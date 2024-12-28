'use client';

import { ButtonNextPrevious } from '@/components/button-next-previous';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const CardPart = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-4">
        {/* Header section */}
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[70px]">
          {/* Text at the top left */}
          <div className="absolute top-0 left-0 flex flex-col space-y-2">
            <h2 className=" rounded-md bg-amber-200 w-[150px] -ml-8 p-1 font-black text-sm uppercase text-center text-red-600 -rotate-3">Bagian-bagian</h2>
            <h3 className="bg-red-600 rounded-md text-amber-200 -ml-4 w-[130px]  p-1 font-black text-sm text-center uppercase">Surat pribadi</h3>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-lime-100  max-w-xs sm:max-w-xl shadow-lg border-2 border-r-gray-800 border-b-gray-800">
          <div className={` px-6 py-4 space-y-4 text-xs sm:text-sm leading-relaxed`}>
            <ul>
              <strong>Surat pribadi terdiri atas </strong>
              <ol className="list-decimal ml-4 text-justify">
                <li>Titimangsa</li>
                <li>Nama dan Alamat tujuan</li>
                <li>Salam Pembuka</li>
                <li>Pembuka surat</li>
                <li>Isi surat</li>
                <li>Penutup surat</li>
                <li>Salam penutup</li>
                <li>Nama dan tanda tangan pengirim surat</li>
              </ol>
            </ul>
          </div>
        </div>

        <div className="bg-lime-100  max-w-xs sm:max-w-xl shadow-lg border-2 border-r-gray-800 border-b-gray-800">
          <Image src="" alt="" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-lg mt-4">
        <ButtonNextPrevious onClick={() => router.back()} isLeft={true} />
        <ButtonNextPrevious onClick={() => router.push('/doa')} isLeft={false} />
      </div>
    </>
  );
};
