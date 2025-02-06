export interface IAddStudentRequest{
    name:string,
    age: number;
    grade: string;
    email: string;
}

export interface IUpdateStudentRequest extends IAddStudentRequest {
    id: string;
  }