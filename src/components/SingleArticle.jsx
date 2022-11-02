import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../api";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function SingleArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getArticlesByArticleId(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
      console.log(article, "artykul");
    });
  }, [article_id]);

  if (isLoading) return <p id="loading">loading, please wait</p>;

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {article.topic}
          </Card.Subtitle>
          <Card.Text>{article.body}</Card.Text>
          <Card.Text>{`Comments: ${article.comment_count}`}</Card.Text>
          <Card.Link href="#">Add Comment</Card.Link>
        </Card.Body>
        <Card.Footer className="text-muted">{`created by: ${article.author} date: ${article.created_at}`}</Card.Footer>
      </Card>
    </div>
  );
}

export default SingleArticle;
