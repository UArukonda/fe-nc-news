// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
