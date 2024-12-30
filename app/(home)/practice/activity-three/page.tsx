import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aktivitas 3',
};

export default async function ActivityThree() {
  return (
    <>
      <div className="fixed inset-0 bg-relevant bg-center bg-cover bg-no-repeat sm:bg-home_two_wide -z-10" />
      <section className="relative min-h-screen"></section>
    </>
  );
}
