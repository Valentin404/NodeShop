import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './goods/goods'
import basketSlice from './basket/basket'
import userSlice from './user/user'

const store =  configureStore({
    reducer : {
        goods: goodsSlice,
        basket : basketSlice,
        user : userSlice
    }
})



export default store

