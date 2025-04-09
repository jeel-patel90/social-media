import React, { useContext } from "react";
import { PostList } from "../store/post-list-store";

function Post({ post }) {

  const { deletePost } = useContext(PostList)

  return (
    <>
      <div className="card post-card" style={{ width: "18rem" }}>
        <div className="card-body">
          <button
            onClick={() => deletePost(post.id)}
            className="top-0 start-0 delete">Delete</button>
          <h5 className="card-title card-title-font">{post.title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
              {` views : ${post.reactions.views}`}
              <span class="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">
            {post.body}
          </p>
          {post.tags.map((tags) => <span class="badge text-bg-primary hashtag">{tags}</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Post;
