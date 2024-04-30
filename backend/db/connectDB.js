import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB Connected : ${conn.connection.host}`);
    } catch (err) {
        console.log(`errorr: ${err.message}`);
        process.exit(1)
    }
}