import { createSlice } from '@reduxjs/toolkit'
export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        dencrement: (state) => {
            state.value -= 1
        }
    }
})
export const { increment, dencrement } = CounterSlice.actions
export default CounterSlice.reducer