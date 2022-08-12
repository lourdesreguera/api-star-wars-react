import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { name } = useParams();

  const getCharacter = async () => {
    const res = await fetch(
      `https://starwars-server.vercel.app/movies/${name}`
    );
    const resData = await res.json();
    setMovie(resData.data.movie);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  console.log(movie);
  return (
    <div>
      {movie.length > 0 &&
        movie.map((mov) => {
          return (
            <>
              <img
                src={mov.poster}
                alt={mov.name}
                referrerpolicy="no-referrer"
              />
              <h2>{mov.name}</h2>
              <p>Year: {mov.year}</p>
              <p>{mov.crawl}</p>
            </>
          );
        })}
    </div>
  );
};

export default MovieDetails;
