function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={
            movie.image?.original ||
            movie.image?.medium
          }
          alt={movie.name}
        />

        <h2>{movie.name}</h2>

        <p>
          ⭐ Rating:{" "}
          {movie.rating?.average || "N/A"}
        </p>

        <p>
          📅 Release Date:{" "}
          {movie.premiered || "Unknown"}
        </p>

        <p>
          🎭 Genres:{" "}
          {movie.genres?.join(", ") || "N/A"}
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: movie.summary || "",
          }}
        />

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieModal;