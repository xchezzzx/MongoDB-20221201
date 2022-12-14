import { Request, Response, Router } from "express";
import { ICourse } from "../interface";
import { addCourse } from "../service";

const route = Router();

route.post("/", async (req: Request, res: Response) => {

    let course: ICourse = {
        courseName: req.body.courseName,
        mentor: req.body.mentor,
        duration: req.body.duration
    };

    let result = await addCourse(course);
    res.send(result);
});

export { route as addCoursesRoute }
