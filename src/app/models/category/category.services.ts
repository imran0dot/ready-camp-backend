import categoryModel from "./category.model"

export const createCategoryIntoDb = async(category: string) => {
    const result = await categoryModel.create(category);
    return result;
};


export const findAllCategories = async () => {
    const result = await categoryModel.find();
    return result
}