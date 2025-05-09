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
    const res = await axios.get(`/tv/popular`);
    setPopularTv(res.data.results);
  };

  const getTopRatedTV = async () => {
    const res = await axios.get(`/tv/top_rated`);
    setTopRatedTV(res.data.results);
  };

  const getList = async () => {
    const res = await axios.get(`/trending/all/week`);
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
    } else {
      const filtered = list.filter((item) => {
        if (filter === "Movies") {
          return item.media_type === "movie";
        } else if (filter === "TV") {
          return item.media_type === "tv";
        }
        return true;
      });
      setFilteredList(filtered);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-zinc-300 px-5 text-3xl mb-5 mt-2 font-bold">
          Trending
        </h1>
        <DropDown
          title="Filter"
          options={["TV", "Movies", "All"]}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="w-full px-5 h-[50vh] flex gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {filteredList.map((item, index) => (
          <Link
            key={index}
            to={`/${item.media_type}/${item.id}`}
            className="min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.title || item.name}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-2xl truncate w-full">
                {item.title || item.name}{" "}
                <span className="text-zinc-400 text-sm">
                  ({item.media_type})
                </span>
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-[30vh] tracking-wider text-sm whitespace-normal">
                {item.overview.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
      <h1 className="text-zinc-300 px-5 text-3xl mb-5 mt-2 font-bold">
        Top Rated Movies
      </h1>

      <div className="w-full px-5 h-[50vh] flex gap-5 flex-row overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {topRated.map((item, index) => (
          <Link
            key={index}
            to={`/movie/${item.id}`}
            className="min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.title}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-2xl truncate w-full">
                {item.title}
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-[30vh] tracking-wider text-sm whitespace-normal">
                {item.overview.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-zinc-300 px-5 text-3xl mb-5 mt-2 font-bold">
        Upcoming Movies
      </h1>
      <div className="w-full px-5 h-[50vh] flex gap-5 flex-row overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {upcoming.map((item, index) => (
          <Link
            key={index}
            to={`/movie/${item.id}`}
            className="min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.title}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-2xl truncate w-full">
                {item.title}
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-[30vh] tracking-wider text-sm whitespace-normal">
                {item.overview.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-zinc-300 px-5 text-3xl mb-5 mt-2 font-bold">
        Top Rated TV Shows
      </h1>
      <div className="w-full px-5 h-[50vh] flex gap-5 flex-row overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {topRatedTV.map((item, index) => (
          <Link
            key={index}
            to={`/tv/${item.id}`}
            className="min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.name}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-2xl truncate w-full">
                {item.name}
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-[30vh] tracking-wider text-sm whitespace-normal">
                {item.overview.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-zinc-300 px-5 text-3xl mb-5 mt-2 font-bold">
        Popular TV Shows
      </h1>
      <div className="w-full px-5 h-[50vh] flex gap-5 flex-row overflow-x-auto whitespace-nowrap scrollbar-hide [&::-webkit-scrollbar]:hidden">
        {popularTv.map((item, index) => (
          <Link
            key={index}
            to={`/tv/${item.id}`}
            className="min-w-[30vh] hover:scale-105 transition-all duration-300 overflow-hidden bg-zinc-900 shadow-lg rounded-3xl h-[45vh] break-words"
          >
            <img
              className="w-full h-[60%] object-cover rounded"
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.name}
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 ml-2 font-title my-1 tracking-wider text-2xl truncate w-full">
                {item.name}
              </h1>
              <p className="text-zinc-400 ml-2 font-title w-[30vh] tracking-wider text-sm whitespace-normal">
                {item.overview.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HorizontalCards;
