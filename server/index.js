import express from "express";
import "dotenv/config"
import postsRouter from "./routers/posts-router.js";
import connectDb from "./utils/db.js"
import cors from 'cors';

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
    return res.send("<h3>Threads-Social-Media/server is working...</h3>");
})

app.use("/posts", postsRouter);




app.all("*", (req, res, next) => {
    return res.status(404).json({
        message: "NOT FOUND"
    })
})

app.listen(process.env.PORT, async () => {
    console.log("Server started => http://localhost:" + process.env.PORT);
    await connectDb();
})