import { createSlice } from "@reduxjs/toolkit";

export const foodItemsSlice=createSlice({
    name:'foodItems',
    initialState:{
        foodItems:[],
        totalPrice:0
    },
    reducers:{
        updateFoodItems:(state, action)=>{
            state.foodItems = action.payload
        },
        updateTotalPrice:(state, action)=>{
            state.totalPrice = action.payload
        }
    }
})

export const { updateFoodItems, updateTotalPrice }=foodItemsSlice.actions;
export default foodItemsSlice.reducer;