import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name:"connection",
    initialState: null,
    reducers:{
        addConnections: (state,action)=> action.payload,
        removeConnectons:()=> null


    }
})

export const {addConnections , removeConnectons} = connectionSlice.actions;

export default connectionSlice.reducer