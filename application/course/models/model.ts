import { ICourse } from './../interface/course.interface';
import { db } from "../../../mongoDb/mongoDb";
import { courseSchema } from '../../../mongoDb/schema/course.schema';

export const CourseModel = db.model<ICourse>(
    "courses",
    courseSchema,
    "courses"
)
