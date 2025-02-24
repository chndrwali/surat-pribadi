import { Metadata } from 'next';
import { OnlyHome } from '@/components/only-home';
import LetterComponents from './letter';

export const metadata: Metadata = {
  title: 'Aktivitas 2',
};

export default async function ActivityTwo() {
  return (
    <section className="relative min-h-screen bg-activity_three bg-center bg-cover sm:bg-activity_three_wide">
      <OnlyHome />
      <LetterComponents />
    </section>
  );
}
