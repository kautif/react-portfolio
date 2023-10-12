import React from "react";
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <ul className="flex justify-around bg-red-400 p-4">
            <Link className="text-slate-50 text-xl" to="/">Home</Link>
            <Link className="text-slate-50 text-xl" to="/projects">Projects</Link>
            <Link className="text-slate-50 text-xl" to="#">Resume</Link>
            <Link className="text-slate-50 text-xl" to="#">Contact</Link>
        </ul>
    )
}