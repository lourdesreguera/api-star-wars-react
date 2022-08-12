import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const res = await fetch('https://starwars-server.vercel.app/planets');
    const resData = await res.json();
    setPlanets(resData.data.planets)
  }

  useEffect(() => {
    getPlanets()
  }, []);

  return (
    <div>
      {planets.length > 0 && planets.map((planet, i) => {
        return (
          <div key={i}>
            <img src={planet.image} alt={planet.name} />
            <h2>{planet.name}</h2>
            <Link to={`/planets/${planet.name}`}>View more</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Planets
