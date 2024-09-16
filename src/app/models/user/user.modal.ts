import mongoose from "mongoose";
import TUser from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema<TUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);


// user check before create a user F
userSchema.pre('save', async function (next) {
    const existingUser = await userModal.findOne({ email: this.email });
    if (!existingUser) {
        next()
    } else {
        throw new Error('This User already Exist Please Login')
    }
})



// set password inscrypted
userSchema.pre('save', async function (next) {
    try {
        this.password = await bcrypt.hash(this.password, 10);

        next();
    } catch (err) {
        throw new Error('Password does not ')
    }
});

userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
})




const userModal = mongoose.model<TUser>('user', userSchema);
export default userModal;