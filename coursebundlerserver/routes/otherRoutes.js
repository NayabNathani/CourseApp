import express from "express";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherControllers.js";
import {authorizeAdmin, isAuthenticated} from "../middlewares/Auth.js"

const router = express.Router();

//contact form
router.route("/contact").post(contact);

//request form
router.route("/courserequest").post(courseRequest);

//Get admin Dashboard stats
router.route("/admin/stats").get(isAuthenticated, authorizeAdmin, getDashboardStats);

export default router;