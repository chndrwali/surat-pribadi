import { Metadata } from 'next';
import { CardUnderstanding } from './card-understanding';
import { OnlyHome } from '@/components/only-home';

export const metadata: Metadata = {
  title: 'Materi',
};

export default async function Understanding() {
  return (
    <>
      <div className="fixed inset-0 bg-relevant bg-center bg-cover bg-no-repeat sm:bg-home_two_wide -z-10" />
      <section className="relative min-h-screen">
        <OnlyHome />
        <CardUnderstanding />
      </section>
    </>
  );
}
