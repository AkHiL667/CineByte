import axios from "../utils/axios";
import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

function HorizontalCards() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const [popularTv, setPopularTv] = useState([]);

  const getPopularTv = async () => {
    try {
      const res = await axios.get(`/tv/popular`);
      setPopularTv(res.data.results);
    } catch (error) {
      console.log("Error fetching popular TV shows:", error);
    }
  };

  const getTopRatedTV = async () => {
    try {
      const res = await axios.get(`/tv/top_rated`);
      setTopRatedTV(res.data.results);
    } catch (error) {
      console.log("Error fetching top rated TV shows:", error);
    }
  };

  const getList = async () => {
    const res = await axios.get(`/trending/all/week`);
    setList(res.data.results);
    setFilteredList(res.data.results);
  };

  const getUpcoming = async () => {
    const res = await axios.get(`/movie/upcoming`);
    setUpcoming(res.data.results);
  };

  const getTopRated = async () => {
    try {
      const res = await axios.get(`/movie/top_rated`);
      setTopRated(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
    getTopRated();
    getUpcoming();
    getTopRatedTV();
    getPopularTv();
  }, []);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    if (filter === "All") {
      setFilteredList(list);
      return;
    }

    const filtered = list.filter((item) => {
      if (!item.media_type) {
        return false;
      }
      
      const isMatch = item.media_type === (filter === "Movies" ? "movie" : "tv");
      return isMatch;
    });
    
    setFilteredList(filtered);
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-5">
        <h1 className="text-zinc-300 text-2xl md:text-3xl mb-5 mt-2 font-bold">
          Trending
        </h1>
        <DropDown
          title="Filter"
          options={["All", "Movies", "TV"]}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="w-full px-4 md:px-5 h-[50vh] flex gap-4 md:gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {filteredList.map((item, index) => (
          <Link
            key={item.id}
            to={`/${item.media_type}/${item.id}`}
            className="min-w-[250px] md:min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
              alt={item.title || item.name}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-xl md:text-2xl truncate w-full">
                {item.title || item.name}{" "}
                <span className="text-zinc-400 text-xs md:text-sm">
                  ({item.media_type})
                </span>
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-full md:w-[30vh] tracking-wider text-xs md:text-sm whitespace-normal">
                {item.overview?.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-zinc-300 px-4 md:px-5 text-2xl md:text-3xl mb-5 mt-2 font-bold">
        Top Rated Movies
      </h1>
      <div className="w-full px-4 md:px-5 h-[50vh] flex gap-4 md:gap-5 flex-row overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {topRated.map((item) => (
          <Link
            key={item.id}
            to={`/movie/${item.id}`}
            className="min-w-[250px] md:min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
              alt={item.title}
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-xl md:text-2xl truncate w-full">
                {item.title}
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-full md:w-[30vh] tracking-wider text-xs md:text-sm whitespace-normal">
                {item.overview?.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-zinc-300 px-4 md:px-5 text-2xl md:text-3xl mb-5 mt-2 font-bold">
        Upcoming Movies
      </h1>
      <div className="w-full px-4 md:px-5 h-[50vh] flex gap-4 md:gap-5 flex-row overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {upcoming.map((item) => (
          <Link
            key={item.id}
            to={`/movie/${item.id}`}
            className="min-w-[250px] md:min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
              alt={item.title}
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-xl md:text-2xl truncate w-full">
                {item.title}
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-full md:w-[30vh] tracking-wider text-xs md:text-sm whitespace-normal">
                {item.overview?.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-zinc-300 px-4 md:px-5 text-2xl md:text-3xl mb-5 mt-2 font-bold">
        Top Rated TV Shows
      </h1>
      <div className="w-full px-4 md:px-5 h-[50vh] flex gap-4 md:gap-5 flex-row overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {topRatedTV.map((item) => (
          <Link
            key={item.id}
            to={`/tv/${item.id}`}
            className="min-w-[250px] md:min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
              alt={item.name}
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-xl md:text-2xl truncate w-full">
                {item.name}
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-full md:w-[30vh] tracking-wider text-xs md:text-sm whitespace-normal">
                {item.overview?.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-zinc-300 px-4 md:px-5 text-2xl md:text-3xl mb-5 mt-2 font-bold">
        Popular TV Shows
      </h1>
      <div className="w-full px-4 md:px-5 h-[50vh] flex gap-4 md:gap-5 flex-row overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {popularTv.map((item) => (
          <Link
            key={item.id}
            to={`/tv/${item.id}`}
            className="min-w-[250px] md:min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
              alt={item.name}
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-xl md:text-2xl truncate w-full">
                {item.name}
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-full md:w-[30vh] tracking-wider text-xs md:text-sm whitespace-normal">
                {item.overview?.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HorizontalCards;
