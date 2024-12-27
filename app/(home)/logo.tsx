import Image from 'next/image';

export const Logo = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 py-3">
      <div className="flex items-center justify-center gap-4">
        <Image src="/icon/upi.png" className="ml-4" alt="" width={40} height={40} />
        <Image src="/icon/logo2.png" alt="" width={40} height={40} />
      </div>
    </header>
  );
};
