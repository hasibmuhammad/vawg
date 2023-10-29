import { AiFillStar } from "react-icons/ai";
import Favorite from "../Header/Favorite/Favorite";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";

const Game = ({
  game: { id, name, background_image, rating, genres },
  handleFavorite,
}) => {
  const [fav, setFav] = useState(false);
  return (
    <div className="card bg-[#202020] rounded-lg">
      <figure>
        <img loading="lazy" src={background_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge">
            <AiFillStar />
            {rating}
          </div>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, tenetur.
        </p>
        <div className="flex justify-between items-center">
          <div className="card-actions justify-start mt-4">
            {genres.map((gr) => (
              <div key={gr.id} className="badge badge-outline">
                {gr.name}
              </div>
            ))}
          </div>
          <div
            className={`text-2xl mt-4 cursor-pointer ${
              fav && "text-orange-400"
            }`}
            onClick={() => {
              handleFavorite(id);
              setFav(!fav);
            }}
          >
            {!fav ? <MdFavoriteBorder /> : <MdFavorite />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
