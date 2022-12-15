import { isValidObjectId } from "mongoose";
import { IStudent } from "../interface";
import { StudentModel } from "../models/model";

export const addStudent = async (student: IStudent) => {
    let nStudent = new StudentModel(student);
    let result = await nStudent.save();
    return result;
};

export const updateStudent = async (
    student: IStudent
): Promise<IStudent | null> => {
    let updateResult = await StudentModel.updateOne(student);
    if (updateResult.acknowledged) {
        return student;
    }
    else {
        return null;
    }
};

export const deleteStudent = async (id: string) => {
    // let newCourse = new CourseModel();
    console.log(id);

    if (isValidObjectId(id)) {
        await StudentModel.findByIdAndDelete(id);
        return true;
    }
    else {
        return false;
    }
}

export const deleteStudentByFirstNameLastName = async (firstName: string, lastName: string): Promise<Boolean> => {
    // let newCourse = new CourseModel();
    console.log(firstName, lastName);

    if (firstName && lastName) {
        let query = { firstName: firstName, lastName: lastName };
        const res = await StudentModel.deleteMany(query);
        return res.acknowledged
    }
    else {
        return false;
    }
}

export const deleteStudentByFirstNameLastNameAge = async(
    firstName: string,
    lastName: string,
    age: number
) => {
    if (firstName && lastName && age) {
        let query = { firstName: firstName, lastName: lastName, age: age };
        let res = await StudentModel.deleteOne(query);
        return res.acknowledged;
    }
    else {
        return false;
    }
 }