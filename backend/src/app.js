
import express from "express";
import employeeRoutes from "./routes/employee.routes.js";

const app = express();

app.use(express.json());

app.use("/api/employees", employeeRoutes);

export default app;

const express = require("express");
const app = express();

const hrRoutes = require("../routes/hr.routes");

app.use(express.json());
app.use("/api/hr", hrRoutes);

module.exports = app;

