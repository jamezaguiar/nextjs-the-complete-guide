import Link from 'next/link';

export default function MealsSharePage() {
  return (
    <main>
      <h1>Meals Share Page</h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals/scrambled-eggs">Meal Details: Scrambled Eggs</Link>
      </p>
    </main>
  );
}
