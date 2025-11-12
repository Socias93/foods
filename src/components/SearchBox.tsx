import { useState } from "react";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <form className="mt-4  mb-2 d-flex" role="search">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control me-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
    </form>
  );
}
export default SearchBox;
