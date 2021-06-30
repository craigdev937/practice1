import { RequestHandler } from "express";

export const HomePage: RequestHandler =
(req, res) => {
    res.render("pages/home", {
        pageTitle: "Home",
        styleCSS: "main.css"
    })
};





