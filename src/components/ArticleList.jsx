import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import * as api from "../api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";

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
        <Row lg={3}>
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
                <Col className="d-flex">
                  <Card key={article_id} className="productlist">
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{topic}</Card.Text>
                      <Card.Text>{author}</Card.Text>
                      <Card.Text>{votes}</Card.Text>
                      <Card.Text>{`comments: ${comment_count}`}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href="#">Add Comment</Card.Link>
                      <Card.Link href="#">Vote</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          )}
        </Row>
      </ul>
    </div>
  );
}

export default ArticleList;
