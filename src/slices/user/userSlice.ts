import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IUserState {
  name: string | null;
}

const initialState: IUserState = {
  name: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
});

export const { setUsername } = userSlice.actions;
export const userName = (state: RootState) => state.user.name;

export default userSlice.reducer;