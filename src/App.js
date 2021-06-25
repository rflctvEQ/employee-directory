import React from "react";
import Employee from "./components/Employee";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <SearchBar />
        <Employee />
      </Wrapper>
    </div>
  );
}

export default App;