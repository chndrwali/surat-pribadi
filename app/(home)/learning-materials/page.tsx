import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Materi',
};

export default async function LearningMaterials() {
  return <section className="relative bg-cover bg-center h-[100vh] sm:bg-home_two_wide">LearningMaterials</section>;
}
