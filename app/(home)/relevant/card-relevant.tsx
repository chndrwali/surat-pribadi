'use client';

import { ButtonNextPrevious } from '@/components/button-next-previous';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const CardRelevant = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header section */}
        <div className="relative w-full max-w-xs sm:max-w-xl mb-[100px]">
          {/* Text at the top left */}
          <div className="absolute top-0 left-0 flex flex-col space-y-2">
            <h2 className="border border-gray-800 rounded-md bg-yellow-400 w-[120px] p-2 font-semibold text-lg uppercase text-center">Deskripsi</h2>
            <h3 className="bg-blue-200 rounded-md border border-gray-800 p-2 w-[120px] font-semibold text-lg text-center uppercase">Produk</h3>
          </div>
          {/* Image at the top right */}
          <div className="absolute top-0 right-0">
            <Image src="/icon/keong.png" alt="Icon" width={50} height={50} />
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-yellow-400 rounded-xl max-w-xs sm:max-w-xl shadow-lg border border-gray-800">
          <div className={`${inter.className} px-6 py-4 space-y-4 text-sm leading-relaxed`}>
            <h1 className="text-base font-semibold">Assalamualaikum warohmatullahi wabarokatuh</h1>

            <p className="text-justify">
              Puji dan syukur ke hadirat Allah swt. karena berkat rahmat dan karunianya saya dapat menyelesaikan media pembelajaran berbasis aplikasi Web yang diberi nama &quot;Supri&quot; yang merupakan kependekan dari surat pribadi.
            </p>
            <p className="text-justify">
              Aplikasi Supri ini merupakan aplikasi yang di dalamnya membahas mengenai materi pembuatan surat. Bukan hanya materi saja, di dalam aplikasi ini juga terdapat beberapa fitur di antaranya yaitu fitur relevansi, lagu, permainan,
              serta praktik pembuatan surat. Aplikasi ini dikemas dengan semenarik mungkin agar peserta didik mudah untuk memahaminya. Semoga aplikasi ini bermanfaat untuk menambah ilmu pengetahuan dan dapat menambah wawasan bagi para
              pengguna.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-lg mt-4">
        <ButtonNextPrevious onClick={() => router.back()} isLeft={true} />
        <ButtonNextPrevious onClick={() => router.push('/relevant/benefit')} isLeft={false} />
      </div>
    </>
  );
};
