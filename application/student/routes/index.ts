import { deleteStudentsRoute } from "./delete.student";
import { getStudentsRoute } from "./get.student";
import { addStudentsRoute } from "./post.student";
import { putStudentsRoute } from './put.student';

export const studentRouter = [
    getStudentsRoute,
    addStudentsRoute,
    deleteStudentsRoute,
    putStudentsRoute
];
