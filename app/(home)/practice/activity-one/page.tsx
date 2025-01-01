import { Metadata } from 'next';
import TrueFalseQuiz from './true-false-quiz';

export const metadata: Metadata = {
  title: 'Aktivitas 1',
};

export default async function ActivityOne() {
  return (
    <section className="bg-activity_two bg-center bg-cover sm:bg-activity_three_wide relative min-h-screen">
      <TrueFalseQuiz />
    </section>
  );
}
