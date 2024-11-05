import axios from "axios";

const api = axios.create({
  baseURL: "https://be-review-nc-news.onrender.com",
});

export const fetchArticles = () => {
  return api
    .get(`/api/articles`)
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};
