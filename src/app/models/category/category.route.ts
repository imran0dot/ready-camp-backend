import { Router } from "express";
import { userVerify } from "../../middleware/userVerify";
import { createCategory, findCategories } from "./category.controller";

const router = Router();

router.post("/create-new", userVerify("Admin"), createCategory);
router.get("/", findCategories)


export const categoryRouter = router;