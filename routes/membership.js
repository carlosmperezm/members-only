import { Router } from "express";
import {
    getMembershipForm,
    activateMembership
} from "../controllers/membershipController.js";

const membershipRouter = Router();

membershipRouter.get("/", getMembershipForm);
membershipRouter.post("/activate", activateMembership, redirectToHome);

function redirectToHome(req, res) {
    return res.send("You are a member :)")
    // res.redirect("/");
}

export default membershipRouter;