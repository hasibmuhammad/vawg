import Game from "../Game/Game";

const Games = ({
  games,
  handleNext,
  handlePrevious,
  next,
  previous,
  isLoading,
}) => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {games.map((gm) => (
          <Game key={gm.id} game={gm} />
        ))}
      </div>
      {!isLoading && (
        <div className="mt-4 flex justify-between items-center mx-4">
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
