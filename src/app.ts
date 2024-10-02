import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import { Error } from 'mongoose';
import sendResponse from './app/utils/sendResponse';
import cookieParser from "cookie-parser"


const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true}));

app.use(cookieParser());

app.use('/api', router)



class HttpError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}

app.use((err: Error | HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err instanceof HttpError ? err.statusCode : 500;

    if (err) {
        console.log(err);
        sendResponse(res, {
            isSuccess: false,
            status: statusCode,
            message: err.message
        })
    }
    next();
})
export default app;