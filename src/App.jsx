// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import ArticleCard from "./components/ArticleCard";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticleCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
