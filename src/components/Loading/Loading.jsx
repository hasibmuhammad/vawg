const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="text-center mt-72">
          {/* <p className="mx-4">Loading...</p> */}
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default Loading;
