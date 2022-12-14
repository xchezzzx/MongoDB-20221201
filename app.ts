import { courseRouter } from './application/course/routes/index';
import express, { Application, NextFunction, Response, Request } from "express";
import { studentRouter } from "./application/student/routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());

app.use(cors());
app.use(myLogger);
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);

function myLogger(req: Request, res: Response, next: NextFunction) {
    console.log("My logger appears");
    console.log(req.url);
    next();
}

export { app };