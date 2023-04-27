import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('fetchUsers',
    async (amount) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // The value we return becomes the `fulfilled` action payload
      return response.json();
    }
  );
const usersSlice = createSlice({
    name:"user",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isError = true;
        })
    }
})
export default usersSlice.reducer;