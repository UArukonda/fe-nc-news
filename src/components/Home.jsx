import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <section>
      <Header />
      <section
        id="welcome-greeting-container"
        style={{ minHeight: "calc(50vh - 60px)" }}
      >
        <p id="welcome-greeting">Welcome to UT Marketplace</p>
      </section>
    </section>
  );
};

export default Home;
