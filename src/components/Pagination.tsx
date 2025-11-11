import { useState } from "react";

function Pagination() {
  const [selectedPage, setSelectedPage] = useState(1);
  const pageSize = 4;
  const totalCount = 9;

  const pageCount = Math.ceil(totalCount / pageSize);

  let pages = range(1, pageCount);

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        {pages.map((page) => (
          <li className="page-item m-1">
            <a
              onClick={() => setSelectedPage(page)}
              className={`bg-dark text-white clickable page-link rounded-2 ${
                page === selectedPage ? "active bg-black" : "bg-grey"
              }`}
              aria-current="page">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function range(startNumber: number, endNumber: number): number[] {
  let pages: number[] = [];

  for (let count = startNumber; count <= endNumber; count++) pages.push(count);
  return pages;
}

export default Pagination;
