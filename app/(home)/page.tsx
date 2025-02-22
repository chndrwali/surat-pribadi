import Image from 'next/image';
import { Logo } from './logo';
import { ButtonStart } from './button-start';
import { getCurrentUser } from '@/actions/getCurrentUser';

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <section className="bg-home bg-cover bg-center h-[100vh] relative sm:bg-home_wide">
      <Logo />
      <div className="fixed top-24 left-10 lg:left-96 ">
        <Image src="/icon/manuk.png" alt="" width={60} height={40} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mt-[50px]" style={{ textShadow: '2px 2px 0 #0000ff' }}>
          SURNAS
        </h1>
        <p className="text-sm sm:text-xl font-bold text-white mt-2" style={{ textShadow: '2px 2px 0 #0000ff' }}>
          (Surat Dinas)
        </p>
        <div className="mt-[170px]">
          <ButtonStart currentUser={currentUser} />
        </div>
      </div>
    </section>
  );
}
