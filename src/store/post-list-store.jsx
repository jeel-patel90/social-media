import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  addInitialPosts: () => { },
  deletePost: () => { },
});

const postListReduce = (currPostList, action) => {
  let newPostList = currPostList
  if (action.type === 'DELETE_ITEM') {
    newPostList = currPostList.filter(post => post.id !== action.payload.id)
  } else if (action.type === 'ADD_INITIAL_POSTS') {
    newPostList = action.payload.posts;
  } else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList


}



const PostListProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(postListReduce, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispachPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags
      }
    })
  }

  const addInitialPosts = (posts) => {
    dispachPostList({
      type: 'ADD_INITIAL_POSTS',
      payload: {
        posts: posts
      }
    })
  }

  const deletePost = (id) => {
    // console.log(`deleted post called ${postId}`)
    dispachPostList({
      type: 'DELETE_ITEM',
      payload: {
        id
      }
    })
  }

  return <PostList.Provider value={
    {
      postList,
      addPost,
      addInitialPosts,
      deletePost,
    }}>
    {children}
  </PostList.Provider >;
};

const DEFAULT_POST_LIST = [
]

export default PostListProvider; 
