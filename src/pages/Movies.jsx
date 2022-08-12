import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fetch("https://starwars-server.vercel.app/movies");
    const resData = await res.json();
    setMovies(resData.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {movies.length > 0 &&
        movies.map((movie, i) => {
          return (
            <div key={i}>
              <Link to={`/movies/${movie.name}`} >View more</Link>
              <img src={movie.poster} alt={movie.name} />
              <h2>{movie.name}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default Movies;
