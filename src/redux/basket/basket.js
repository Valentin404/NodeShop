import {createSlice } from "@reduxjs/toolkit"
import rn from 'random-number'
import api from "../../api/api"

const product = {
    
    _id : 'asd',
    price:12,
    img : 'asda',
    count : 0
}

const initialState = {
    data : [],
    isOpen : false,
    order : rn({
        min: 100000,
        max: 999999,
        integer : true
    }),
}

const findGood = (state,id) => state.data.find(product => product._id === id)

const basketSlice = createSlice({
    name : 'basket',
    initialState,
    reducers : {
        basketAddNew(state,action){
            const good = findGood(state,action.payload._id) 
            if(good){
                good.count++
            } else {
                const newGoods = {...action.payload, count : 1}
                state.data.push(newGoods)
            }
            state.isOpen = true
            api.setSession(state.data)
        },
        basketPlusCount(state,action){
            const good = findGood(state,action.payload)
            good.count++
        },
        basketMinusCount(state,action){
            const good = findGood(state,action.payload)
            if(good.count == 1){
                state.data = state.data.filter(product => product._id !== action.payload)
                return
            }
            good.count--
            api.setSession(state.data)
        },
        basketRemove(state,action){
            state.data = state.data.filter(product => product._id !== action.payload)
            api.setSession(state.data)
        },
        basketOpen(state){
            state.isOpen = true 
        },
        basketClose(state){
            state.isOpen = false
        },
        basketAddLllProductsSession(state,data){
          state.data = data.payload // state.data.filter(product => data.payload.includes(product._id))
        }
    }

})


export const {
    basketMinusCount,
    basketAddNew,
    basketPlusCount,
    basketRemove,
    basketClose,
    basketOpen,
    basketAddLllProductsSession
} = basketSlice.actions

export default basketSlice.reducer