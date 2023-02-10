import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type CreateRoomParams = {
  maxNumRounds: number;
  maxNumUsers: number;
  nickname: string;
}

export const createRoom = createAsyncThunk(
  'room/createRoom',
  async ({
    maxNumRounds,
    maxNumUsers,
    nickname
  }: CreateRoomParams) => {
      const response = await axios.post(`http://localhost:8080/rooms/create`, { 
        maxNumRounds, 
        maxNumUsers, 
        name: nickname
      });
      
      return response.data;
  }
);

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    activeUser: {},
    data: { id: ''},
    status: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRoom.pending, (state) => {
        state.status = 'PENDING';
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'SUCCESS';
        state.activeUser = action.payload.users[0];
      });
  }
})

export default roomSlice.reducer;
