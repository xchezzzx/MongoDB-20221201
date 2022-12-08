import { IStudent } from "../interface";
import { StudentModel } from "../models/model";

export const addStudent = async (student: IStudent) => {
    let nStudent = new StudentModel(student);
    let result = await nStudent.save();
    return result;
};
