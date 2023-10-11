import React from "react";
import Project from "../Project/Project";

export default function Projects () {
    return(
        <div className="flex flex-wrap justify-around">
            <div className="w-2/5">
                <Project
                    projectTitle="Meal Planner"    
                    projectImgSrc="../meal_planner_screenshot.png" 
                    projectLink="https://incandescent-swan-68d171.netlify.app/"
                    githubLink="https://github.com/kautif/meal_planner"
                    projectDesc="This is a meal planner application made with React. It is a meal planner in a very loose sense. You can calculate your expected daily caloric intake based off your sex, age, height, and weight. You then, can add food to your list and various states are kept track of via Redux. This application doesn't have a backend, so if you refresh the site, you will lose everything. This won't tell you how whether what you're eating is nutritious. It will only tell you whether you're going beyond your daily caloric intake." />
                    <div className="flex justify-around mt-7">
                        <img className="w-16 h-16" src="../html_icon.png" />
                        <img className="w-16 h-16" src="../css_icon.png" />
                        <img className="w-16 h-16" src="../js_icon.png" />
                        <img className="w-16 h-16" src="../react_icon.png" />
                    </div>
            </div>
            <div className="w-2/5">
                <Project
                    projectTitle="Street Fighter 2 Themed Weighted Game Selector"    
                    projectImgSrc="../sf2_random_select_mockup.png" 
                    projectLink="https://sf2-weighted-rando-game-select.netlify.app/"
                    githubLink="https://github.com/kautif/sf2-random-game-select-frontend"
                    projectDesc="Create an account, add games to your list via an API, set numbers of votes for each of them. Have a game 
                    randomly selected depending on the number of votes each game has" />
                    <div className="flex justify-around mt-7">
                        <img className="w-16 h-16" src="../html_icon.png" />
                        <img className="w-16 h-16" src="../css_icon.png" />
                        <img className="w-16 h-16" src="../js_icon.png" />
                        <img className="w-16 h-16" src="../react_icon.png" />
                        <img className="w-16 h-16" src="../node_icon.png" />
                    </div>
            </div>
            <div className="w-2/5">
                <Project
                    projectTitle="Fishybones (Knucklebones Clone)"    
                    projectImgSrc="../knucklebones_mockups.png" 
                    projectLink="https://fishybones.netlify.app/"
                    githubLink="https://github.com/kautif/knucklebones"
                    projectDesc="A clone of a minigame that I saw in a game called Cult of the Lamb" />
                    <div className="flex justify-around mt-7">
                        <img className="w-16 h-16" src="../html_icon.png" />
                        <img className="w-16 h-16" src="../css_icon.png" />
                        <img className="w-16 h-16" src="../js_icon.png" />
                        <img className="w-16 h-16" src="../react_icon.png" />
                    </div>
            </div>
            <div className="w-2/5">
                <Project
                    projectTitle="Todo Application"    
                    projectImgSrc="../react_redux_todos.png" 
                    projectLink="https://dashing-lolly-791779.netlify.app/"
                    githubLink="https://github.com/kautif/todos"
                    projectDesc="This is a simple React Todo application, but I also used this as an opportunity to play with Redux and TailwindCSS and so far, I'm liking them both." />
                    <div className="flex justify-around mt-7">
                        <img className="w-16 h-16" src="../html_icon.png" />
                        <img className="w-16 h-16" src="../css_icon.png" />
                        <img className="w-16 h-16" src="../js_icon.png" />
                        <img className="w-16 h-16" src="../react_icon.png" />
                        <img className="w-16 h-16" src="../tailwind.png" />
                    </div>
            </div>
            <div className="w-2/5">
                <Project
                    projectTitle="Yu-Gi-Oh Card Search"    
                    projectImgSrc="../mockup_yugioh_card_search.png" 
                    projectLink="https://drive.google.com/file/d/15jZDUTpaW_swFENYLPe9Wj0TzDpQ9NQQ/view?usp=drive_link"
                    githubLink="https://github.com/kautif/yugioh_card_search"
                    projectDesc="Search for Yugioh cards via YGOProdeck API and get going prices for each card according to eBay. Failed search results will return an error message and prompt another search. My Azure membership expired, so I'm afraid you can't play with it. You can only demo it and ask me questions about it" />
                    <div className="flex justify-around mt-7">
                        <img className="w-16 h-16" src="../html_icon.png" />
                        <img className="w-16 h-16" src="../css_icon.png" />
                        <img className="w-16 h-16" src="../js_icon.png" />
                        <img className="w-16 h-16" src="../react_icon.png" />
                    </div>
            </div>
            <div className="w-2/5">
                <Project
                    projectTitle="iCare Pharmacy"    
                    projectImgSrc="../all_sizes_icare_mockup_trans.png" 
                    projectLink="https://incandescent-swan-68d171.netlify.app/"
                    githubLink="https://github.com/kautif/meal_planner"
                    projectDesc="Small Pharmacy located in Edmonton, AB. Ongoing updates to interfaces and blogs as requested." />
                    <div className="flex justify-around mt-7">
                        <img className="w-16 h-16" src="../html_icon.png" />
                        <img className="w-16 h-16" src="../css_icon.png" />
                        <img className="w-16 h-16" src="../js_icon.png" />
                        <img className="w-16 h-16" src="../jquery_icon.png" />
                        <img className="w-16 h-16" src="../php_icon.png" />
                    </div>
            </div>
            <div className="w-2/5">
                <Project
                    projectTitle="Simply NUC"    
                    projectImgSrc="../all_sizes_simplynuc_mockup_trans.png" 
                    projectLink="https://www.simplynuc.com"
                    githubLink=""
                    projectDesc="Growing startup selling mini PCs. Preparing products in eCommerce store prior to launch, correcting product details, and adding new website functionalities." />
                    <div className="flex justify-around mt-7">
                        <img className="w-16 h-16" src="../html_icon.png" />
                        <img className="w-16 h-16" src="../css_icon.png" />
                        <img className="w-16 h-16" src="../js_icon.png" />
                        <img className="w-16 h-16" src="../jquery_icon.png" />
                        <img className="w-16 h-16" src="../php_icon.png" />
                    </div>
            </div>
            <div className="w-2/5">
                <Project
                    projectTitle="Street Fighter Quiz"    
                    projectImgSrc="../mockup_sf.png" 
                    projectLink="https://www.kautif.com/sf_quiz"
                    githubLink="https://github.com/kautif/sfquiz"
                    projectDesc="Test your knowledge about this Street Fighter" />
                    <div className="flex justify-around mt-7">
                        <img className="w-16 h-16" src="../html_icon.png" />
                        <img className="w-16 h-16" src="../css_icon.png" />
                        <img className="w-16 h-16" src="../js_icon.png" />
                        <img className="w-16 h-16" src="../jquery_icon.png" />
                    </div>
            </div>
        </div>
    )
}