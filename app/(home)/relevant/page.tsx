import { Metadata } from 'next';
import { ButtonHome } from '@/components/button-home';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { CardRelevant } from './card-relevant';

export const metadata: Metadata = {
  title: 'Relevansi',
};

export default async function RelevantPage() {
  const currentUser = await getCurrentUser();

  return (
    <section className="relative bg-relevant bg-cover bg-center h-[100vh] sm:bg-home_two_wide">
      <ButtonHome currentUser={currentUser} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-white mt-[50px]" style={{ textShadow: '2px 2px 0 #0000ff' }}>
          Supri
        </h1>
      </div>
      <CardRelevant />
    </section>
  );
}
