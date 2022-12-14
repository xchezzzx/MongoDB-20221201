import { ObjectId } from 'mongoose';
import { db } from '../../../mongoDb/mongoDb';
import { CourseModel } from '../models/model';
import { ICourse } from './../interface/course.interface';

export const addCourse = async (course: ICourse) => {
    let newCourse = new CourseModel(course);
    let result = await newCourse.save();
    return result;
};

export const deleteCourse = async (id: ObjectId) => {
    // let newCourse = new CourseModel();
    console.log(id);
    const res = await CourseModel.deleteOne({ _id: id });
    return res.deletedCount;
}