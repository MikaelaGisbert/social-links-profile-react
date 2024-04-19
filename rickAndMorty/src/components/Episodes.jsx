import React, { useState, useEffect } from "react";
import "./Episodes.css";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await response.json();
      const cuatroEpisodes = data.results.slice(0, 4); 
      setEpisodes(cuatroEpisodes);
      console.log(cuatroEpisodes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contenedorEpisodes">
      <h1 className="title">Episodes</h1>
      {episodes.map((episode) => (
        <div className="Episodes" key={episode.id}>
          <h2 className="nameEp">{episode.name}</h2>
          <h2 className="nameEp">{episode.episode}</h2>
          <p className="airDate"> {episode.air_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
