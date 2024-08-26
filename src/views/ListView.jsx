import axios from "axios";
import React from "react";
import Article from "./Article";
import { useState, useEffect } from "react";

const ListView = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);
  
  const getArticles = async () => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=lszIMKm6mmngIqA7qAxgPX0LCpRiUpXR"
      );
      const loader = document.getElementById("loaded");
      loader.className = "container loaded";
      setArticles(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <>
      <h1 className="titlelist">Lista de noticias</h1>
      <div className="container" id="loaded">
        <div className="cargando">
          <div className="pelotas"></div>
          <div className="pelotas"></div>
          <div className="pelotas"></div>
          <span className="texto-cargando">Cargando...</span>
        </div>
      </div>

      {articles.map((article, index) => (
        <Article key={index} data={article} />
      ))}
    </>
  )
}

export default ListView