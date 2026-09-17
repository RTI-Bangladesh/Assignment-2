import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"; 
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>DISCOVER MOVIES</h1>

        <p>
          Explore and discover your favorite movies
          from around the world.
        </p>

        <Link to="/movies">
          <button>Explore Now</button>
        </Link>
      </section> 
      <Footer />
    </>
  );
}

export default Home;