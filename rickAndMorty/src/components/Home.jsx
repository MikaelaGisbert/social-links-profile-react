import React, { useEffect, useState } from "react";
import CardPersonajes from "../components/CardPersonajes";

function numerosRandom() {
  const numerosRandom = [];
  for (let i = 1; i <= 10; i++) {
    numerosRandom.push(Math.floor(Math.random() * 826));
  }

  return numerosRandom.join(); // Cambiado de "numerosRandom.toString()" a "numerosRandom.join()"
}

function Home() {
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

  return ( //LOADER
    <div className="Characters">
      {characters.map((character) => (
        <CardPersonajes key={character.id} character={character} />
      ))}
    </div>
  );
}
export default Home;