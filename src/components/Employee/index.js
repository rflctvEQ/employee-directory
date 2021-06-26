import React from "react";
import "./style.css"

const Employee = (props) => {
  return (
    <table className="table table-striped table-sortable text-center customTable">
      <thead>
        <tr className="tableHeader">
          <th scope="col">Image</th>
          <th scope="col" data-field="name" data-sortable="true">
            <span onClick={() => props.sortName("name", "last", "first")}>
              Name
            </span>
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.state.filteredEmployees.map((employee) => {
          const { first, last } = employee.name;
          const fullName = `${first} ${last}`;
          const dob = props.formatDate(employee.dob.date);

          return (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.thumbnail} alt={fullName} />
              </td>
              <td className="align-middle">{fullName}</td>
              <td className="align-middle">{employee.phone}</td>
              <td className="align-middle email">{employee.email}</td>
              <td className="align-middle">{dob}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className="footer">
        </tr>
      </tfoot>
    </table>
  );
};

export default Employee;