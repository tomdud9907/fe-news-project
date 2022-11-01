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
