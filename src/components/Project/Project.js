import React from "react";

export default function Project (props) {
    return (
        <div>
            <h2 className="text-white">{props.projectTitle}</h2>
            <img className="w-full" src={props.projectImgSrc} />
            <div className="flex justify-around mb-5">
                <a href={props.projectLink} target="_blank" role="group">
                    <button type="button" className="bg-orange-400 px-4 py-2 mt-10 text-2xl text-white rounded">Live</button>
                </a>
                <a href={props.githubLink} target="_blank" role="group">
                    <button type="button" className="bg-orange-400 px-4 py-2 mt-10 text-2xl text-white rounded">Repo</button>
                </a>
            </div>
            <p class="text-black">{props.projectDesc}</p>
        </div>
    )
}