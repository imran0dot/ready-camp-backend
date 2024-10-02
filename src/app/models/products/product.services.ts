import IProduct from "./product.interface"
import Product from "./products.model"

export const createProductIntoDb = async (productData: IProduct) => {
    const result = await Product.create(productData);
    return result;
};
