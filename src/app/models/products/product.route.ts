import { Router } from "express";
import { createProduct } from "./product.controllers";
import { userVerify } from "../../middleware/userVerify";

const router = Router();

// create a product 
router.post('/create-new', userVerify("Admin"), createProduct);

export const productRouter = router;