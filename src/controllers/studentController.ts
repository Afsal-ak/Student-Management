import { Request,Response } from "express";
import { StudentService } from "../services/studentService";
import { IStudent } from "../models/student";

export class StudentController{
    private studentService:StudentService;

    constructor(studentService:StudentService){
        this.studentService=studentService
    }

    async getAllStudents(req:Request,res:Response):Promise<void>{
        try {
            const students:IStudent[]=await this.studentService.getAllStudents();
            res.render("students", { students });
        } catch (error) {
            console.error("Error fetching students:", error);
            res.status(500).send("Internal Server Error");
        }
    }

     // Add a student and redirect to the student list page
  async addStudent(req: Request, res: Response): Promise<void> {
    try {
      const student = await this.studentService.addStudent(req.body);
      res.redirect("/students"); // After adding, redirect to the student list
    } catch (error) {
      console.error("Error adding student:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  // Update a student and redirect to the student list page
  async updateStudent(req: Request, res: Response): Promise<void> {
    try {
      const student = await this.studentService.updateStudent({
        id: req.params.id,
        ...req.body,
      });
      if (!student) {
        res.status(404).json({ message: "Student not found" });
      } else {
        res.redirect("/students"); // After updating, redirect to the student list
      }
    } catch (error) {
      console.error("Error updating student:", error);
      res.status(500).json({ error });
    }
  }

  // Delete a student and redirect to the student list page
  async deleteStudent(req: Request, res: Response): Promise<void> {
    try {
      const student = await this.studentService.deleteStudent(req.params.id);
      if (!student) {
        res.status(404).json({ message: "Student not found" });
      } else {
        res.redirect("/students"); // After deleting, redirect to the student list
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).json({ error });
    }
  }

}