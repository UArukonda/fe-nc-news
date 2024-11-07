import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/Aritcles";
import SingleArticle from "./components/SingleArticle";
import Home from "./components/Home";
import { useState } from "react";
import Topics from "./components/Topics";
import Header from "./components/Header";

function App() {
  const [articleList, setArticleList] = useState([]);
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/articles"
            element={
              <Articles
                articleList={articleList}
                setArticleList={setArticleList}
              />
            }
          />
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticle
                votes={votes}
                setVotes={setVotes}
                comments={comments}
                setComments={setComments}
              />
            }
          />
          <Route
            path="/topics"
            element={
              <Topics
                articleList={articleList}
                setArticleList={setArticleList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
