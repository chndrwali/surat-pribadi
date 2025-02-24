'use client';

import { ArrowBigLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const route = [
  {
    label: 'Pengertian surat',
    link: '/learning-materials/understanding',
  },
  {
    label: 'Ciri-ciri surat',
    link: '/learning-materials/characteristic',
  },
  {
    label: 'Bagian-bagian surat',
    link: '/learning-materials/part',
  },
  {
    label: 'Contoh surat',
    link: '/learning-materials/example',
  },
];

export const Navigation = () => {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-2 md:flex md:items-center p-4 gap-4 place-items-center mt-4 sm:mt-10">
        {route.map((item) => (
          <div key={item.label} className="group relative  bg-button bg-center bg-cover w-[150px] h-[150px] flex flex-col items-center justify-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <button className="flex flex-col items-center justify-center text-center focus:outline-none p-6" onClick={() => router.push(item.link)}>
              <span className={`mt-2 text-sm text-purple-600 leading-tight break-words uppercase font-semibold group-hover:text-white`}>{item.label}</span>
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => router.back()}
        className={`mt-4 border-4 border-yellow-700 outline outline-8 outline-yellow-600  flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-12 hover:bg-yellow-500`}
      >
        <ArrowBigLeft className="size-6" />
      </button>
    </>
  );
};
