import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestorationSchema, ScrollSchema } from '../types/ScrollRestorationSchema';

const initialState: ScrollRestorationSchema = {
  scroll: {},
};

export const ScrollRestorationSlice = createSlice({
  name: 'ScrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
  // extraReducers:
  //   (builder) => {
  //     builder
  //       .addCase(loginByUsername.pending, (state) => {
  //         state.isLoading = true;
  //         state.error = undefined;
  //       })
  //       .addCase(loginByUsername.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(loginByUsername.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

// Action creators are generated for each case reducer function
export const { actions: ScrollRestorationActions } = ScrollRestorationSlice;
export const { reducer: ScrollRestorationReducer } = ScrollRestorationSlice;
