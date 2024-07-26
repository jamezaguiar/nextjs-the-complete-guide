export default function NewsDetailPage({ params }) {
  const { id } = params;

  return (
    <>
      <h1>News Detail Page</h1>
      <p>News ID: {id}</p>
    </>
  );
}
