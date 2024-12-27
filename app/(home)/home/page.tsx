import { Logo } from '@/app/(home)/logo';
import { ButtonHome } from '@/components/button-home';
import { Navigation } from './navigation';
import { Metadata } from 'next';
import { getCurrentUser } from '@/actions/getCurrentUser';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const currentUser = await getCurrentUser();
  return (
    <section className="bg-home_two bg-cover bg-center h-[100vh] relative sm:bg-home_two_wide">
      <Logo />
      <ButtonHome currentUser={currentUser} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-white mt-[50px]" style={{ textShadow: '2px 2px 0 #0000ff' }}>
          Menu Utama
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Navigation />
      </div>
    </section>
  );
}
