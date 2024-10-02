import jwt from 'jsonwebtoken';
import { config } from '../config';

const createToken = (userDetails: {
    id: Object,
    email: string
}) => {
    try {
        const token = jwt.sign(userDetails, config.jwt_key as string);
        return token;
    } catch (err) {
        throw new Error('Something went wrong!' + err);
    }
};

export default createToken;