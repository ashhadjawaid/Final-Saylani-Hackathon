import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        lastname: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        course: {
            type: String,
            min: 3,
            max: 20,
        },
        phone: {
            type: Number,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 8
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", UserSchema)