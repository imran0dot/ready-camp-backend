import { Router } from "express";
import { userRouter } from "../app/models/user/user.route";
const router = Router();

//Route path
const routes = [
    {
        path: "/user",
        route: userRouter
    }
]

routes.map(route => router.use(route.path, route.route));
export default router;
