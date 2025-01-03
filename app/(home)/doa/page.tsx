import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';
import { CardDoa } from './card-doa';

export const metadata: Metadata = {
  title: 'Doa',
};

export default async function Doa() {
  const currentUser = await getCurrentUser();
  return (
    <section className="relative bg-doa bg-cover bg-center min-h-screen sm:bg-doa_wide">
      <ButtonHome currentUser={currentUser} />
      <CardDoa />
    </section>
  );
}
