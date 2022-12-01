import { connect } from "./mongoDb/mongoDb"

export const bootstrap = async (cb: Function) => {
    await connect();
    console.log("MongoDB connected");
    cb();
}