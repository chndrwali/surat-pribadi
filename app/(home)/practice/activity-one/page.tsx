import { getCurrentUser } from '@/actions/getCurrentUser';
import { ButtonHome } from '@/components/button-home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aktivitas 1',
};

export default async function ActivityOne() {
  const currentUser = await getCurrentUser();
  return (
    <section className="bg-activity_one bg-center bg-cover sm:bg-activity_three_wide relative min-h-screen">
      <ButtonHome currentUser={currentUser} />
    </section>
  );
}
