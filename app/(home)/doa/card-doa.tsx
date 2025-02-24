'use client';

import { ArrowBigLeft, Dot } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const CardDoa = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-16">
        {/* Header section */}
        <div className="w-full max-w-xs sm:max-w-xl">
          {/* Text at the top left */}
          <div className="flex flex-col">
            <h3 className="bg-red-600 rounded-md text-amber-200 p-1 w-[200px] font-black text-sm text-center uppercase">Do&apos;a Sebelum Belajar</h3>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-lime-100  max-w-xs sm:max-w-xl shadow-lg border-2 border-r-gray-800 border-b-gray-800">
          <div className={` px-6 py-4 space-y-4 text-xs sm:text-sm leading-relaxed`}>
            <div className="flex items-center justify-between">
              <Dot className=" text-emerald-500 -ml-8 -mt-6" size={60} />
              <Dot className=" text-emerald-500 -mr-8 -mt-6" size={60} />
            </div>
            <div className="-mt-8 space-y-3">
              <p className="leading-relaxed text-center text-lg">بِسْمِ اللَّهِ الرحمن الرَّحِيمِ.</p>

              <p className="leading-relaxed text-right text-lg break-words">رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا وَرَسُولًا. رَبِّ زِدْنِي عِلْمًا نَافِعًا وَارْزُقْنِي فَهْمًا</p>

              <p className="leading-relaxed text-sm">Rodlitu billahi robba, wabi islaamidina, wabimuhammadin nabiyya warasulla Robbi zidni ilman nafi&apos;a warzuqni fahma.</p>

              <p className="leading-relaxed text-sm">
                Artinya: “Aku ridha Allah SWT sebagai Tuhanku, dan Islam sebagai agamaku, dan Muhammad saw sebagai Nabi dan Rasulku. Ya Allah tambahkanlah kepadaku ilmu dan berikanlah aku pemahaman yang baik.“
              </p>
            </div>
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
