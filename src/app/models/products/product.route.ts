import { Router } from "express";
import { createProduct } from "./product.controllers";

const router = Router();

// create a product 
router.post('/create-new', createProduct);

export const productRouter = router;