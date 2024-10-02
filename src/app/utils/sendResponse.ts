import { Response } from "express";

interface ResponsePayload {
    data?: any;
    status: number;
    err?: string;
    isSuccess: boolean;
    token?: string;
    message?: string
}

const sendResponse = (res: Response, {
    data,
    status,
    err,
    isSuccess,
    token,
    message
}: ResponsePayload) => {
    res.status(status).json({
        isSuccess,
        err,
        data,
        token,
        message
    });
};

export default sendResponse;
