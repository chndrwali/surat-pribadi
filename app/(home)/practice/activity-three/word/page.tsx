import { Metadata } from 'next';
import { Document } from './document';
import { OnlyHome } from '@/components/only-home';

export const metadata: Metadata = {
  title: 'Aktivitas 3',
};

export default async function ActivityThree() {
  return (
    <>
      <div className="fixed inset-0 bg-activity_three bg-center bg-cover bg-no-repeat sm:bg-activity_three_wide -z-10" />
      <section className="relative min-h-screen">
        <OnlyHome />
        <Document />
      </section>
    </>
  );
}
