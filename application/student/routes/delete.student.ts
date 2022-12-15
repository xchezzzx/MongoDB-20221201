import { Request, Response, Router } from "express";
import { deleteStudent, deleteStudentByFirstNameLastName, deleteStudentByFirstNameLastNameAge } from "../service";

const route = Router();

route.delete("/", async (req: Request, res: Response) => {
    if (req.query &&
        req.query.firstName &&
        req.query.lastName &&
        typeof (req.query.age) === "number") {
        let result = await deleteStudentByFirstNameLastNameAge(
            req.query.firstName as string,
            req.query.lastName as string,
            req.query.age as number
        );
        res.send(result);
    }
    res.send(false);
});

route.delete("/:id", async (req: Request, res: Response) => {

    console.log("To delete: ", req.params.id);
    let result = await deleteStudent(req.params.id);
    res.send("DELETED: " + result);
})

route.delete("/:firstName/:lastName", async (req: Request, res: Response) => {

    // console.log("To delete: ", req.params.id);

    if (req.params && req.params.firstName && req.params.lastName) {
        let firstName = req.params.firstName as string;
        let lastName = req.params.lastName as string

        let result = await deleteStudentByFirstNameLastName(firstName, lastName);
        res.send("DELETED: " + result);        
    }

})

export { route as deleteStudentsRoute };