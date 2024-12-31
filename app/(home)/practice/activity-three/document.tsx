import { Editor } from './editor';
import { Toolbar } from './toolbar';

export const Document = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col px-4 pt-2 gap-y-2 z-10 print:hidden ">
        <div className="mt-2 mb-4">
          <p className="text-center text-lg sm:text-xl font-semibold break-words text-gray-800">Setelah menonton video diatas, coba buatkan surat pribadi untuk orang tua kalian sesuai dengan bagian-bagian nya!</p>
        </div>
        <Toolbar />
      </div>
      <div className="pt-4 print:pt-0">
        <Editor />
      </div>
    </div>
  );
};
