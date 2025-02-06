// routes/studentRoutes.ts
import express from "express";
import { StudentService } from "../services/studentService";  // Corrected import path for StudentService
import { StudentController } from "../controllers/studentController";  // Corrected import path for StudentController
import student from "../models/student";  // Correct import for model

const router = express.Router();

// Manually create and inject dependencies
const studentService = new StudentService(student); // Corrected: passing `student` model to StudentService
const studentController = new StudentController(studentService);

// Routes
router.get("/", (req, res) => studentController.getAllStudents(req, res));
router.post("/add", (req, res) => studentController.addStudent(req, res));
router.post("/update/:id", (req, res) => studentController.updateStudent(req, res));
router.post("/delete/:id", (req, res) => studentController.deleteStudent(req, res));

export default router;
