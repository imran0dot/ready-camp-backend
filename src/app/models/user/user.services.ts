import TUser from "./user.interface";
import userModal from "./user.modal";
import bcrypt from "bcrypt";

const createUserIntoDb = async (userData: TUser) => {
    const user = await userModal.create(userData);
    return user;
}

const checkLoginUser = async (userData: Pick<TUser, 'email' | 'password'>) => {
    let user = await userModal.findOne({ email: userData.email });
    if (!user) {
        throw new Error('Something went wrong please check your user name and password again')
    } else {
        const checkPassWord = await bcrypt.compare(userData.password, user?.password as string);
        if (!checkPassWord) {
            throw new Error('Something went wrong please check your user name and password again')
        }
        user.password = "" as string
        return user
    }
}

const findAllUser = async () => {
    const allUser = await userModal.find();
    return allUser;
}

export const userServices = {
    createUserIntoDb,
    findAllUser,
    checkLoginUser
}