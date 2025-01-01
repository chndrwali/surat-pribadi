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
    <>
      <div className="fixed inset-0 bg-relevant bg-center bg-cover bg-no-repeat sm:bg-home_two_wide -z-10" />
      <section className="relative min-h-screen">
        <ButtonHome currentUser={currentUser} materials />
        <CardCharacteristic />
      </section>
    </>
  );
}
