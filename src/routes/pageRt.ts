import express from "express";
import { HomePage, Navbar } from "../controllers/pageCon";

export const pageRt: express.Router = express.Router();
    pageRt.get("/", HomePage);
    pageRt.get("/navbar", Navbar);




