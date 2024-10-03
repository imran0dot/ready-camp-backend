import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken';
import { config } from "../config";

export const userVerify = (userType: "Admin" | "Customer") => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = (req.headers.token as string).split(" ")[1];
            const decoded = jwt.verify(token, config.jwt_key as string) as { id: string, email: string, userType: "Admin" | "Customer" };

            if (decoded.userType === userType) {
                next();
            }
            else {
                throw new Error('You are not allowed to create this action')
            }
        } catch (err) {
            throw new Error('something went wrong to decoded token' + err)
        }
    }
}