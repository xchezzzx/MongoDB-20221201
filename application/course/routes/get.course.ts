import { Router, Request, Response } from "express";
import { getCourses } from "../service";

const route = Router();

route.get("/", async (req: Request, res: Response) => {
    let result = await getCourses();
    res.send(result);
});

export { route as getCoursesRoute };
