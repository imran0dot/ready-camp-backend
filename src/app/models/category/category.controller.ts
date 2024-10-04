import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createCategoryIntoDb, findAllCategories } from "./category.services";

export const createCategory = catchAsync(async (req: Request, res: Response) => {
    const  category = await createCategoryIntoDb(req.body);
    sendResponse(res, {
        data: category,
        isSuccess: true,
        status: 201,
    })
});


export const findCategories = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllCategories();
    sendResponse(res, {
        data: result,
        isSuccess: true,
        status: 201,
    })
})