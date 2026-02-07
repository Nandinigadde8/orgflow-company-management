import React, { useState } from "react";

function AddEmployee() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    department: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Employee Added (UI only)");
    setForm({ name: "", role: "", department: "" });
  };

  return (
    <div className="container">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;