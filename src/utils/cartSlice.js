import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItem: (state, action) =>{
         state.items.push(action.payload);
        },
        removeItems: (state,action) =>{
            state.items.pop(action);
        },
        cartEmpty: (state) =>{
            state.items.length = 0;
        },
    },
});
 export const {addItem,removeItems,cartEmpty} = cartSlice.actions;
 export default cartSlice.reducer;
