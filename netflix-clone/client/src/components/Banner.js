function Banner({ movie }) {
  if (!movie) return null;

  return (
    <div style={{
      height: "60vh",
      backgroundImage: `url(${movie.banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "flex-end",
      padding: "40px"
    }}>
      <div>
        <h1>{movie.title}</h1>
        <p style={{ maxWidth: "500px" }}>{movie.description}</p>

        <button style={btnStyle}>▶ Play</button>
        <button style={btnStyle}>+ My List</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  marginRight: "10px",
  border: "none",
  backgroundColor: "white",
  color: "black",
  cursor: "pointer"
};

export default Banner;