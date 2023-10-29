import { useEffect, useState } from "react";

const Banner = ({ games }) => {
  const [screenshots, setScreenshots] = useState([]);

  //   Random Index
  let idx = Math.floor(Math.random() * games.length);
  useEffect(() => {
    setScreenshots(games[idx]?.short_screenshots);
  }, [screenshots]);
  return (
    <div className="mx-4">
      <div className="carousel w-full">
        {screenshots &&
          screenshots.map((ss, idx) => (
            <div
              key={ss.id}
              id={`item${idx + 1}`}
              className="carousel-item w-full"
            >
              <img
                src={ss.image}
                className="w-full h-[500px] object-cover rounded-md"
              />
            </div>
          ))}
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        {screenshots &&
          screenshots.map((sc, idx) => (
            <a key={sc.id} href={`#item${idx + 1}`} className="btn btn-xs">
              {idx + 1}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Banner;
