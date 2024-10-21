import mongoose from "mongoose";

const connectDb = async (req, res, next) => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connect successfully");
    } catch (error) {
        const { message = "Error While connected to db" } = error;
        console.log(message);
    }
}

export default connectDb;