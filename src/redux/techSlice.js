import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showHtml: false,
    showTailwind: false,
    showJs: false,
    showReact: false,
    showNode:  false,
    showPhp: false,
    showTechModal: false,
    tech: ""
}

export const techSlice = createSlice({
    name: "tech",
    initialState,
    reducers: {
        setHtml: (state) => {
            for (const property in initialState)  {
                if (property === "showHtml") {
                    state.showHtml = true;
                } else {
                    state[property] = false;
                    state.showTechModal = true;
                }
            }
        },
        setTailwind: (state) => {
            for (const property in initialState)  {
                if (property === "showTailwind") {
                    // state.showTechModal = true;
                    state.showTailwind = true;
                } else {
                    state[property] = false;
                    state.showTechModal = true;
                }
            }
        },
        setJs: (state) => {
            for (const property in initialState)  {
                if (property === "showJs") {
                    // state.showTechModal = true;
                    state.showJs = true;
                } else {
                    state[property] = false;
                    state.showTechModal = true;
                }
            }
        },
        setReact: (state) => {
            for (const property in initialState)  {
                if (property === "showReact") {
                    // state.showTechModal = true;
                    state.showReact = true;
                } else {
                    state[property] = false;
                    state.showTechModal = true;
                }
            }
        },
        setNode: (state) => {
            for (const property in initialState)  {
                if (property === "showNode") {
                    // state.showTechModal = true;
                    state.showNode = true;
                } else {
                    state[property] = false;
                    state.showTechModal = true;
                }
            }
        },
        setPhp: (state) => {
            for (const property in initialState)  {
                if (property === "showPhp") {
                    // state.showTechModal = true;
                    state.showPhp = true;
                } else {
                    state[property] = false;
                    state.showTechModal = true;
                }
            }
        },
        setTechModal: (state) => {
            state.showTechModal = !(state.showTechModal);
        },
        setTech: (state, action) => {
            state.tech = action.payload;
            console.log("tech: ", state.tech);
        }
    }
})

export const {
    setHtml,
    setTailwind,
    setJs,
    setReact,
    setNode,
    setPhp,
    setTechModal,
    setTech
} = techSlice.actions;
export default techSlice.reducer;