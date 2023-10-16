import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "./Nav.css";

export default function Nav () {
    $(".navbar-mobile__close").on("click", function () {
        // $(".navbar").animate({direction: 'left'}, 1000);
        $(".navbar").show("slide", {direction: 'left'}, 1000);
    })

    return (
        <ul className="navbar flex justify-around bg-red-400 p-4">
            <Link className="text-slate-50 text-3xl" to="/">Home</Link>
            <Link className="text-slate-50 text-3xl" to="/projects">Projects</Link>
            <Link className="text-slate-50 text-3xl" to="#">Resume</Link>
            <Link className="text-slate-50 text-3xl" to="#">Contact</Link>
            <span className="navbar-mobile__close text-6xl text-white">X</span>
        </ul>
    )
}