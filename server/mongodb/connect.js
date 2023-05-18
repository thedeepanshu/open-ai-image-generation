import mongoose from "mongoose";

const connectDB = (url) => {
    // the below line is used for search query req from UI
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
    .then(() => console.log("Database Connected Successfully!"))
    .catch((err) => console.error("Error:",err))
}

export default connectDB;