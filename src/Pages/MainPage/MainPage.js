import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "../../Components/Atom/MovieCard/MovieCard";
import style from "./MainPage.module.css";

export default function MainPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className={style.MainPage}>
      <h1 className={style.heading}>Movies</h1>
      <div className={style.card_container}>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          data.map((movie) => (
            <MovieCard
              name={movie.show.name}
              imageUrl={
                movie.show.image
                  ? movie.show.image.medium
                  : "https://res.cloudinary.com/do6tjvges/image/upload/v1684015410/movie%20website/download_qdcaap.jpg"
              }
              genres={movie.show.genres}
              type={movie.show.type}
              rating={movie.show.rating.average}
              runtime={movie.show.runtime}
              summary={movie.show.summary}
            />
          ))
        )}
        {console.log(data)}
      </div>
    </div>
  );
}
