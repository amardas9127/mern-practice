import mongoose from 'mongoose';
//mongodb connection
const connectDB = async (MONGO_URI) =>{
    console.log(MONGO_URI);
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;