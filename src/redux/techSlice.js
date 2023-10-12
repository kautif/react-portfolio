import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showHtml: false,
    showTailwind: false,
    showJs: false,
    showReact: false,
    showNode:  false,
    showPhp: false
}

export const techSlice = createSlice({
    name: "tech",
    initialState,
    reducers: {
        setHtml: (state) => {
            for (const property in initialState)  {
                if (property == "showHtml") {
                    state.showHtml = true;
                } else {
                    state[property] = false;
                }
            }
        },
        setTailwind: (state) => {
            for (const property in initialState)  {
                if (property == "showTailwind") {
                    state.showTailwind = true;
                } else {
                    state[property] = false;
                }
            }
        },
        setJs: (state) => {
            for (const property in initialState)  {
                if (property == "showJs") {
                    state.showJs = true;
                } else {
                    state[property] = false;
                }
            }
        },
        setReact: (state) => {
            for (const property in initialState)  {
                if (property == "showReact") {
                    state.showReact = true;
                } else {
                    state[property] = false;
                }
            }
        },
        setNode: (state) => {
            for (const property in initialState)  {
                if (property == "showNode") {
                    state.showNode = true;
                } else {
                    state[property] = false;
                }
            }
        },
        setPhp: (state) => {
            for (const property in initialState)  {
                if (property == "showPhp") {
                    state.showPhp = true;
                } else {
                    state[property] = false;
                }
            }
        }
    }
})

export const {
    setHtml,
    setTailwind,
    setJs,
    setReact,
    setNode,
    setPhp
} = techSlice.actions;
export default techSlice.reducer;