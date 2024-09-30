import { connectDB } from '../mongodb/mongoose.js'
import User from '../models/user.model.js'

export const createUser = async (id, email, first_name, last_name, username, image_url) => {
    try {
        await connectDB();

        const user = new User({
            clerkID: id,
            email: email,
            first_name: first_name,
            last_name: last_name,
            username: username,
            avatar: image_url,
        });

        await user.save();
        return user;
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
}

export const updateUser = async (id, email, first_name, last_name, username, image_url) => {
    try {
        await connectDB();

        const updatedUser = await User.findOneAndUpdate(
            { clerkID: id },
            { email: email, last_name: first_name, last_name: last_name, username: username, avatar: image_url },
            { new: true }
        );

        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error.message);
    }
}

export const deleteUser = async (id) => {
    try {
        await connectDB();
        await User.findOneAndDelete({clerkID: id})
    } catch (error) {
        console.error('Error deleting user:', error.message);
    }
}