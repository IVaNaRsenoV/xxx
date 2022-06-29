import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
    test: string
};

const initialState: State = {
    test: 'test'
};

const firstReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        getKey (state, action: PayloadAction<string>) {
            state.test = action.payload;
        }
    }
});

export default firstReducer.reducer;
export const { getKey } = firstReducer.actions;