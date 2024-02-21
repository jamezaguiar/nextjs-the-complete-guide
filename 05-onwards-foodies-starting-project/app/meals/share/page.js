import Link from 'next/link';

export default function MealsSharePage() {
  return (
    <main>
      <h1>Meals Share Page</h1>
      <Link href="/meals">Meals</Link>
      <Link href="/community">Community</Link>
      <Link href="/meals/scrambled-eggs">Meal Details: Scrambled Eggs</Link>
    </main>
  );
}
