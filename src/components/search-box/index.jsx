import "./style.css";

export const SearchBox = (props) => (
  <input
    className="search-box"
    type="search"
    placeholder="Robot search..."
    onChange={props.onSearch}
  />
);
