interface Props {
  value: string;
  onChange(value: string): void;
}

function SearchBox({ onChange, value }: Props) {
  return (
    <form className="mt-4  mb-2 d-flex" role="search">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control me-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />
    </form>
  );
}
export default SearchBox;
