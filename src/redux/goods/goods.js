import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data : []
}

const goodsSlice = createSlice({
    name : 'goods',
    initialState,

reducers : {
    goodsAdd(state,action){
        state.data = action.payload
    },
}
})

export const {
    goodsAdd,
} = goodsSlice.actions


export default goodsSlice.reducer