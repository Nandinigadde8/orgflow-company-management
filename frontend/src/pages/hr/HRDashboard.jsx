import React from "react";
import "./HRDashboard.css";

function HRDashboard() {
  return (
    <div className="hr-wrapper">
      <div className="hr-card">
        <h1 className="brand-title">HR Dashboard</h1>
        <p className="subtitle">
          Manage employees, approvals, and performance
        </p>

        <div className="stats">
          <div className="stat-box">
            <h2>120</h2>
            <p>Total Employees</p>
          </div>
          <div className="stat-box">
            <h2>8</h2>
            <p>Pending Approvals</p>
          </div>
          <div className="stat-box">
            <h2>6</h2>
            <p>Departments</p>
          </div>
        </div>

        <button className="action-btn">Go to Employee Management</button>
      </div>
    </div>
  );
}

export default HRDashboard;
