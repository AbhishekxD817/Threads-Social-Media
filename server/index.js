import express from "express";
import "dotenv/config"
import postsRouter from "./routers/posts-router.js";
import connectDb from "./utils/db.js"

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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