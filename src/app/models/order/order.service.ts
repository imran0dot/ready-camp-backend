import IOrder from "./order.interface";
import orderModel from "./order.model"

const createOrderInDB = async (orderData: IOrder) => {
    const result = await orderModel.create(orderData);
    return result;
};


const orderServices = {
    createOrderInDB,
}