import Link from 'next/link';

export default function CommunityPage() {
  return (
    <main>
      <h1>Community Page</h1>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share</Link>
      <Link href="/meals/scrambled-eggs">Meal Details: Scrambled Eggs</Link>
    </main>
  );
}
