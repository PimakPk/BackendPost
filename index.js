import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 3000;
const DB_URL = "mongodb+srv://pimak:admin@clusterbackendcourse.dmlizfz.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBackendCourse"

const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);


async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("Server started on port = " + PORT));
    } catch(e) {
        console.log(e);
    }
}

startApp();