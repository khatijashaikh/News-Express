import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 class="text-center">
        LATEST <span class="badge bg-danger">NEWS</span>{" "}
      </h2>
      {articles.map((news, index) => {
        return <NewsItem key={index} data={news} />;
      })}
    </div>
  );
};

export default NewsBoard;
