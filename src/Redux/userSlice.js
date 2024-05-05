import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'user',
    initialState:{
        isLoggedIn:false
    },
    reducers:{
        updateUserDet:(state, action)=>{
            state.isLoggedIn = action.payload
        }
    }
})

export const { updateUserDet }=userSlice.actions;
export default userSlice.reducer;