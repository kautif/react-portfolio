import React from "react";
import { useDispatch } from "react-redux";
import { setHtml } from "../../redux/techSlice";

import "./Home.css";

export default function Home () {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="main-container">
                <img className="w-1/4 ml-auto mr-auto mt-20"  src="../autif_trans_crop.png" />
                <div className="tech-container">
                    <h1 className="text-slate-50" onClick={() => dispatch(setHtml())}>HTML & CSS</h1>
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