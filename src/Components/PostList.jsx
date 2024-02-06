import { useContext } from "react";
import Post from "./post";
import { PostList as PostLIstData } from "../Store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostLIstData);
  return (
    <>
      {PostList.length === 0 && <welcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
