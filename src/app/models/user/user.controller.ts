import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.services";
import sendResponse from "../../utils/sendResponse";
import createToken from "../../utils/createToken";

const createUser = catchAsync(async (req, res) => {
    const userData = req.body;
    const result = await userServices.createUserIntoDb(userData);
    const token = createToken({ id: result._id, email: result.email, userType: result.userType });
    sendResponse(res, {
        data: result,
        isSuccess: true,
        status: 201,
        token
    })
});


const loginUser = catchAsync(async (req: Request, res: Response) => {
    const userData = req.body;

    if (!userData.email || !userData.password) {
        return sendResponse(res, {
            isSuccess: false,
            status: 400,
            message: 'Email and password are required.'
        });
    }
    const result = await userServices.checkLoginUser(userData);

    if (!result) {
        return sendResponse(res, {
            isSuccess: false,
            status: 401,
            message: 'Invalid credentials.'
        });
    }

    // Create a token
    const token = createToken({ id: result._id, email: result.email, userType: result.userType });

    // Set the token in the cookies
    res.cookie('token', token);

    // Send response
    return sendResponse(res, {
        isSuccess: true,
        status: 200, 
        data: result,
        token
    });
});





export const userControllers = {
    createUser,
    loginUser
}