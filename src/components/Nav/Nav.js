import React from "react";
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <ul>
            <Link className="underline" to="/projects">Projects</Link>
        </ul>
    )
}