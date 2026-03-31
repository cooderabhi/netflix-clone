import { useEffect, useState } from "react";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";

function App() {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (user) {
      fetch("http://localhost:5001/api/movies")
        .then(res => res.json())
        .then(data => setMovies(data));
    }
  }, [user]);

  if (!user) return <Auth setUser={setUser} />;

  return (
    <div style={{ backgroundColor: "#141414", minHeight: "100vh", color: "white" }}>
      <Navbar />
      <Banner movie={movies[0]} />

      <Row title="Trending" movies={movies.filter(m => m.isTrending)} />
      <Row title="Popular" movies={movies.filter(m => m.isPopular)} />
      <Row title="All Movies" movies={movies} />
    </div>
  );
}

export default App;