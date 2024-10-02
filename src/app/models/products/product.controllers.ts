import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createProductIntoDb } from "./product.services";

export const createProduct = catchAsync(async (req: Request, res: Response) => {
    const productData = req.body;
    const result = createProductIntoDb(productData);
    sendResponse(res, {
        isSuccess: true,
        status: 200,
        data: result,
    })
});


