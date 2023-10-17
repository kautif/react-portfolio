import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "./Nav.css";

export default function Nav () {
    function closeNav () {
        document.getElementById("navbar").classList.remove("navbar-reveal");
        document.getElementById("navbar").classList.add("navbar-hide");
    }

    function openNav () {
        document.getElementById("navbar").classList.remove("navbar-hide");
        document.getElementById("navbar").classList.add("navbar-reveal");
    }

    return (
        <div>
            <div className="navbar-mobile__open-container" onClick={() => openNav()}>
                <img className="w-1/8 navbar-mobile__open" src="../assets/hamburger.png" alt="mobile menu open" />
            </div>
            <ul id="navbar" className="navbar navbar-hide flex justify-around bg-red-400 p-4">
                <Link className="text-slate-50 text-3xl" to="/">Home</Link>
                <Link className="text-slate-50 text-3xl" to="/projects">Projects</Link>
                <Link className="text-slate-50 text-3xl" target="_blank" to="https://docs.google.com/document/d/1O4eKqJPPB2A--5Jy1se2gzJVsH5t-mhQ-uaZ23rWlkk/edit?usp=sharing">Resume</Link>
                <Link className="text-slate-50 text-3xl" to="mailto: kautif@gmail.com">Contact</Link>
                <span id="navbar-mobile__close" className="navbar-mobile__close text-6xl text-white" onClick={() => closeNav()}>X</span>
            </ul>
        </div>
    )
}