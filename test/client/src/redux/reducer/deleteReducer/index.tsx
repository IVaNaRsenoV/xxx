import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../services/api';

type Data = {}

const initialState: Data = {};

const url = 'http://localhost:3001/basket/'

export const deleteItem = createAsyncThunk('toolkit/deleteItem', function (id: number) {
    api(url + `${id}`, 'DELETE');
})

const deleteReducer = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteItem.pending, () => console.log('pending'))
            .addCase(deleteItem.fulfilled, () => console.log('fulfilled'))
            .addCase(deleteItem.rejected, () => console.log('rejected'))
    }
})

export default deleteReducer.reducer;