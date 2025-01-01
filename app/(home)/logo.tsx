import Image from 'next/image';

export const Logo = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 py-3 ">
      <div className="flex items-center justify-center">
        <div className="bg-emerald-400 flex items-center gap-4 rounded-2xl pt-2 pb-4 px-6 -mt-4">
          <Image src="/icon/upi.png" alt="" width={40} height={40} />
          <Image src="/icon/logo2.png" alt="" width={40} height={40} />
        </div>
      </div>
    </header>
  );
};
