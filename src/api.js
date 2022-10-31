import axios from 'axios'


const baseURL = 'https://nc-njus.herokuapp.com/api'

export const getArticles = (topic, sort, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic, sort_by: sort, order: order },
    })
    .then(({ data }) => {
      return data;
    });
};
