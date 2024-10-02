import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import IOrder from "./order.interface";



// TODO 
// const createOrder = catchAsync(async (req: Request, res: Response) => {
//     const { products } = req.body;
//     const checkProducts = await 
//     const totalPrice = products.reduce(
//         (product, currentValue) => product.price + currentValue,
//         0,
//     );

//     const orderData = {
//         customer: "",
//         products: req.body?.products,
//         quantity: 0,
//         totalPrice: 20,
//         status: 'Pending',
//     }

// });


export const orderControllers = {
    // createOrder
}