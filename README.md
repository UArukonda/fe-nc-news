<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

## NC News

A web application that allows users to view articles, sort and filter by categories, and manage article comments. Built with React and Axios, this project demonstrates dynamic content fetching from a backend API.

# Table of Contents

Project Overview
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing

# Project Overview

This application displays a collection of articles, allowing users to sort and filter them by different criteria such as date, comment count, and votes. Users can also filter articles by categories, add comments, upvote articles, and delete their comments.

# Features

`Article Listing`: Browse a list of articles with category and sorting filters.
`Sort and Filter`: Sort articles by date, comment count, or votes, and filter by ascending or descending order.
Comment Management: Add, delete, and view comments for each article.
`Voting System`: Upvote articles to show support.

# Technologies Used

`Frontend`: React, CSS
`HTTP Client`: Axios
`Backend`: REST API

## Installation

# Clone the repository:

`git clone https://github.com/UArukonda/fe-nc-news.git`
`cd fe-nc-news`

# Install dependencies:

`npm install`

# Start the development server:

`npm run dev`
The app should now be running on `http://localhost:5174`.

# Usage

1. On the home page, select a category to filter articles by topic.
2. Use the sort dropdowns to sort articles by date, votes, or comment count.
3. Click on an article to view it in detail.
4. In the article view, you can add a comment or delete your own comments.
5. Use the vote button to upvote the article.

# API Endpoints

Replace `BASE_URL` with the actual API base URL.

Fetch Articles: `GET /api/articles`
Fetch Single Article: `GET /api/articles/:article_id`
Fetch Comments: `GET /api/articles/:article_id/comments`
Add Comment: `POST /api/articles/:article_id/comments`
Delete Comment: `DELETE /api/comment/:comment_id`
Vote on Article: `PATCH /api/articles/:article_id`

# Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-name.
3. Make your changes and commit them.
4. Push to the branch: git push origin feature-name.
5. Submit a pull request.
