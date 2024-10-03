import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createProductIntoDb, findAllProductFromDb, findSingleProductFromDb } from "./product.services";
import slugify from "slugify";

export const createProduct = catchAsync(async (req: Request, res: Response) => {
    const productData = req.body;
    let slugForProduct = slugify(productData.title, { lower: true });

    const isSlugExist = async (slug: string) => {
       const checkProductExist = await findSingleProductFromDb(slug);
       return (checkProductExist !== null);
    };

    const baseSlug = slugForProduct;
    let counter = 1;

    // while slug is exist on db incraseing counter and checking with update slug 
    while(await isSlugExist(slugForProduct)){
        slugForProduct = `${baseSlug}-${counter}`;
        counter++
    }

    const productWithSlug = {
        ...productData,
        slug: slugForProduct 
    };

    const result = await createProductIntoDb(productWithSlug);
    sendResponse(res, {
        isSuccess: true,
        status: 200,
        data: result,
    });
});

export const findAllProducts = catchAsync(async (req: Request, res: Response) => {
    const result = await findAllProductFromDb();
    sendResponse(res, {
        isSuccess: true,
        status: 200,
        data: result,
    })
})


export const findSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const { slug } = req.params;
    const result = await findSingleProductFromDb(slug);

    sendResponse(res, {
        isSuccess: true,
        status: 200,
        data: result,
    })
});