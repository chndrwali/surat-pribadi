import { Logo } from '@/app/(home)/logo';
import { ButtonHome } from './button-home';
import { Navigation } from './navigation';

export default async function HomePage() {
  return (
    <section className="bg-home_two bg-cover bg-center h-[100vh] relative sm:bg-none">
      <Logo />
      <ButtonHome />
      <Navigation />
    </section>
  );
}
