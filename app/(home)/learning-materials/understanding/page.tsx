import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';
import { CardUnderstanding } from './card-understanding';

export const metadata: Metadata = {
  title: 'Materi',
};

export default async function Understanding() {
  const currentUser = await getCurrentUser();
  return (
    <>
      <div className="fixed inset-0 bg-relevant bg-center bg-cover bg-no-repeat sm:bg-home_two_wide -z-10" />
      <section className="relative min-h-screen">
        <ButtonHome currentUser={currentUser} />
        <CardUnderstanding />
      </section>
    </>
  );
}
