import { Metadata } from 'next';
import { FormStart } from './form-start';
import { ButtonHome } from '@/components/button-home';
import { getCurrentUser } from '@/actions/getCurrentUser';

export const metadata: Metadata = {
  title: 'Praktik',
};

export default async function Practice() {
  const currentUser = await getCurrentUser();

  return (
    <section className="relative bg-lkpd bg-center bg-cover min-h-screen sm:bg-home_two_wide">
      <div className="hidden sm:block">
        <ButtonHome currentUser={currentUser} />
      </div>
      <div className="hidden sm:flex flex-col items-center justify-center text-white pt-[80px] ">
        <p>Lembar Kerja Peserta Didik</p>
        <h1 className="text-6xl font-bold">LKPD</h1>
        <div className="rounded-full bg-emerald-400 text-center p-2">
          <p>Menulis Surat Pribadi Untuk Kelas 4</p>
        </div>
      </div>
      <FormStart />
    </section>
  );
}
