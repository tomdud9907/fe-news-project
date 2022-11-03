import { useEffect, useState, useContext } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getCommentByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <div>
      <ul>
        {comments.map(
          ({ comment_id, body, article_id, author, created_at }) => {
            return (
              <Card className="text-center" style={{ width: "38rem" }}>
                <Card.Body>
                  <Card.Text>{body}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{`created by: ${author} date: ${created_at}`}</Card.Footer>
              </Card>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default Comments;
