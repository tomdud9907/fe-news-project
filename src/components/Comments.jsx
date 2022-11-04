import { useEffect, useState, useContext } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { UserContext } from "../context/UserContext";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setError] = useState(null);

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    api
      .getCommentByArticleId(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [article_id]);

  const handleDelete = (event) => {
    event.preventDefault();
    const id = event.target.value;

    setComments(() => {
      const updatedComments = comments.filter((comment) => {
        return comment.comment_id !== parseInt(id);
      });
      return updatedComments;
    });

    api
      .deleteComment(id)
      .then(() => {})
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <AddComment
        article_id={article_id}
        setComments={setComments}
        key={article_id}
      />
      <ul>
        {comments
          .sort((a, b) => b.comment_id - a.comment_id)
          .map(({ comment_id, body, article_id, author, created_at }) => {
            console.log(comments);
            return (
              <>
                <Card className="text-center" style={{ width: "38rem" }}>
                  <Card.Body>
                    <Card.Text>{body}</Card.Text>
                    {loggedInUser.username === author ? (
                      <Button
                        variant="danger"
                        value={comment_id}
                        onClick={handleDelete}
                      >
                        Delete comment
                      </Button>
                    ) : null}
                  </Card.Body>

                  <Card.Footer className="text-muted">{`created by: ${author} date: ${created_at}`}</Card.Footer>
                </Card>
              </>
            );
          })}
      </ul>
    </div>
  );
}

export default Comments;
