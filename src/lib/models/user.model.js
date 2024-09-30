import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkID: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: false,
            unique: true,
        },
        avatar: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
