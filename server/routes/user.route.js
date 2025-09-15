import express from "express";
import { test } from "../controller/user.controller.js";


const router = express.Router();

// router.get("/test", (req, res) => {
//     res.send("Hello World!..");
// });
router.get('/test', test)
export default router;