import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/meals/share">Share</Link>
      <Link href="/community">Community</Link>
      <Link href="/meals/scrambled-eggs">Meal Details: Scrambled Eggs</Link>
    </main>
  );
}
