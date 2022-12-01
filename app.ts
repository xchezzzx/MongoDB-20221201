import * as dotenv from "dotenv"
import { bootstrap } from "./bootstrap";

dotenv.config();

bootstrap(startUp);

function startUp() {
    console.log("Application is already started");
}