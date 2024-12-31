import { OnlyHome } from '@/components/only-home';
import { Metadata } from 'next';
import { LiveWork } from './live-work';

export const metadata: Metadata = {
  title: 'Aktivitas 1',
};

export default async function ActivityOne() {
  return (
    <section className="bg-activity_three bg-center bg-cover sm:bg-activity_three_wide relative min-h-screen">
      <OnlyHome />
      <LiveWork />
    </section>
  );
}
