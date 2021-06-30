import express from "express";
import { HomePage } from "../controllers/pageCon";

export const pageRt: express.Router = express.Router();
    pageRt.get("/", HomePage);




