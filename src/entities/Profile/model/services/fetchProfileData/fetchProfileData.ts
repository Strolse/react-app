import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      console.log('start');
      const response = await extra.api.get<Profile>('/profile');
      console.log('finish');

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
