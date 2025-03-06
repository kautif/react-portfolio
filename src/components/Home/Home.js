import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHtml, setTailwind, setJs, setReact, setNode, setPhp, setTechModal } from "../../redux/techSlice";

import "./Home.css";
import TechModal from "../TechModal/TechModal";

export default function Home () {
    const dispatch = useDispatch();
    const showTechModal = useSelector(state => state.tech.showTechModal);
    // const showHtml = useSelector(state => state.tech.showHtml);
    // const showTailwind = useSelector(state => state.tech.showTailwind);
    // const showJs = useSelector(state => state.tech.showJs);
    // const showReact = useSelector(state => state.tech.showReact);
    // const showNode = useSelector(state => state.tech.showNode);
    // const showPhp = useSelector(state => state.tech.showPhp);

    // useEffect(() => {
    //     dispatch(setTechModal());
    //     console.log("showTechModal: ", showTechModal);
    // }, [showHtml, showTailwind, showJs, showReact, showNode, showPhp])

    return (
        <div>
            <div className="main-container">
                <div className="intro-container">
                    <img className="profile-pic ml-auto mr-auto mt-20"  src="../assets/autif_trans_crop.png" />
                    <div className="intro__text text-2xl">
                        <h2 className="text-white"><em>Frontend Developer</em></h2>
                        <h3 className="text-white">Click on a technology</h3>
                    </div>
                </div>
                <div className="tech-container">
                    <h1 className="text-slate-50 text-3xl cursor-pointer" onClick={() => {
                        // dispatch(setTechModal());
                        dispatch(setHtml());
                    }}>HTML & CSS</h1>
                    <h1 className="text-slate-50 text-3xl cursor-pointer" onClick={() => dispatch(setTailwind())}>Tailwind</h1>
                    <h1 className="text-slate-50 text-3xl cursor-pointer" onClick={() => {
                        dispatch(setJs());
                    }}>JavaScript</h1>
                    <h1 className="text-slate-50 text-3xl cursor-pointer" onClick={() => dispatch(setReact())}>React</h1>
                    <h1 className="text-slate-50 text-3xl cursor-pointer" onClick={() => dispatch(setNode())}>Node</h1>
                    {/* <h1 className="text-slate-50 text-3xl cursor-pointer" onClick={() => dispatch(setPhp())}>WordPress & PHP</h1> */}
                </div>
                {showTechModal && <TechModal />}
            </div>
        </div>
    )
}