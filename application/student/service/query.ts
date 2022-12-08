import { IStudent } from "../interface/student.interface";
import { StudentModel } from "../models/model"

export const getStudents = async (): Promise<IStudent[]> => {
    let res = await StudentModel.find().lean();
    // console.log(res)
    return res;
};

export const getStundentByName = () => {

};