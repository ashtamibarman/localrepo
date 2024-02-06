import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostLIst = currPostList;
  if (action.type === "DELETE_POST") {
    newPostLIst = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostLIst = [action.payload, ...currPostList];
  }
  return newPostLIst;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPOstList] = useReducer(postListReducer, []);

  const addPost = (userId, postTItle, postBody, reactions, tags) => {
    dispatchPOstList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTItle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPOstList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
