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

export const fetchArticlesByTopic = (topic_name) => {
  return api
    .get(`/api/articles`, {
      params: {
        topic: topic_name,
      },
    })
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sortArticles = (sort_by, order) => {
  console.log(sort_by, order);
  return api
    .get(`/api/articles`, {
      params: {
        sort_by: sort_by,
        order: order,
      },
    })
    .then((response) => {
      console.log(response);
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
      return response.data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchComments = (article_id) => {
  return api
    .get(`/api/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addVotes = (article_id, obj) => {
  return api
    .patch(`/api/articles/${article_id}`, obj)
    .then((response) => response.data.article)
    .catch((err) => {
      console.error("Error in addVotes:", err.message);
      throw err;
    });
};

export const addComment = (article_id, obj) => {
  return api
    .post(`/api/articles/${article_id}/comments`, obj)
    .then((response) => {
      return response.data.insertedComment;
    })
    .catch((err) => {
      console.error("Error in addVotes:", err.message);
      throw err;
    });
};

export const deleteComment = (comment_id) => {
  return api
    .delete(`/api/comments/${comment_id}`)
    .then((response) => response)
    .catch((err) => console.log(err));
};

export const fetchTopics = () => {
  return api
    .get(`/api/topics`)
    .then((response) => {
      return response.data.topics;
    })
    .catch((err) => {
      console.log(err);
    });
};
