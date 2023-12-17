import express from "express";
import { getAllUsers, getUser } from "../controllers/userController.js";


const userRouter = express.Router();

//update
// userRoute.put('/:id', verifyToken, updateUser)

//delete
// userRoute.delete('/:id', verifyToken, deleteUser)

//get a user
userRouter.get('/find/', getUser)


userRouter.get('/all', getAllUsers)




export default userRouter