import mongoose,{Schema,Document} from "mongoose";

export interface IStudent extends Document {
    name:string;
    age:number;
    grade:string;
    email:string;
}

const studentSchema:Schema=new Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        grade:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
    },
    {timestamps:true}
)

export default mongoose.model<IStudent>("Students",studentSchema)