import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.services";
import sendResponse from "../../utils/sendResponse";

const createUser = catchAsync( async(req, res) => {
    const userData = req.body;
    const result = await userServices.createUserIntoDb(userData);
    sendResponse(res, {
        data: result,
        isSuccess: true,
        status: 201,
    })
});




export const userControllers = {
    createUser
}