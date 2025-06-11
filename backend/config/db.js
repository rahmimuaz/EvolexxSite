import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://evolexxlk:1234@cluster0.x1ivo7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error("DB Connection Error: ", err));
};
 