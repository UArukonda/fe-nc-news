import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/Aritcles";
import SingleArticle from "./components/SingleArticle";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
