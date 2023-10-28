import React, { useEffect, useState } from "react";
import Games from "./components/Games/Games";
import Header from "./components/Header/Header";

function App() {
  const API_KEY = "5e9b19fb0d174acf954bf517e4653318";

  const [games, setGames] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [url, setUrl] = useState(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  const [isLoading, setIsLoading] = useState(false);

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
      .finally(() => setIsLoading(false));
  }, [url]);

  const handleNext = (next) => setUrl(next);
  const handlePrevious = (previous) => setUrl(previous);

  return (
    <div className="max-w-screen-xl mx-auto font-sans">
      <Header />
      {isLoading && <p className="mx-4">Loading...</p>}
      <Games
        games={games}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        next={next}
        previous={previous}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
