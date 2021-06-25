import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="title">
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Click on "Name" column header to filter by name or use the search box to narrow
        your results.
      </p>
    </header>
  );
};

export default Header;