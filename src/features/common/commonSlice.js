import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utility/axios';
import { requests } from "../../utility/apirequests";

const initialState = {
    headerVideos: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderVideos = createAsyncThunk(
    "common/fetchHeaderVideos",
    async (requestValues) => {
        const response = await axios.get(requests.getDetails(requestValues));
        return response.data;
    }
)


export const commonSlice = createSlice({
    initialState,
    name: "common",
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderVideos.pending, (state, action) => {
                state.headerVideos.status = "loading";
            })
            .addCase(fetchHeaderVideos.fulfilled, (state, action) => {
                state.headerVideos.status = "success";
                state.headerVideos.data = action.payload;
            })
            .addCase(fetchHeaderVideos.rejected, (state, action) => {
                state.headerVideos.status = "failed";
                state.headerVideos.error = action.error;
            })
    }
});

export const selectHeaderVideo = (state) => state.common.headerVideos;

export default commonSlice.reducer;