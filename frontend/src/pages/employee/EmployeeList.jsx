import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  // Dummy data for frontend focus
  useEffect(() => {
    setEmployees([
      { id: 1, name: "Alice", role: "Engineer", department: "Backend" },
      { id: 2, name: "Bob", role: "Intern", department: "Frontend" }
    ]);
  }, []);

  return (
    <div className="container">
      <h2>Employee List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.department}</td>
              <td>
                <Link to={`/employees/profile/${emp.id}`}>View</Link>{" | "}
                <Link to={`/employees/edit/${emp.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;