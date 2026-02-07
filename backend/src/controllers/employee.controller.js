let employees = [
  { id: 1, name: "Alice", role: "Engineer", department: "Backend" },
  { id: 2, name: "Bob", role: "Intern", department: "Frontend" }
];

export const getAllEmployees = (req, res) => {
  res.json(employees);
};

export const addEmployee = (req, res) => {
  const { name, role, department } = req.body;

  if (!name || !role || !department) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newEmployee = {
    id: employees.length + 1,
    name,
    role,
    department
  };

  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};