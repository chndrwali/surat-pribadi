import { Editor } from './editor';
import { Toolbar } from './toolbar';

export const Document = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col px-4 pt-2 gap-y-2 z-10 print:hidden ">
        <Toolbar />
      </div>
      <div className="pt-4 print:pt-0">
        <Editor />
      </div>
    </div>
  );
};
