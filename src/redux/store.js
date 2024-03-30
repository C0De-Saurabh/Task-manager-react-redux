import {configureStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { taskReducer } from "./reducers";



const store = configureStore({reducer:taskReducer},composeWithDevTools());

export default store;