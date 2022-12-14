import { deleteCourseRoute } from "./delete.course";
import { getCoursesRoute } from "./get.course";
import { addCoursesRoute } from "./post.course";

export const courseRouter = [
    getCoursesRoute,
    addCoursesRoute,
    deleteCourseRoute
];
