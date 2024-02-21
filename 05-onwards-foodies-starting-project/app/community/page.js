import Link from 'next/link';

export default function CommunityPage() {
  return (
    <main>
      <h1>Community Page</h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/scrambled-eggs">Meal Details: Scrambled Eggs</Link>
      </p>
    </main>
  );
}
