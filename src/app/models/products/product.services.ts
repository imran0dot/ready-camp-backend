import { Types } from "mongoose";
import IProduct from "./product.interface"
import Product from "./products.model"

export const createProductIntoDb = async (productData: IProduct) => {
    const result = await Product.create(productData);
    return result;
};


export const findAllProductFromDb = async () => {
    const result = await Product.find();
    return result
}


export const findSingleProductFromDb = async (slug: string) => {
    const result = await Product.findOne({ slug: slug });
    return result;
}
