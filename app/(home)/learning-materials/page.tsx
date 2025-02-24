import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';
import { Navigation } from './navigation';
import { Logo } from '../logo';
import { HomeLeft } from '../home/home-left';

export const metadata: Metadata = {
  title: 'Materi',
};

export default async function LearningMaterials() {
  const currentUser = await getCurrentUser();
  return (
    <section className="relative bg-relevant bg-cover bg-center h-[100vh] sm:bg-home_two_wide">
      <Logo />
      <HomeLeft />
      <ButtonHome currentUser={currentUser} hide />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-6xl font-bold text-white mt-[50px]" style={{ textShadow: '2px 2px 0 #0000ff' }}>
          Menu Materi
        </h1>
        <Navigation />
      </div>
    </section>
  );
}
