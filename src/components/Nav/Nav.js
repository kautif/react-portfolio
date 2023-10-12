import React from "react";
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <ul className="flex justify-around bg-red-400 p-4">
            <Link className="text-slate-50" to="/">Home</Link>
            <Link className="text-slate-50" to="/projects">Projects</Link>
            <Link className="text-slate-50" to="#">Resume</Link>
            <Link className="text-slate-50" to="#">Contact</Link>
        </ul>
    )
}