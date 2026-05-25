import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice"

const counterStorage=configureStore ({
    reducer:{
        //state update
        counterReducer:counterSliceReducer
    }
})

export default counterStorage