import type { FC } from "react";
import Styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  pages: number;
  slug?: string;
}

const Pagination: FC<PaginationProps> = ({ page, pages, slug }) => {
  const pathName = slug ? slug : "/";
  const buttons = [];

  const maxButtons = 5; // Set the maximum number of buttons to display

  let startPage = 1;
  let endPage = Math.min(pages, maxButtons); // Ensure the range doesn't exceed the total number of pages

  if (page > pages - maxButtons) {
    // If the current page is close to the end, adjust the range
    startPage = Math.max(1, pages - maxButtons + 1);
    endPage = pages;
  } else {
    // Otherwise, calculate the range based on the current page
    startPage = Math.max(1, page - Math.floor(maxButtons / 2));
    endPage = Math.min(pages, startPage + maxButtons - 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <li key={`page-${i + 1}`}>
        <a
          className={`${i === page ? Styles.active : ""}`}
          href={`${pathName}${pathName.includes("?") ? "&" : "?"}page=${i}`}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav className={Styles.pagination}>
      <ul>
        <li>
          <a
            className={Styles.previous}
            href={`${pathName}${pathName.includes("?") ? "&" : "?"}page=1`}
          >
            First
          </a>
        </li>
        <li>
          <a
            href={`${pathName}${pathName.includes("?") ? "&" : "?"}page=${
              page === 1 ? page : page - 1
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>
        {buttons}
        <li>
          <a
            href={`${pathName}${pathName.includes("?") ? "&" : "?"}page=${
              page >= pages ? page : page + 1
            }`}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={Styles.next}
            href={`${pathName}${
              pathName.includes("?") ? "&" : "?"
            }page=${pages}`}
          >
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
