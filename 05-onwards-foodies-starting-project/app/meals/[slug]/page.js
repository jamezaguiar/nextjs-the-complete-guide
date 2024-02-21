import Link from 'next/link';

export default function MealsDetailPage({ params }) {
  const { slug } = params;

  return (
    <main>
      <h1>Meals Detail Page</h1>
      <p>{slug}</p>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share</Link>
      <Link href="/community">Community</Link>
    </main>
  );
}
