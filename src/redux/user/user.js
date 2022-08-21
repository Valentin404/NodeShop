import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    _id : null,
    arrId : []
}

const userSlice = createSlice({
    name : 'user',
    initialState,

    reducers : {
    creatID(state,action){
        state._id = action.payload
    },
    // goodsAdd(state,action){
    //     state.data = action.payload
    // },
}
})

export const {
    creatID,
} = userSlice.actions


export default userSlice.reducer