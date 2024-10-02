import { Router } from "express";
import { userRouter } from "../app/models/user/user.route";
import { productRouter } from "../app/models/products/product.route";
const router = Router();

//Route path
const routes = [
    {
        path: "/user",
        route: userRouter
    }, 
    {
        path: "/product",
        route: productRouter
    }
]

routes.map(route => router.use(route.path, route.route));
export default router;
