import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import * as api from "../api";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LikeDislike from "./LikeDislike";
import { SortBy } from "./SortBy";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const { topic } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(topic, sort, order)

      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      });
  }, [topic, sort, order]);

  if (isLoading) return <p id="loading">loading, please wait</p>;

  return (
    <div>
      <ul>
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
              <>
                <Card className="text-center" style={{ width: "38rem" }}>
                  <Card.Body>
                    <Link to={`/articles/${article_id}`}>
                      <Card.Title>{title}</Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">
                      {topic}
                    </Card.Subtitle>
                    <Card.Text>
                      {body.split(" ").slice(0, 25).join(" ")}
                    </Card.Text>
                    <LikeDislike article_id={article_id} votes={votes} />
                  </Card.Body>
                  <Card.Footer className="text-muted">{`created by: ${author} date: ${created_at}`}</Card.Footer>
                </Card>
              </>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default ArticleList;
