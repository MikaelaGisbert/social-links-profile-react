import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function numerosRandom() {
  const numerosRandom = [];
  for (let i = 0; i < 10; i++) {
    numerosRandom.push(Math.floor(Math.random() * 826));
  }

  numerosRandom.toString();
  return numerosRandom;
}

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + numerosRandom())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacters(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
