import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PlanetDetails = () => {
  const [planet, setPlanet] = useState({});
  const { name } = useParams();

  const getPlanet = async () => {
    const res = await fetch(
      `https://starwars-server.vercel.app/planets/${name}`
    );
    const resData = await res.json();
    setPlanet(resData.data.planet[0]);
  };

  useEffect(() => {
    getPlanet();
  }, []);

  return (
    <div>
      <img src={planet.image} alt={planet.name} />
      <h2>{planet.name}</h2>
      <p>Region: {planet.region}</p>
      <p>{planet.description}</p>
    </div>
  );
};

export default PlanetDetails;
