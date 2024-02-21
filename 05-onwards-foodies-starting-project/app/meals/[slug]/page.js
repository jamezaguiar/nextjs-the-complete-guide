import Link from 'next/link';

export default function MealsDetailPage({ params }) {
  const { slug } = params;

  return (
    <main>
      <h1>Meals Detail Page</h1>
      <p>{slug}</p>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
