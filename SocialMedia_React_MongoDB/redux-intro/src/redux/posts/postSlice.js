import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
  userPosts:[],
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

export const updatePost = createAsyncThunk('posts/updatePost', async(postData) => { 
  try {
   console.log(postData)
    return await postService.updatePost(postData)
  }
  catch(error){
    console.log(error)
  }
})

export const create = createAsyncThunk('post/create', async(postData)=>{
  try {  
    return await postService.create(postData)
  } 
  catch (error) {
    console.log(error)
  }
})

export const deletePost = createAsyncThunk('post/deletePost', async(id) =>{
try {
    return await postService.deletePost(id)

} catch (error) {
  console.log(error)
}
})

export const getById = createAsyncThunk("posts/getById", async (id) => {
  try {
    const postservice = await postService.getById(id);
    return postservice
  } catch (error) {
    console.log(error);
  }
});

export const likePost = createAsyncThunk('post/like', async() => {
  try {
    return await postService.likePost()

  } catch (error) {
    console.log(error)
  }
})

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (postName) => {
    try {
      return await postService.getPostByName(postName);
    } catch (error) {
      console.error(error);
    }
  }
)
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
      state.posts = action.payload
    })

    .addCase(getAll.pending, (state) => {
      state.isLoading = true
    })

    .addCase(create.fulfilled, (state, action) => {
      state.posts.push(action.payload)
    })
    .addCase(create.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(updatePost.fulfilled, (state, action) => {
      state.post = action.payload.post
      state.token = action.payload.token;
    })
    .addCase(updatePost.pending, (state) => {
      state.isLoading = true
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.post = action.payload.post
      state.token = action.payload.token;
    })
    .addCase(deletePost.pending, (state) => {
      state.isLoading = true
    })

    .addCase(getById.fulfilled, (state, action) => {
      state.post = action.payload;
    })
    .addCase(getPostByName.fulfilled, (state, action) => {
      state.posts = action.payload;
    })
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
