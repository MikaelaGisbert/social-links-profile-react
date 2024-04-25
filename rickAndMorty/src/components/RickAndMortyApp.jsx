import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import UserDetails from "./UserDetails";

function RickAndMortyApp() {
  const [character, setCharacter] = useState(null); 
  const [episodes, setEpisodes] = useState([]); 

  const [searchParams] = useSearchParams(); 

  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return; 
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        fetchEpisodes(data.episode.slice(0, 4));
      })
      .catch((error) => console.error(error));
  }, [id]);

  const fetchEpisodes = (episodesUrls) => {
    const promises = episodesUrls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(promises)
      .then((episodes) => {
        setEpisodes(episodes);
        console.log(episodes);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>{character && (
      <Card
        key={character.id}
        character={character}
        episodes={episodes}
      />
      )}
    </>
  );
}

export default RickAndMortyApp;