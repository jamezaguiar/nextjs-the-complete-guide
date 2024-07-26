import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const { filter } = params;
  const [selectedYear, selectedMonth] = filter || [];

  const availableYears = getAvailableNewsYears();
  const availableMonths = selectedYear
    ? getAvailableNewsMonths(selectedYear)
    : [];

  const isYearInvalid =
    selectedYear && !availableYears.includes(Number(selectedYear));
  const isMonthInvalid =
    selectedMonth && !availableMonths.includes(Number(selectedMonth));

  let news = [];
  let links = availableYears;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = availableMonths;
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (isYearInvalid || isMonthInvalid) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        selectedYear && <p>No news found for the selected period.</p>
      )}
    </>
  );
}
