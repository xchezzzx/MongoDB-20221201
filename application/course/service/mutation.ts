import { CourseModel } from '../models/model';
import { ICourse } from './../interface/course.interface';

export const addCourse = async (course: ICourse) => {
    let newCourse = new CourseModel(course);
    let result = await newCourse.save();
    return result;
};
