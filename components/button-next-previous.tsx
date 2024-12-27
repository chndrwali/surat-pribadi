import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

interface ButtonNextPreviousProps {
  isLeft: boolean;
  onClick: () => void;
}

export const ButtonNextPrevious = ({ onClick, isLeft }: ButtonNextPreviousProps) => {
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        isLeft ? 'left-4' : 'right-4'
      } border-4 border-yellow-700 outline outline-8 outline-yellow-600  flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-12 hover:bg-yellow-500`}
    >
      {isLeft ? <ArrowBigLeft className="size-6" /> : <ArrowBigRight className="size-6" />}
    </button>
  );
};
