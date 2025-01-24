import { createSlice } from "@reduxjs/toolkit";

const initState = {
    blogList: [],
    userName: "",
    userEmail: ""
}

const BlogSlice = createSlice({
    name: 'BLOGS',
    initialState: initState,
    reducers: {
        addBlog: (state, action) => {
            state.blogList.push(action.payload);
        },
        addName: (state, action) => {
            state.userName = action.payload;
        },
        addEmail : (state, action) => {
            state.userEmail = action.payload;
        },
        deleteBlog: (state, action) => {}
    }
});

export const { addBlog, deleteBlog, addName, addEmail } = BlogSlice.actions;
export default BlogSlice.reducer;