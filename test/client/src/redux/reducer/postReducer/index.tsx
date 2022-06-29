import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../services/api';

const url: string = 'http://localhost:3001/basket';

type Data = {
    id: number
    title: string
    cost: number
    img: string
}

export const postData = createAsyncThunk('toolkit/postData', function (data: Data) {
    const { id, cost, title, img } = data;
    api(url, 'POST', { id: Math.floor(Math.random() * id), cost: cost, title: title, img: img });
});
const postReducer = createSlice({
    name: 'toolkit',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postData.pending, () => console.log('pending'))
            .addCase(postData.fulfilled, () => console.log('fulfilled'))
            .addCase(postData.rejected, () => console.log('rejected'))
    }})

export default postReducer.reducer;