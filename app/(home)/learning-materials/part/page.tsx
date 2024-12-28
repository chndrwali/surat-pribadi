import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';
import { CardPart } from './card-part';

export const metadata: Metadata = {
  title: 'Bagian Surat',
};

export default async function Part() {
  const currentUser = await getCurrentUser();
  return (
    <section className="relative bg-relevant bg-cover bg-center sm:bg-home_two_wide min-h-screen">
      <ButtonHome currentUser={currentUser} />
      <div className="flex items-center justify-center pt-8 ">
        <h3 className="bg-red-600 rounded-md text-amber-200 w-[200px]  p-1 font-black text-sm text-center uppercase">Bagian-bagian surat</h3>
      </div>

      <CardPart />
    </section>
  );
}
