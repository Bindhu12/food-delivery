import { configureStore } from '@reduxjs/toolkit';
import foodItemsReducer from './foodItemsSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        foodVarieties: foodItemsReducer,
        userDet:userReducer 
    }
});