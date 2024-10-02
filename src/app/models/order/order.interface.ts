import mongoose from "mongoose";

interface IOrder {
    customer: mongoose.Schema.Types.ObjectId;
    products: {
        id: mongoose.Schema.Types.ObjectId,
        quantity: number
    }[];
    quantity: number;
    totalPrice: number;
    status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  }

  export default IOrder