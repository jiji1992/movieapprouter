import { useState } from "react";
import { MovieList } from "./MovieList";
import NavBar from "./NavBar";
import { Films } from "../data";
function Home() {
  const [movieList, setMovielist] = useState(Films);
  const handleAdd = (newMovie) => {
    setMovielist([
      ...movieList,
      {
        id: Math.random(),
        title: newMovie.title.value,
        rate: Number(newMovie.rate.value),
        srcImg: newMovie.poster.value,
        srcVideo: newMovie.video.value,
      },
    ]);
  };

  const [title, setTitle] = useState("");
  const [rate, setrate] = useState(0);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setrate(newRating);
  };
  const handleTrash = (id) => {
    setMovielist(movieList.filter((el) => el.id !== id));
  };
  return (
    <>
      <NavBar
        title={title}
        handleChange={handleChange}
        rate={rate}
        ratingChanged={ratingChanged}
        handleAdd={handleAdd}
      />
      <div className="App">
        <MovieList
          handleTrash={handleTrash}
          movieList={movieList.filter(
            (movie) =>
              movie.title.toUpperCase().includes(title.toUpperCase()) &&
              movie.rate >= rate
          )}
        />
      </div>
    </>
  );
}

export default Home;
