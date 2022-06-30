import { createSlice } from '@reduxjs/toolkit'

const incrSlice = createSlice({
    name: 'incr',
    initialState: {
        incr: 1
    },
    reducers: {
        increment: (state) => {
            state.increment = state.increment + 1
        },
        decrement: (state) => {
            state.decrement = state.decrement - 1
        }
    }
})

export const {setItemInCart, deleteItemFromCart} = incrSlice.actions
export default incrSlice.reducer;