import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Praktik',
};

export default async function Practice() {
  return <section className="relative bg-cover bg-center h-[100vh] sm:bg-home_two_wide">Practice</section>;
}
