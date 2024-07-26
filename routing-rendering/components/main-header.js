import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <ul>
        <Link href="/">Home</Link>
        <Link href="/news">News</Link>
      </ul>
    </header>
  );
}
