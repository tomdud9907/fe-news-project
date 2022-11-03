import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../api";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LikeDislike from "./LikeDislike";
import Comments from "./Comments";

function SingleArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getArticlesByArticleId(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
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
          <LikeDislike article_id={article_id} votes={article.votes} />
        </Card.Body>

        <Card.Footer className="text-muted">{`created by: ${article.author} date: ${article.created_at}`}</Card.Footer>
      </Card>
      <h3 className="h3">Comments:</h3>
      <Comments />
    </div>
  );
}

export default SingleArticle;

// const { useState, useReducer } = React;

// const initialState = {
//   likes: 100,
//   dislikes: 5
// }

// const appReducer = (state, action) => {
//   switch(action.type) {
//     case 'HANDLE_LIKE':
//       return {
//         ...state,
//         likes: state.likes + action.payload
//       }
//     case 'HANDLE_DISLIKE':
//       return {
//         ...state,
//         dislikes: state.dislikes + action.payload
//       }
//     default:
//       return state
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(appReducer, initialState)
//   const { likes, dislikes } = state
//   const [status, setStatus] = useState(null)

//   const handleClickLike = () => {
//     if (status==='like') {
//       setStatus(null)
//       dispatch({
//         type: 'HANDLE_LIKE',
//         payload: -1,
//       })
//     } else {
//       setStatus('like')
//       if (status==='dislike') {
//         dispatch({
//           type: 'HANDLE_DISLIKE',
//           payload: -1,
//         })
//       }
//       dispatch({
//         type: 'HANDLE_LIKE',
//         payload: 1,
//       })
//     }
//   }

//   const handleClickDislike = () => {
//     if (status==='dislike') {
//       setStatus(null)
//       dispatch({
//         type: 'HANDLE_DISLIKE',
//         payload: -1,
//       })
//     } else {
//       setStatus('dislike')
//       if (status==='like') {
//         dispatch({
//           type: 'HANDLE_LIKE',
//           payload: -1,
//         })
//       }
//       dispatch({
//         type: 'HANDLE_DISLIKE',
//         payload: 1,
//       })
//     }
//   }

//   return (
// <div className='container'>
//   <button className={status==='like'? 'btn active' : 'btn'} onClick={handleClickLike}>
//     赞
//     <span>{likes}</span>
//   </button>

//   <button className={status==='dislike'? 'btn active' : 'btn'} onClick={handleClickDislike}>
//     踩
//     <span>{dislikes}</span>
//   </button>
// </div>
//   )

// }
