import React from "react";
import { useDispatch } from "react-redux";
import "./FilterBtn.css";

export default function FilterBtn(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <img className="w-16 h-16 cursor-pointer" src={props.iconImg} />
        </div>
    )
}