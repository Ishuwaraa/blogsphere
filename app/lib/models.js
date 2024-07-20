import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, { timestamps: true })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    blogs: [String],
    // password: {
    //     type: String,
    //     required: true
    // }
}, { timestamps: true })

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)
export const User = mongoose.models.User || mongoose.model('User', userSchema)