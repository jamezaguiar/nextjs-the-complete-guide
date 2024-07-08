import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default function MealsDetailPage({ params }) {
  const { slug } = params;

  const { title, summary, creator_email, instructions, image, creator } =
    getMeal(slug);

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
            __html: instructions.replace(/\n/g, "<br />"),
          }}
        ></p>
      </main>
    </>
  );
}
