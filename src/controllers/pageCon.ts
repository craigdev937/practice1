import { RequestHandler } from "express";

export const HomePage: RequestHandler =
(req, res) => {
    res.render("pages/home", {
        pageTitle: "Home",
        styleCSS: "main.css",
        javaScript: "main.js"
    })
};

export const Navbar: RequestHandler =
(req, res) => {
    res.render("pages/navbar", {
        pageTitle: "Navbar",
        styleCSS: "navbar.css",
        javaScript: "navbar.js"
    })
};



