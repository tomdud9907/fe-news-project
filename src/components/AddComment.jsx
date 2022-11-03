import React from "react";
import * as api from "../api";
import { useState } from "react";

export default function AddComment({ article_id, setComments }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      username: "jessjelly",
      body: comment,
    };
    setComment("");
    setError(false);

    api.postComment(article_id, newComment).then((returnedComment) => {
      setComments((currentComments) => {
        return [returnedComment, ...currentComments];
      });
    });
  };

  return (
    <div className="addComment">
      <form onSubmit={handleSubmit}>
        <label id="comments_header">
          <div>Add Comment:</div>
          <textarea
            id="comment_text_box"
            value={comment}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <div>
          <button id="submit_comment_button" type="submit">
            Add
          </button>
        </div>
      </form>
      {error ? <h4>Your comment was not posted</h4> : null}
    </div>
  );
}
