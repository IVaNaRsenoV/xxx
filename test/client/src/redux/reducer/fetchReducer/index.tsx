import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../../services/api';

const url: string = 'http://localhost:3001/products';

interface Structure {
    id: number
    title: string
    cost: number
    img: string
}

type State = {
    type: string
    data: Structure []
}

const initialState: State = {
    type: 'catalog',
    data: []
}

export const fetchData = createAsyncThunk('toolkit/fetchData', function () {
    const data = api(url, 'GET');
    return data;
})

const fetchReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {console.log('pending')})
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchData.rejected, (state, action) => {console.log('rejected')})
    }
})

export default fetchReducer.reducer;