import React from "react";

const SearchBox = props => (
  <div>
    <input
      className="search-box"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  </div>
);
export default SearchBox;
