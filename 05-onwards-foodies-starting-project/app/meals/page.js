import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/share">Share</Link>
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
