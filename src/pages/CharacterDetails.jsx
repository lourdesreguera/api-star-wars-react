import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  const getCharacter = async () => {
    const res = await fetch(
      `https://starwars-server.vercel.app/characters/${id}`
    );
    const resData = await res.json();
    setCharacter(resData.data.characters);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  console.log(character);
  return (
    <div>
      <img src={character.image} alt={character.name} referrerpolicy="no-referrer"/>
      <h2>{character.name}</h2>
      <p>Origin: {character.origin}</p>
      <p>Role: {character.role}</p>
      <p>{character.description}</p>
    </div>
  );
};

export default CharacterDetails;
