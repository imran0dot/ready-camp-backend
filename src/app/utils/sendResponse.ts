import { Response } from "express";

interface ResponsePayload {
    data?: any;
    status: number;
    err?: string;
    isSuccess: boolean;
}

const sendResponse = (res: Response, {
    data,
    status,
    err,
    isSuccess
}: ResponsePayload) => {
    res.status(status).json({
        isSuccess,
        err,
        data
    });
};

export default sendResponse;
