'use client';

import { useRouter } from 'next/navigation';

const route = [
  {
    label: 'Relevansi',
    link: '/relevant',
  },
  {
    label: 'Materi',
    link: '/learning-materials',
  },
  {
    label: 'Doa sebelum belajar',
    link: '/doa',
  },
  {
    label: 'Praktik',
    link: '/practice',
  },
];

export const Navigation = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 md:flex md:items-center p-4 gap-4 place-items-center mt-4 sm:mt-10">
      {route.map((item) => (
        <div key={item.label} className="group relative  bg-button bg-center bg-cover w-[150px] h-[150px] flex flex-col items-center justify-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button className="flex flex-col items-center justify-center text-center focus:outline-none p-6" onClick={() => router.push(item.link)}>
            <span className={`mt-2 text-sm text-purple-600 leading-tight break-words uppercase font-semibold group-hover:text-white`}>{item.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
};
