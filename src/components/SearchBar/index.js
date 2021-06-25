  
import React from "react";
import "./style.css";

const SearchBar = (props) => {
  // Setting the component's initial state

  return (
    <nav className="navbar  justify-content-center customNav">
      <form className="form-inline m-2 searchBar" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default SearchBar;