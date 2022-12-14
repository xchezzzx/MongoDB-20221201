import { Schema } from 'mongoose';

const courseSchema = new Schema({
    courseName: { type: String, require: true },
    mentor: String,
    duration: Number,
});

const validateCourseName = (courseName: string) => {
    return courseName && courseName.length > 0;
};

courseSchema.path("courseName").validate(validateCourseName);

export { courseSchema };
