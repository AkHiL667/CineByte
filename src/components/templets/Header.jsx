import { Link } from "react-router-dom";
import axios from "../utils/axios";
import React, { useState, useEffect } from "react";

function Header() {
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    try {
      const data = await axios.get("/trending/all/week");
      let randomMovie =
        data.data.results[Math.floor(Math.random() * data.data.results.length)];
      setMovie(randomMovie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return movie ? (
    <Link to={`/${movie.media_type}/${movie.id}`}
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.9)), url(${
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : "https://thumbs.dreamstime.com/b/no-image-vector-symbol-missing-available-icon-gallery-moment-placeholder-246411909.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        padding: "1px",
        
      }}
      className="flex flex-col justify-end p-4 md:p-[10%]"
    >
      <h1
        style={{
          textShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
        }}
        className="text-zinc-200 text-2xl ml-5 md:text-4xl font-bold mb-2"
      >
        {movie.title || movie.name}
      </h1>
      <p className="text-zinc-400 text-sm ml-5 md:text-base w-full md:w-[70%]">
        {movie.overview?.slice(0, 150)}...
        <i className="text-violet-500">Read More</i>
      </p>

      <span className="flex items-center gap-2 text-zinc-400 mx-5 mb-5 text-sm">
        <i className="ri-megaphone-fill"></i>
        {movie.release_date
          ? movie.release_date
          : movie.first_air_date
          ? movie.first_air_date
          : "no info"}
        <h1>
          <span>
            <i className="ri-movie-line mx-2"></i>
          </span>
          {movie.media_type.toUpperCase()}
        </h1>
      </span>
      <button className="bg-[#6556CD] text-white px-4 cursor-pointer py-2 rounded-md mx-5 mb-5 w-fit">
        <i className="ri-play-line"></i> Watch the Trailer
      </button>
    </Link>
  ) : (
    <div className="w-full h-[60vh] bg-zinc-900 animate-pulse flex items-center justify-center">
      <h1 className="text-zinc-400 text-2xl">Loading...</h1>
    </div>
  );
}

export default Header;
