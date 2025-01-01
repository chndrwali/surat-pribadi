import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';
import { CardExample } from './card-example';

export const metadata: Metadata = {
  title: 'Contoh Surat',
};

export default async function Example() {
  const currentUser = await getCurrentUser();
  return (
    <>
      <div className="fixed inset-0 bg-relevant bg-center bg-cover bg-no-repeat sm:bg-home_two_wide -z-10" />
      <section className="relative min-h-screen">
        <ButtonHome currentUser={currentUser} materials />
        <div className="flex items-center justify-center pt-16 sm:pt-8">
          <h3 className="bg-red-600 rounded-md text-amber-200 w-[200px]  p-1 font-black text-sm text-center uppercase">Bagian-bagian surat</h3>
        </div>

        <CardExample />
      </section>
    </>
  );
}
