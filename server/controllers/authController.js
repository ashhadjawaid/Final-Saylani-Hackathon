import User from "../models/User.js"
import bcrypt from "bcrypt";
import { createError } from "../error.js";
import jwt from 'jsonwebtoken'



const registerUser = async (req, res) => {

    try {




        //adding new user
        const newUser = await new User(req.body)

        // save and respond
        const user = await newUser.save();

        const { password, ...others } = user._doc

        res.status(200).json({
            "status": "register succesfull",
            "user data": others
        })
    }

    catch (error) {
        res.status(500).json(error)
    }
}




const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) return createError("404", "user not found", req, res)

        if (user.password != req.body.password) return createError(400, "wrong credentials", req, res);

        const { password, ...others } = user._doc;

        const token = jwt.sign({ id: user._id }, process.env.JWT)

        res
            .cookie("token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({
                "message": "sign in succesful",
                "data": { ...others, token }
            })



    } catch (error) {
        res.status(500).json(error)
    }
}


export { registerUser, loginUser }
