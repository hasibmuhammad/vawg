import React, { useEffect, useState } from "react";
import Games from "./components/Games/Games";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  const API_KEY = "5e9b19fb0d174acf954bf517e4653318";

  const [games, setGames] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [url, setUrl] = useState(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setNext(data.next);
        setPrevious(data.previous);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => {
        setIsLoading(false);

        if (term) {
          window.scrollTo({
            top: 450,
            behavior: "smooth",
          });
        }
      });
  }, [url]);

  // Handle the link of next chunk of data
  const handleNext = (next) => setUrl(next);

  //  Handle the link of previous chunk of data
  const handlePrevious = (previous) => setUrl(previous);

  // Handle Favorite
  const handleFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
    if (favorites.includes(id)) {
      const filterfavs = favorites.filter((f) => f !== id);
      setFavorites([...filterfavs]);
    }
  };

  // Handle the search
  const handleSearch = (term) => {
    setTerm(term);
    setTimeout(() => {
      const newUrl = `${url}&search=${term}`;
      setUrl(newUrl);
    }, 500);
  };

  return (
    <div className="max-w-screen-xl mx-auto font-sans">
      <Header handleSearch={handleSearch} favorites={favorites} />
      {!isLoading && <Banner games={games} />}
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <Games
          games={games}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          next={next}
          previous={previous}
          isLoading={isLoading}
          handleFavorite={handleFavorite}
        />
      )}
      {!isLoading && <Footer />}
    </div>
  );
}

export default App;
