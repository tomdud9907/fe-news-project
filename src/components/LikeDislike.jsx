import { useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
// import Button from "react-bootstrap/esm/Button";
// import { useState } from "react-router-dom";

export default function LikeDislike({ article_id, votes }) {
  console.log(article_id, "articleid");
  const [newVote, changeVote] = useState(0);
  const [err, setErr] = useState(null);

  const handleClick = (article_id, numberOfVotes) => {
    changeVote((currentVote) => {
      return (currentVote += numberOfVotes);
    });

    api
      .patchArticleVotes(article_id, numberOfVotes)
      .then(() => {
        console.log(article_id);
      })

      .catch((err) => {
        console.log(err);
        setErr("Something went wrong, please try again.");
      });
  };

  return (
    <section>
      <button
        disabled={newVote >= 1}
        onClick={() => handleClick(article_id, 1)}
      >
        +
      </button>
      Votes: {votes + newVote}
      <button
        disabled={newVote <= -1}
        onClick={() => handleClick(article_id, -1)}
      >
        -
      </button>
    </section>
  );
}
