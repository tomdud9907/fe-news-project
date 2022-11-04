import { useEffect, useState } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LikeDislike from "./LikeDislike";
import { SortBy } from "./SortBy";
function TopicPages() {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState();
  const [sort, setSort] = useState("created_at");

  useEffect(() => {
    setIsLoading(true);
    api.getArticlesByTopic(topic, sort, order).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sort, order]);

  if (isLoading) return <p id="loading">loading, please wait</p>;

  return (
    <div>
      <SortBy setSort={setSort} setOrder={setOrder} />
      {articles.map(
        ({
          article_id,
          title,
          body,
          topic,
          comment_count,
          author,
          created_at,
          votes,
        }) => {
          return (
            <Card
              key={article_id}
              className="text-center"
              style={{ width: "38rem" }}
            >
              <Card.Body>
                <Link to={`/articles/${article_id}`}>
                  <Card.Title>{title}</Card.Title>
                </Link>
                <Card.Subtitle className="mb-2 text-muted">
                  {topic}
                </Card.Subtitle>
                <Card.Text>{body.split(" ").slice(0, 25).join(" ")}</Card.Text>
                <Button variant="primary">Add comment</Button>
                <LikeDislike article_id={article_id} votes={votes} />
              </Card.Body>
              <Card.Footer className="text-muted">{`created by: ${author} date: ${created_at}`}</Card.Footer>
            </Card>
          );
        }
      )}
    </div>
  );
}

export default TopicPages;
