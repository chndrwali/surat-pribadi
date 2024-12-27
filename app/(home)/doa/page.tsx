import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doa',
};

export default async function Doa() {
  return <section className="relative bg-cover bg-center h-[100vh] sm:bg-home_two_wide">Doa</section>;
}
