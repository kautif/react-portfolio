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
        <div className="tech-modal bg-red-400 p-10 rounded">
            <span className="tech-modal__close" onClick={() => dispatch(setTechModal())}>X</span>
            {showHtml && <p className="text-white">HTML & CSS: Responsive development via flexbox, media queries, or bootstrap pseudoclasses, transitions, and animations</p>}
            {showTailwind && <p className="text-white">Responsive development via flexbox, media queries, or bootstrap pseudoclasses, transitions, and animations</p>}
            {showJs && <p className="text-white">JavaScript: Lightbox, slideshows, interactive UI, collapsible containers, sliding navigation for mobile. </p>}
            {showReact && <p className="text-white">React: Context and Redux (useSelector, useDispatch), axios, React hooks (useState, useEffect), making custom components, event listeners, conditional rendering, react-bootstrap.</p>}
            {showNode && <p className="text-white"> Node: jwt authentication, CRUD, filter through database entries, and send responses back to the client </p>}
            {showPhp && <p className="text-white">WordPress & PHP: Muffin Builder, page/product templates, Advanced Custom Fields, WooCommerce, curl to pull data from ACF and WooCommerce, AJAX ZOOM</p>}
        </div>
    )
}