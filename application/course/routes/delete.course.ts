import { Request, Response, Router } from "express";
import { ObjectId } from "mongoose";
import { deleteCourse } from "../service";

const route = Router();

route.delete("/", async (req: Request, res: Response) => {

    let id: ObjectId = req.body._id;
    console.log(id);

    let result = await deleteCourse(id);
    res.send("DELETED: " + result);
})

export { route as deleteCourseRoute };
