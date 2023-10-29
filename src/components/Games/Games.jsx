import { BsViewList, BsFillGrid3X3GapFill } from "react-icons/bs";
import Game from "../Game/Game";
import { useState } from "react";

const Games = ({
  games,
  handleNext,
  handlePrevious,
  handleFavorite,
  next,
  previous,
  isLoading,
}) => {
  const [listView, setListView] = useState(false);

  return (
    <div className="my-8 mx-4">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-7xl font-bold">New and trending</h1>
          <p className="ml-1">VAWG Video Games</p>
        </div>
        <div className="flex justify-normal gap-2 items-center text-2xl">
          <button
            title="Grid View"
            onClick={() => setListView(false)}
            className={
              !listView && "bg-orange-400 font-bold p-1 rounded-md text-black"
            }
          >
            <BsFillGrid3X3GapFill />
          </button>
          <button
            title="List View"
            onClick={() => setListView(true)}
            className={
              listView && "bg-orange-400 font-bold p-1 rounded-md text-black"
            }
          >
            <BsViewList />
          </button>
        </div>
      </div>
      <div
        className={`grid gap-4 ${
          listView
            ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {games.map((gm) => (
          <Game key={gm.id} game={gm} handleFavorite={handleFavorite} />
        ))}
      </div>
      {!isLoading && (
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => handlePrevious(previous)}
            className={`btn btn-outline capitalize px-5 ${
              !previous && "btn-disabled"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => handleNext(next)}
            className="btn btn-outline capitalize px-5"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Games;
