import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/employees">Employees</Link>{" | "}
      <Link to="/employees/add">Add Employee</Link>
    </nav>
  );
}

export default Navbar;