import { range } from "./utils";

interface Props {
  pageSize: number;
  totalCount: number;
  selectedPage: number;
  onPageSelect(page: number): void;
}

function Pagination({
  onPageSelect,
  pageSize,
  selectedPage,
  totalCount,
}: Props) {
  const pageCount = Math.ceil(totalCount / pageSize);

  let pages = range(1, pageCount);

  if (pageCount === 1) return null;

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        {pages.map((page) => (
          <li key={page} className="page-item m-1">
            <a
              onClick={() => onPageSelect(page)}
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

export default Pagination;
