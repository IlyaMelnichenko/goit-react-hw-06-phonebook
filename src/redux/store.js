import { createStore } from "react-redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
const initialState = {
    contacts:[],
    filter:"",
}
const rootReducer=(state=initialState,action)=>{
    return state;
}
const enchancer=devToolsEnhancer();
export const store = createStore(rootReducer);
