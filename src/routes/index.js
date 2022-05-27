import { Router as expressRouter } from "express";
import PingRoute from "./ping/index.js";
import PostsRoute from "./posts/index.js";
import { validatePostRequest } from "../middlewares/postsValidators.js";

const router = expressRouter();

router.use("/ping", PingRoute);
router.use("/posts", validatePostRequest, PostsRoute);


export default router;