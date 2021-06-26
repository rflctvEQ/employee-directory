import React, { Component } from "react";
import SearchBar from "../SearchBar";
import Employee from "../Employee";
import API from "../../utils/API";

import './style.css';

class Wrapper extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    sortDirections: this.initialSortDirections,
  };

  get initialSortDirections() {
    return {
      name: "",
      phone: "",
      email: "",
      dob: "",
    };
  }

  // gets random users from api and updates state with results
  componentDidMount() {
    API.search()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  // ensures page doesn't reload if user hits enter while using search bar
  handleFormSubmit = (event) => {
    event.preventDefault();
  };


  // Sort by last name, and if multiple employees with same last names, then sort those by first name.
  sortName = (name, lastName = 0, firstName = 0) => {
    let sorted = this.state.filteredEmployees;
    // if employees have already been sorted alphabetically, reverse the order of the list
    if (this.state.sortDirections[name]) {
      this.setState({
        filteredEmployees: sorted.reverse(),
        sortDirections: {
          ...this.initialSortDirections,
          [name]: this.state.sortDirections[name] === "asc" ? "desc" : "asc",
        },
      });
    } else {
      // sort the unsorted list 
      sorted = this.state.filteredEmployees.sort((a, b) => {
        a = a[name];
        b = b[name];

        // If firstName comparison given and lastName comparison is equal
        if (lastName) {
          if (firstName && a[lastName] === b[lastName]) {
            return a[firstName].localeCompare(b[firstName]);
          }
          return a[lastName].localeCompare(b[lastName]);
        } else {
          return a.localeCompare(b);
        }
      });

      this.setState({
        filteredEmployees: sorted,
        sortDirections: {
          ...this.initialSortDirections,
          [name]: "asc",
        },
      });
    }
  };

  // set search state and calls filter function with search value
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  // filters employees with names including text entered in search bar
  filterEmployees = (input) => {
    if (input) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(input)
          );
        }),
      });
    } else {
      // ensures what user sees is original unfiltered list if search bar is empty
      this.setState({ filteredEmployees: this.state.employees });
    }
  };

  // formats dob from api
  formatDate = (date) => {
    date = new Date(date);
    let dob = [];
    dob.push(("0" + (date.getMonth() + 1)).slice(-2));
    dob.push(("0" + date.getDate()).slice(-2));
    dob.push(date.getFullYear());

    // Join formatted date 
    return dob.join("-");
  };

  render() {
    return (
      <div className="wrapper">
        <SearchBar
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container mt-4">
          <Employee
            state={this.state}
            sortName={this.sortName}
            filterEmployees={this.filterEmployees}
            formatDate={this.formatDate}
          />
        </div>
      </div>
    );
  }
}

export default Wrapper;