import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';
import { CardCharacteristic } from './card-characteristic';

export const metadata: Metadata = {
  title: 'Ciri-ciri',
};

export default async function Characteristic() {
  const currentUser = await getCurrentUser();
  return (
    <section className="bg-relevant bg-cover bg-center min-h-screen sm:bg-home_two_wide relative">
      <ButtonHome currentUser={currentUser} />
      <CardCharacteristic />
    </section>
  );
}
