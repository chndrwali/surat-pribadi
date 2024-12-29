import { Metadata } from 'next';
import TrueFalseQuiz from './true-false-quiz';

export const metadata: Metadata = {
  title: 'Aktivitas 2',
};

export default async function ActivityTwo() {
  return (
    <section className="relative min-h-screen bg-activity_two bg-center bg-cover sm:bg-home_two_wide">
      <TrueFalseQuiz />
    </section>
  );
}
