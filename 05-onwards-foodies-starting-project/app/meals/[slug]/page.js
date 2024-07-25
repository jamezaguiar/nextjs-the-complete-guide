import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealsDetailPage({ params }) {
  const { slug } = params;

  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  const { title, summary, creator_email, instructions, image, creator } = meal;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
}
