import React from "react";
import "./Home.css";

export default function Home () {
    return (
        <div>
            <div className="main-container">
                <img className="w-1/4 ml-auto mr-auto mt-20"  src="../autif_trans_crop.png" />
                <div className="tech-container">
                    <h1 className="text-slate-50">HTML & CSS</h1>
                    <h1 className="text-slate-50">Tailwind</h1>
                    <h1 className="text-slate-50">JavaScript</h1>
                    <h1 className="text-slate-50">React</h1>
                    <h1 className="text-slate-50">Node</h1>
                    <h1 className="text-slate-50">WordPress & PHP</h1>
                </div>
            </div>
        </div>
    )
}