import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contoh Surat',
};

export default async function Example() {
  const currentUser = await getCurrentUser();
  return (
    <section>
      <ButtonHome currentUser={currentUser} />
    </section>
  );
}
