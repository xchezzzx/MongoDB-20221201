import { ICourse } from "../interface/course.interface";
import { CourseModel } from "../models/model";

export const getCourses = async (): Promise<ICourse[]> => {
    let res = await CourseModel.find().lean();
    return res;
};

export const getCourseByName = () => { }
