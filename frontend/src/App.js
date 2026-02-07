import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./pages/employee/EmployeeList";
import AddEmployee from "./pages/employee/AddEmployee";
import EditEmployee from "./pages/employee/EditEmployee";
import EmployeeProfile from "./pages/employee/EmployeeProfile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeProfile />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/add" element={<AddEmployee />} />

        {/* NEW ROUTES */}
        <Route path="/employees/edit/:id" element={<EditEmployee />} />
        <Route path="/employees/profile/:id" element={<EmployeeProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;