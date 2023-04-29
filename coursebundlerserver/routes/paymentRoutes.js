import express from "express";
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js";
import {isAuthenticated} from "../middlewares/Auth.js"

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

//Verify Payment and Save reference in Database
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

//Get RazorPay Key
router.route("/razorpaykey").get(getRazorPayKey);

//Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

//

export default router;