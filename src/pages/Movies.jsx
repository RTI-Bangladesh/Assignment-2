import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  
  const searchMovies = async () => {
    if (!search.trim()) return;

    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${search}`
    );

    const data = await res.json();

    setMovies(data.map((item) => item.show));
  };


  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Movie Listing Page</h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchMovies}>
        Search
      </button>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDetails={setSelectedMovie}
          />
        ))}
      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default Movies;