import Game from "../Game/Game";

const Games = ({
  games,
  handleNext,
  handlePrevious,
  handleFavorite,
  next,
  previous,
  isLoading,
}) => {
  return (
    <div className="my-8 mx-4">
      <div className="mb-4 ">
        <h1 className="text-7xl font-bold">New and trending</h1>
        <p className="ml-1">VAWG Video Games</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
