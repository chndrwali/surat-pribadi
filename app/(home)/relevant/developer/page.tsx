import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';
import { CardDeveloper } from './card-developer';

export const metadata: Metadata = {
  title: 'Developer',
};

export default async function Developer() {
  const currentUser = await getCurrentUser();

  return (
    <section className="relative bg-relevant bg-cover bg-center h-[100vh] sm:bg-home_two_wide">
      <ButtonHome currentUser={currentUser} />
      <CardDeveloper />
    </section>
  );
}
