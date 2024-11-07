import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTopics, fetchArticlesByTopic } from "../utils/api";
import Header from "./Header";
import ArticleCard from "./ArticleCard";
const Topics = ({ articleList, setArticleList }) => {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopics().then((data) => setTopics(data));
  }, []);

  const handletopicClick = (topicslug) => {
    fetchArticlesByTopic(topicslug).then((response) => {
      setArticleList(response);
    });
  };

  return (
    <div>
      <Header />
      {topics.map((topic) => (
        <button key={topic.slug} onClick={() => handletopicClick(topic.slug)}>
          {topic.slug}
        </button>
      ))}
      <section>
        <ul className="article-list">
          {articleList.map((article) => (
            <ArticleCard article={article} key={article.article_id} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Topics;
