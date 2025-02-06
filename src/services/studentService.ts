import Student,{IStudent} from "../models/student";
import { IAddStudentRequest,IUpdateStudentRequest } from "../interfaces/IRequestModels";

export class StudentService {
    constructor(private studentModel:typeof Student){}

    async getAllStudents():Promise<IStudent[]>{
        return await this.studentModel.find();
    }

    async addStudent(data:IAddStudentRequest):Promise<IStudent>{
        return await this.studentModel.create(data)
    }

    async updateStudent(data:IUpdateStudentRequest):Promise<IStudent|null>{
        const {id,...updateData}=data
        return await this.studentModel.findByIdAndUpdate(id,updateData,{new:true})
    }

    async deleteStudent(id: string): Promise<IStudent | null> {
        return await this.studentModel.findByIdAndDelete(id);
    }
}