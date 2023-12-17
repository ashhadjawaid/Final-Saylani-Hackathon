
import { createError } from "../error.js";
import User from "../models/User.js";


export const getAllUsers = async (req, res, next) => {
    try {
        const Users = await User.find()

        if (!Users[0]) return next(createError(404, 'no user found', req, res))



        res.status(200).json(Users)
    } catch (error) {
        next(error)
    }
}


export const getUser = async (req, res, next) => {


    try {
        const user = await User.findOne(req.body.email)

        res.status(200).json({
            "succes": "true",
            "data": user
        })

    } catch (error) {
        next(error)
    }

}