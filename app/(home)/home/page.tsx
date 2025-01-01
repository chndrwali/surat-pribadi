import { Logo } from '@/app/(home)/logo';
import { ButtonHome } from '@/components/button-home';
import { Navigation } from './navigation';
import { Metadata } from 'next';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { HomeLeft } from './home-left';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const currentUser = await getCurrentUser();
  return (
    <>
      <div className="fixed inset-0 bg-home_two bg-center bg-cover bg-no-repeat sm:bg-home_two_wide -z-10" />
      <section className="relative min-h-screen">
        <Logo />
        <HomeLeft />
        <ButtonHome currentUser={currentUser} hide />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mt-[50px]" style={{ textShadow: '2px 2px 0 #0000ff' }}>
            Menu Utama
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Navigation />
        </div>
      </section>
    </>
  );
}
