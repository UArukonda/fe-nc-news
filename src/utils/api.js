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

export const fetchSingleArticle = (article_id) => {
  return api
    .get(`/api/articles/${article_id}`)
    .then((response) => {
      console.log(response);
      return response.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchComments = (article_id) => {
  console.log(article_id);
  return api
    .get(`/api/articles/${article_id}/comments`)
    .then((response) => {
      console.log(response);
      return response.data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
};
