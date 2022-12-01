import * as dotenv from "dotenv";
dotenv.config();

import { bootstrap } from "./bootstrap";

bootstrap(startUp);

function startUp() {

    console.log("Application is already started");

    const { app } = require("./app");

    app.listen(3000, () => {
        console.log("App is listening on port 3000")
    });
}
