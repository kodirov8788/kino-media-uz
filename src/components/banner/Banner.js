import axios from "../../axios";
import React, { useEffect, useState } from "react";
import requests from "../../Requests";

import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBotton" />
    </div>
  );
}

export default Banner;
