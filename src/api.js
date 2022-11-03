import axios from "axios";

const baseURL = "https://nc-njus.herokuapp.com/api";

export const getArticles = (topic, sort, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic, sort_by: sort, order: order },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticlesByTopic = (topic, sort, order) => {
  return axios
    .get(`${baseURL}/articles?topic=${topic}`, {
      params: { sort_by: sort, order: order },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data;
  });
};

export const getArticlesByArticleId = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, { inc_vote: inc_votes })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getCommentByArticleId = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};
export const postComment = (article_id, newComment) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, newComment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};
