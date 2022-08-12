import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await fetch("https://starwars-server.vercel.app/characters");
    const resData = await res.json();
    setCharacters(resData.data.characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {characters.length > 0 &&
        characters.map((character, i) => {
          return (
            <div key={i}>
              <img src={character.portrait} alt={character.name} referrerpolicy="no-referrer" />
              <div>
                <h2>{character.name}</h2>
                <Link to={`/characters/${character._id}`}>Ver mas</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Characters;
