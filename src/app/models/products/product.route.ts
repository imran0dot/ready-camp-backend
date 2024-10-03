import { Router } from "express";
import { createProduct, findAllProducts, findSingleProduct } from "./product.controllers";
import { userVerify } from "../../middleware/userVerify";

const router = Router();

// create a product 
router.get('/', findAllProducts);
router.post('/create-new', userVerify("Admin"), createProduct);
router.get("/:slug", findSingleProduct);

export const productRouter = router;