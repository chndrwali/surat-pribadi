import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';
import { CardContinues } from './card-continues';

export const metadata: Metadata = {
  title: 'Materi',
};

export default async function Continues() {
  const currentUser = await getCurrentUser();
  return (
    <section className="relative min-h-screen bg-relevant bg-cover bg-center sm:bg-home_two_wide">
      <ButtonHome currentUser={currentUser} />
      <CardContinues />
    </section>
  );
}
