import mongoose from "mongoose";
import { number, string } from "zod";
import IOrder from "./order.interface";

const orderSchema = new mongoose.Schema<IOrder>({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    products: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled']
    }
},
    {
        timestamps: true
    });

const orderModel = mongoose.model<IOrder>('Order', orderSchema);
export default orderModel;