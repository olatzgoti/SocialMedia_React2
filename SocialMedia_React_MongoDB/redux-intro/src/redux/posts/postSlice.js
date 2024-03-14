import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById", async (id) => {
  try {
    return await postService.getById(id);
  } catch (error) {
    console.log(error);
  }
});

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (postName) => {
    try {
      return await postService.getPostByName(postName);
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.posts = action.payload;
    });

    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getPostByName.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
