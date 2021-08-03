import React from "react";
import { MovieCard } from "./MovieCard";
import "./style.css";

export const MovieList = ({ movieList, handleTrash }) => {
  return (
    <div className="conteneur">
      {movieList.map((el) => (
        <MovieCard key={el.id} el={el} handleTrash={handleTrash} />
      ))}
    </div>
  );
};
