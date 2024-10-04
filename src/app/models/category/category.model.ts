import mongoose from "mongoose";
import ICategory from "./category.interface";

const categorySlice = new mongoose.Schema<ICategory>({
    name: {
        type: String,
        required: true
    }
});


const categoryModel = mongoose.model<ICategory>('category', categorySlice);
export default categoryModel;