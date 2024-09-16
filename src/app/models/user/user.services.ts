import TUser from "./user.interface";
import userModal from "./user.modal";

const createUserIntoDb = async(userData: TUser) => {
    const user = await userModal.create(userData);
    return user;
}

const findAllUser = async () => {
    const allUser = await userModal.find();
    return allUser;
}

export const userServices = {
    createUserIntoDb,
    findAllUser,
}