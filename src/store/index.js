import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productReducer from './productSlice'
import incrReducer from './incrSlice'
export default configureStore({
    reducer: {
        carts: cartReducer,
        products: productReducer,
        incrs: incrReducer
    }
})