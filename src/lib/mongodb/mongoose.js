import mongoose from "mongoose";

let initialized = false;

export const connectDB = async () => {
    if (initialized) return; // Avoid reconnecting if already connected

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'myDatabase', // Specify the database name
        });
        console.log("MongoDB connected to database");
        initialized = true; // Mark the connection as initialized
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};
