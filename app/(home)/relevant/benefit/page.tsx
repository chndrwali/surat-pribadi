import { Metadata } from 'next';
import { ButtonHome } from '@/components/button-home';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { CardBenefit } from './card-benfit';

export const metadata: Metadata = {
  title: 'Capaian & Tujuan',
};

export default async function Benefit() {
  const currentUser = await getCurrentUser();

  return (
    <section className="relative bg-relevant bg-cover bg-center h-[100vh] sm:bg-home_two_wide">
      <ButtonHome currentUser={currentUser} />
      <div className="flex items-center justify-center pt-20 sm:py-4">
        <div className="bg-lime-200 rounded-xl px-4 py-1 uppercase">
          <table>
            <tbody>
              <tr>
                <td>Mata Pelajaran</td>
                <td>: Bahasa Indonesia</td>
              </tr>
              <tr>
                <td>Kelas</td>
                <td>: IV (Empat)</td>
              </tr>
              <tr>
                <td>Fase</td>
                <td>: C</td>
              </tr>
              <tr>
                <td>Elemen</td>
                <td>: Menulis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <CardBenefit />
    </section>
  );
}
