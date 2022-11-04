import { useState } from "react";
import * as api from "../api";

export default function LikeDislike({ article_id, votes }) {
  const [newVote, changeVote] = useState(0);
  const [err, setErr] = useState(null);

  const handleClick = (article_id, numberOfVotes) => {
    changeVote((currentVote) => {
      return (currentVote += numberOfVotes);
    });

    api
      .patchArticleVotes(article_id, numberOfVotes)
      .then(() => {})

      .catch((err) => {
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
