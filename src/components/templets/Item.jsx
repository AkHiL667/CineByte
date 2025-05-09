import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios';

function Item() {
  const { id, mediaType } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const endpoint = mediaType === 'tv' ? `/tv/${id}` : `/movie/${id}`;
        const response = await axios.get(endpoint);
        setMovie(response.data);
        
        const videoEndpoint = mediaType === 'tv' ? `/tv/${id}/videos` : `/movie/${id}/videos`;
        const videoResponse = await axios.get(videoEndpoint);
        const trailer = videoResponse.data.results.find(
          video => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, mediaType]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="w-full min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-white text-2xl">Content not found</div>
      </div>
    );
  }

  const {
    title,
    name,
    poster_path,
    backdrop_path,
    overview,
    vote_average,
    release_date,
    first_air_date,
    genres,
    number_of_seasons,
    number_of_episodes,
    status
  } = movie;

  const displayTitle = title || name;
  const displayDate = release_date || first_air_date;
  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <motion.div 
      className="w-full min-h-screen bg-[#0f0f0f] text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="w-full min-h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 p-4 md:p-8 max-w-7xl w-full mx-auto">
          <motion.div 
            className="flex-shrink-0 w-[200px] h-[300px] md:w-[250px] md:h-[375px] lg:w-[300px] lg:h-[450px] mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={imageUrl} alt={displayTitle} className="w-full h-full object-cover" />
          </motion.div>
          
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-md m-0 text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {displayTitle}
              <span className="text-base md:text-lg text-gray-400 ml-2">
                ({mediaType === 'tv' ? 'TV Series' : 'Movie'})
              </span>
            </motion.h1>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 mb-4">
              <motion.div 
                className="flex flex-col items-center lg:items-start gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-xl md:text-2xl font-bold text-yellow-400">{vote_average?.toFixed(1)}</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Rating</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center lg:items-start gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-sm text-gray-400 uppercase tracking-wider">
                  {mediaType === 'tv' ? 'First Air Date' : 'Release Date'}
                </span>
                <span className="text-base md:text-lg text-white">
                  {displayDate ? new Date(displayDate).toLocaleDateString() : 'Coming Soon'}
                </span>
              </motion.div>

              {mediaType === 'tv' && (
                <>
                  <motion.div 
                    className="flex flex-col items-center lg:items-start gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Seasons</span>
                    <span className="text-base md:text-lg text-white">{number_of_seasons}</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col items-center lg:items-start gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Episodes</span>
                    <span className="text-base md:text-lg text-white">{number_of_episodes}</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col items-center lg:items-start gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Status</span>
                    <span className="text-base md:text-lg text-white">{status}</span>
                  </motion.div>
                </>
              )}
            </div>

            <motion.p 
              className="text-base md:text-lg leading-relaxed text-gray-200 m-0 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {overview || 'No overview available'}
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {genres?.map((genre) => (
                <span 
                  key={genre.id} 
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm text-white bg-white/10 backdrop-blur-sm"
                >
                  {genre.name}
                </span>
              ))}
            </motion.div>

            {trailerKey && (
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  onClick={() => setShowTrailer(true)}
                  className="mt-4 px-4 md:px-6 py-2 md:py-3 bg-[#6556CD] hover:bg-[#5649b3] text-white rounded-lg flex items-center gap-2 transition-colors duration-200"
                >
                  <svg 
                    className="w-5 h-5 md:w-6 md:h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Trailer
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-200"
            >
              <svg 
                className="w-6 h-6 md:w-8 md:h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Item;
