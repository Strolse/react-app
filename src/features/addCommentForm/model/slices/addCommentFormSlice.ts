import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers:
  //   (builder) => {
  //     builder
  //       .addCase(addCommentFormByUsername.pending, (state) => {
  //         state.isLoading = true;
  //         state.error = undefined;
  //       })
  //       .addCase(addCommentFormByUsername.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(addCommentFormByUsername.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
