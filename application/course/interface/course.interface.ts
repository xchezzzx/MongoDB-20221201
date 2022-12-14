import { ObjectId } from 'mongodb';

export interface ICourse {
    _id?: ObjectId;
    courseName: string;
    mentor: string;
    duration: number;
}
