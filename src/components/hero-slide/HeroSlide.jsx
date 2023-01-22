import React, { useEffect, useState } from "react";
import tmdbApi, { movieType } from "../../api/tmdbApi";

const HeroSlide = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const params = { page: 1 };
    try {
      // const response = await tmdbApi.getMoviesList(movieType.popular, {
      //   params,
      // });
      // console.log(response.results);
      // setMovies(response.results.slice(0, 4));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="hero-slide">HeroSlide</div>;
};

export default HeroSlide;
