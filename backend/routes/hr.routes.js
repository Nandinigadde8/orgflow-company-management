const express = require("express");
const router = express.Router();

// HR dashboard data
router.get("/dashboard", (req, res) => {
  res.json({
    totalEmployees: 120,
    pendingApprovals: 8,
    departments: 6,
  });
});

// HR employee list
router.get("/employees", (req, res) => {
  res.json([
    { id: 1, name: "Rahul", role: "Engineer" },
    { id: 2, name: "Anita", role: "Intern" },
  ]);
});

// HR approval action
router.post("/approve", (req, res) => {
  res.json({ message: "Approved by HR" });
});

module.exports = router;
