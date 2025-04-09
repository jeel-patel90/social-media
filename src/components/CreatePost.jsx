import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {

  const { addPost } = useContext(PostList)

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ')

    userIdElement.current.value = ''
    postTitleElement.current.value = ''
    postBodyElement.current.value = ''
    reactionsElement.current.value = ''
    tagsElement.current.value = ''



    addPost(userId, postTitle, postBody, reactions, tags)
  }

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>

        <div class="mb-3">
          <label for="userID" class="form-label">Username </label>
          <input ref={userIdElement} type="text" placeholder="Enter your username" class="form-control" id="userId" />
        </div>

        <div class="mb-3">
          <label for="title" class="form-label">Post title</label>
          <input ref={postTitleElement} type="text" placeholder="How are you feeling today ?" class="form-control" id="title" />
        </div>

        <div class="mb-3">
          <label for="body" class="form-label">Post content</label>
          <textarea ref={postBodyElement} rows={5} type="text" placeholder="Tell us more about it !!!" class="form-control" id="body" />
        </div>

        <div class="mb-3">
          <label for="reactions" class="form-label">Rections</label>
          <input ref={reactionsElement} type="text" class="form-control" id="reactions" />
        </div>

        <div class="mb-3">
          <label for="tags" class="form-label">Enter you tags</label>
          <input ref={tagsElement} type="text" class="form-control" id="tags" />
        </div>


        <button type="submit" class="btn btn-primary">Post</button>
      </form>
    </>
  );
}

export default CreatePost;
