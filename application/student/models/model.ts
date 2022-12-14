import { db } from "../../../mongoDb/mongoDb";
import { studentSchema } from "../../../mongoDb/schema/student.schema";
import { IStudent } from "../interface/student.interface";

export const StudentModel = db.model<IStudent>(
    "students",
    studentSchema,
    "students"
);
