import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTech } from "../../redux/techSlice";
import Project from "../Project/Project";
import "./Projects.css";
import FilterBtn from "../FilterBtn/FilterBtn";

export default function Projects () {
    const dispatch = useDispatch();
    const tech = useSelector(state => state.tech.tech);

    function showTech (currentTech) {
        for (let i = 0; i < document.getElementsByClassName("project").length; i++) {
            if (document.getElementsByClassName("project")[i].classList.contains(currentTech)) {
                document.getElementsByClassName("project")[i].style.display = "initial";
                console.log("showTech");
            } else {
                document.getElementsByClassName("project")[i].style.display = "none";
            }
        }
    } 

    return(
        <div>
            <div className="filter-btns-container">
                <h2 className="text-white text-center text-4xl">Select a Technology</h2>
                <h3 className="text-white text-center text-xl">Show only the projects you want to see</h3>
                <div className="filter-btns flex justify-around">
                    <div className="filter-btn" onClick={() => {
                        showTech("html");
                    }}>
                        <FilterBtn iconImg="../assets/html_icon.png" />
                    </div>
                    <div className="filter-btn" onClick={() => {
                        showTech("css");
                    }}>
                        <FilterBtn iconImg="../assets/css_icon.png"  />
                    </div>
                    <div className="filter-btn" onClick={() => {
                        showTech("js");
                    }}>
                        <FilterBtn iconImg="../assets/js_icon.png"  />
                    </div>
                    <div className="filter-btn" onClick={() => {
                        showTech("react");
                    }}>
                        <FilterBtn iconImg="../assets/react_icon.png"  />
                    </div>
                    <div className="filter-btn" onClick={() => {
                        showTech("node");
                    }}>
                        <FilterBtn iconImg="../assets/node_icon.png"  />
                    </div>
                    <div className="filter-btn" onClick={() => {
                        showTech("php");
                    }}>
                        <FilterBtn iconImg="../assets/php_icon.png"  />
                    </div>
                    <div className="filter-btn" onClick={() => {
                        showTech("wordpress");
                    }}>
                        <FilterBtn iconImg="../assets/wordpress.webp"  />
                    </div>
                    
                    <div className="filter-btn" onClick={() => {
                        showTech("csharp");
                    }}>
                        <FilterBtn iconImg="../assets/csharp_logo.png"  />
                    </div>
                    
                    <div className="filter-btn" onClick={() => {
                        showTech("net");
                    }}>
                        <FilterBtn iconImg="../assets/NET_CORE_Logo.svg"  />
                    </div>

                    <div className="filter-btn" onClick={() => {
                        showTech("tailwind");
                    }}>
                        <FilterBtn iconImg="../assets/tailwind.png"  />
                    </div>
                </div>
            </div>
            {
                // Try giving each project classes corresponding to the techs used. If techs match, show them. Otherwise, hide them. Do this via JS.
                <div className="flex flex-wrap justify-around projects-container">
                    <div className={"w-2/5 project html css js react"}>
                        <Project
                            id="mealplanner"
                            projectTitle="Meal Planner"    
                            projectImgSrc="../assets/meal_planner_screenshot.png" 
                            projectLink="https://incandescent-swan-68d171.netlify.app/"
                            githubLink="https://github.com/kautif/meal_planner"
                            projectDesc="This is a meal planner application made with React. It is a meal planner in a very loose sense. You can 
                            calculate your expected daily caloric intake based off your sex, age, height, and weight. You then, can add food to your 
                            list and various states are kept track of via Redux. This application doesn't have a backend, so if you refresh the site, 
                            you will lose everything. This won't tell you how whether what you're eating is nutritious. It will only tell you whether 
                            you're going beyond your daily caloric intake." />
                            <div className="flex justify-around mt-7">
                                <img className="w-16 h-16" src="../assets/html_icon.png" />
                                <img className="w-16 h-16" src="../assets/css_icon.png" />
                                <img className="w-16 h-16" src="../assets/js_icon.png" />
                                <img className="w-16 h-16" src="../assets/react_icon.png" />
                            </div>
                    </div>
                    <div className={"w-2/5 project html css js react node"} >
                        <Project
                            id="sf2gameselector"
                            projectTitle="Street Fighter 2 Themed Weighted Game Selector"    
                            projectImgSrc="../assets/sf2_random_select_mockup.png" 
                            projectLink="https://sf2-weighted-rando-game-select.netlify.app/"
                            githubLink="https://github.com/kautif/sf2-random-game-select-frontend"
                            projectDesc="Create an account and login with NodeJS, search for games via an API, add and delete games to and from your 
                            list, update their votes. Have a game randomly selected depending on the number of votes each game has. 
                            Uses context for global state management" />
                            <div className="flex justify-around mt-7">
                                <img className="w-16 h-16" src="../assets/html_icon.png" />
                                <img className="w-16 h-16" src="../assets/css_icon.png" />
                                <img className="w-16 h-16" src="../assets/js_icon.png" />
                                <img className="w-16 h-16" src="../assets/react_icon.png" />
                                <img className="w-16 h-16" src="../assets/node_icon.png" />
                            </div>
                    </div>
                    <div className={"w-2/5 project html css js react"}>
                        <Project
                            id="fishybones"
                            projectTitle="Fishybones (Knucklebones Clone)"    
                            projectImgSrc="../assets/knucklebones_mockups.png" 
                            projectLink="https://fishybones.netlify.app/"
                            githubLink="https://github.com/kautif/knucklebones"
                            projectDesc="A clone of a minigame that I saw in a game called Cult of the Lamb. It's a 2 player game. On each player's turn, they gets a die with a random value from 1 to 6 and drop it in one of 3 columns. There are ways to multiply your score or reduce the opponents. This and each player's die values throughout the game are tracked with Context." />
                            <div className="flex justify-around mt-7">
                                <img className="w-16 h-16" src="../assets/html_icon.png" />
                                <img className="w-16 h-16" src="../assets/css_icon.png" />
                                <img className="w-16 h-16" src="../assets/js_icon.png" />
                                <img className="w-16 h-16" src="../assets/react_icon.png" />
                            </div>
                    </div>
                    <div className={"w-2/5 project html css js react tailwind"}>
                        <Project
                            id="todo"
                            projectTitle="Todo Application"    
                            projectImgSrc="../assets/react_redux_todos.png" 
                            projectLink="https://dashing-lolly-791779.netlify.app/"
                            githubLink="https://github.com/kautif/todos"
                            projectDesc="This is a simple React Todo application, but I also used this as an opportunity to play with Redux and 
                            TailwindCSS and so far, I'm liking them both. In this project, Redux was used to keep track of the items in the list, 
                            add to it, or remove from it" />
                            <div className="flex justify-around mt-7">
                                <img className="w-16 h-16" src="../assets/html_icon.png" />
                                <img className="w-16 h-16" src="../assets/css_icon.png" />
                                <img className="w-16 h-16" src="../assets/js_icon.png" />
                                <img className="w-16 h-16" src="../assets/react_icon.png" />
                                <img className="w-16 h-16" src="../assets/tailwind.png" />
                            </div>
                    </div>
                    <div className={"w-2/5 project html css csharp net"}>
                        <Project
                            id="yugioh"
                            projectTitle="Yu-Gi-Oh Card Search"    
                            projectImgSrc="../assets/mockup_yugioh_card_search.png" 
                            projectLink="https://drive.google.com/file/d/15jZDUTpaW_swFENYLPe9Wj0TzDpQ9NQQ/view?usp=drive_link"
                            githubLink="https://github.com/kautif/yugioh_card_search"
                            projectDesc="Search for Yugioh cards via YGOProdeck API and get going prices for each card according to eBay. Failed search results will return an error message and prompt another search. My Azure membership expired, so I'm afraid you can't play with it. You can only demo it and ask me questions about it" />
                            <div className="flex justify-around mt-7">
                                <img className="w-16 h-16" src="../assets/html_icon.png" />
                                <img className="w-16 h-16" src="../assets/css_icon.png" />
                                <img className="w-16 h-16" src="../assets/csharp_logo.png" />
                                <img className="w-16 h-16" src="../assets/NET_CORE_Logo.svg" />
                            </div>
                    </div>
                    <div className={"w-2/5 project html css js jquery php wordpress"}>
                        <Project
                            id="icare"
                            projectTitle="iCare Pharmacy"    
                            projectImgSrc="../assets/all_sizes_icare_mockup_trans.png" 
                            projectLink="https://www.icarepharmacy.ca"
                            githubLink=""
                            projectDesc="Small Pharmacy located in Edmonton, AB. Added forms and calendar plugins for users to sign up for vaccinations through the site. Created and formatted blog posts via owner documents" />
                            <div className="flex justify-around mt-7">
                                <img className="w-16 h-16" src="../assets/html_icon.png" />
                                <img className="w-16 h-16" src="../assets/css_icon.png" />
                                <img className="w-16 h-16" src="../assets/js_icon.png" />
                                <img className="w-16 h-16" src="../assets/jquery_icon.png" />
                                <img className="w-16 h-16" src="../assets/php_icon.png" />
                                <img className="w-16 h-16" src="../assets/wordpress.webp" />
                            </div>
                    </div>
                    <div className={"w-2/5 project html css js jquery php wordpress"}>
                        <Project
                            id="simplynuc"
                            projectTitle="Simply NUC"    
                            projectImgSrc="../assets/all_sizes_simplynuc_mockup_trans.png" 
                            projectLink="https://www.simplynuc.com"
                            githubLink=""
                            projectDesc="Growing startup selling mini PCs. Prepared products in WooCommerce store prior to launch, correcting product details, led a rehaul of the main products page, created a product comparison tool, functionality for a customer build your own bundle interface, created product and page templates" />
                            <div className="flex justify-around mt-7">
                                <img className="w-16 h-16" src="../assets/html_icon.png" />
                                <img className="w-16 h-16" src="../assets/css_icon.png" />
                                <img className="w-16 h-16" src="../assets/js_icon.png" />
                                <img className="w-16 h-16" src="../assets/jquery_icon.png" />
                                <img className="w-16 h-16" src="../assets/php_icon.png" />
                                <img className="w-16 h-16" src="../assets/wordpress.webp" />
                            </div>
                    </div>
                    <div className={"w-2/5 project html css js jquery"}>
                        <Project
                            id="sfquiz"
                            projectTitle="Street Fighter Quiz"    
                            projectImgSrc="../assets/mockup_sf.png" 
                            projectLink="https://www.kautif.com/sf_quiz"
                            githubLink="https://github.com/kautif/sfquiz"
                            projectDesc="Test your knowledge about this Street Fighter. Tracks your answers by saving them to an array, tells you whether your answers were right or wrong and what the corrects answers are at the end, and there are 3 possible endings depending on how many questions you answer correctly." />
                            <div className="flex justify-around mt-7">
                                <img className="w-16 h-16" src="../assets/html_icon.png" />
                                <img className="w-16 h-16" src="../assets/css_icon.png" />
                                <img className="w-16 h-16" src="../assets/js_icon.png" />
                                <img className="w-16 h-16" src="../assets/jquery_icon.png" />
                            </div>
                    </div>
            </div>
            }
        </div>
    )
}