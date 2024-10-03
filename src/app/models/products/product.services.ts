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


export const findSingleProduct = async (id: Types.ObjectId) => {
    const result = await Product.findById(id);
    return result;
}
