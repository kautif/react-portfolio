import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setTechModal } from "../../redux/techSlice";
import "./TechModal.css";

export default function TechModal () {
    const showHtml = useSelector(state => state.tech.showHtml);
    const showTailwind = useSelector(state => state.tech.showTailwind);
    const showJs = useSelector(state => state.tech.showJs);
    const showReact = useSelector(state => state.tech.showReact);
    const showNode = useSelector(state => state.tech.showNode);
    const showPhp = useSelector(state => state.tech.showPhp);
    const dispatch = useDispatch();
    return (
        <div className="tech-modal bg-red-400/90 p-10 rounded">
            <span className="tech-modal__close text-slate-50 text-3xl cursor-pointer" onClick={() => dispatch(setTechModal())}>X</span>
            {showHtml && 
                <div>
                    <h1 className="text-slate-50 text-3xl text-center mb-5">HTML & CSS</h1>
                    <p className="text-slate-800 text-xl">Responsive development via flexbox, media queries, or bootstrap pseudoclasses, transitions, and animations</p></div>}
            {showTailwind && 
                <div>
                    <h1 className="text-slate-50 text-3xl text-center mb-5">Tailwind</h1>
                    <p className="text-slate-800 text-xl">Responsive development via flexbox, media queries, or bootstrap pseudoclasses, transitions, and animations</p>    
                </div>}
            {showJs && 
                <div>
                    <h1 className="text-slate-50 text-3xl text-center mb-5">JavaScript</h1>
                    <p className="text-slate-800 text-xl">Lightbox, slideshows, interactive UI, collapsible containers, sliding navigation for mobile. </p>
                </div>}
            {showReact && 
                <div>
                    <h1 className="text-slate-50 text-3xl text-center mb-5">React</h1>
                    <p className="text-slate-800 text-xl">Context and Redux (useSelector, useDispatch), axios, React hooks (useState, useEffect), making custom components, event listeners, conditional rendering, react-bootstrap.</p>
                </div>}
            {showNode && 
                <div>
                    <h1 className="text-slate-50 text-3xl text-center mb-5">Node</h1>
                    <p className="text-slate-800 text-xl">jwt authentication, CRUD, filter through database entries, and send responses back to the client </p>
                </div>}
            {showPhp && 
                <div>
                    <h1 className="text-slate-50 text-3xl text-center mb-5">WordPress & PHP</h1>
                    <p className="text-slate-800 text-xl">Muffin Builder, page/product templates, Advanced Custom Fields, WooCommerce, curl to pull data from ACF and WooCommerce, AJAX ZOOM</p>
                </div>}
        </div>
    )
}