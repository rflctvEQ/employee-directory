import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

function App() {
  return (
    <Wrapper>
      <Title />
      <EmployeeCard />
    </Wrapper>
  );
}

export default App;