import { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTItleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTItle = postTItleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split("");

    userIdElement.current.value = "";
    postTItleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTItle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          enter your user id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="your user id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          post title
        </label>
        <input
          type="text"
          ref={postTItleElement}
          className="form-control"
          id="title"
          placeholder="how are you feeling now"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          post content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows={4}
          className="form-control"
          id="body"
          placeholder="tellme about yourself"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="how many people react"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        post
      </button>
    </form>
  );
};

export default CreatePost;
