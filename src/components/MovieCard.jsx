function MovieCard({ movie, onDetails }) {
  return (
    <div className="card">
      <img
        src={movie.image?.medium}
        alt={movie.name}
      />

      <h3>{movie.name}</h3>

      <p>
        ⭐ {movie.rating?.average || "N/A"}
      </p>

      <p>
        📅 {movie.premiered || "Unknown"}
      </p>

      <button onClick={() => onDetails(movie)}>
        See Details
      </button>
    </div>
  );
}

export default MovieCard;