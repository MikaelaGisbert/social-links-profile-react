import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function numerosRandom() {
  const numerosRandom = [];
  for (let i = 1; i <= 10; i++) {
    numerosRandom.push(Math.floor(Math.random() * 826));
  }

  return numerosRandom.join(); // Cambiado de "numerosRandom.toString()" a "numerosRandom.join()"
}

// function num() {
//   const num= [];
//   for (let i = 1; i <= 5; i++) {
//     num.push(Math.floor(Math.random() * 100));
//   }

//   return num.join(); // Cambiado de "numerosRandom.toString()" a "numerosRandom.join()"
// }

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
    <div className="Characters">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
