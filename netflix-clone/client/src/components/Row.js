function Row({ title, movies }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>

      <div style={{
        display: "flex",
        overflowX: "scroll",
        gap: "10px"
      }}>
        {movies.map(movie => (
          <img
            key={movie._id}
            src={movie.thumbnail}
            alt=""
            style={{
              width: "150px",
              cursor: "pointer",
              transition: "transform 0.3s"
            }}
            onMouseOver={e => e.target.style.transform = "scale(1.1)"}
            onMouseOut={e => e.target.style.transform = "scale(1)"}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;