import Image from 'next/image';
import { Editor } from './editor';
import { Toolbar } from './toolbar';

export const Document = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col px-4 pt-2 gap-y-2 z-10 print:hidden ">
        <div className="max-w-4xl mx-auto p-6">
          <div className="relative mb-8 flex items-center gap-2">
            <Image src="/bg/ubur.png" alt="Mascot character" width={60} height={60} className="h-[60px] w-auto" />
            <h1 className="rounded-full bg-[#90c95b] px-6 py-2 text-xl font-bold text-white">AKTIVITAS 3</h1>
          </div>
          <div className="mt-2 mb-4">
            <p className="text-center uppercase text-lg sm:text-xl font-semibold break-words text-gray-800">Setelah kalian menonton video tersebut, silahkan buat surat pribadi sesuai tema video yang kalian tonton!</p>
          </div>
        </div>
        <Toolbar />
      </div>
      <div className="pt-4 print:pt-0">
        <Editor />
      </div>
    </div>
  );
};
