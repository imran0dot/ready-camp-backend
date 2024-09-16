import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/config";

const main = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/camping');
        app.listen(config.port as string, () => {
            console.log(`your server is running on this port http://localhost:${config.port}`)
        })
    }catch(err){
        throw new Error(err as string)
        console.log(err);
    }
};

main();