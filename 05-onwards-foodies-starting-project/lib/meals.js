import sql from "better-sqlite3";

const db = sql("meals.db");

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getMeals() {
  await delay(3000);
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
