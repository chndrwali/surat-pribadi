import { Metadata } from 'next';
import { CardRelevant } from './card-relevant';
import { OnlyHome } from '@/components/only-home';

export const metadata: Metadata = {
  title: 'Relevansi',
};

export default async function RelevantPage() {
  return (
    <section className="relative bg-relevant bg-cover bg-center h-[100vh] sm:bg-home_two_wide">
      <OnlyHome />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-white mt-[50px]" style={{ textShadow: '2px 2px 0 #0000ff' }}>
          Surnas
        </h1>
      </div>
      <CardRelevant />
    </section>
  );
}
