import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Test {
    id: number
    cost: number
    title: string
    img: string
};

type Data = {
    quantity: number
    type: string
    data: Test []
};

const initialState: Data = {
    quantity: 0,
    type: 'basket',
    data: []
}


const basketReducer = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Test>) => {
            state.data = [...state.data, action.payload];
        },
        deleteItems: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter(({id}) => id !== action.payload);
        },
        inc: (state) => {
            state.quantity = state.quantity + 1
        },
        dec: (state) => {
            state.quantity = state.data.length
        },
        keySet: (state, action: PayloadAction<Test>) => {
            // state.data = action.payload;
        }
    }
})

export default basketReducer.reducer;
export const { add, deleteItems, inc, dec, keySet } = basketReducer.actions;