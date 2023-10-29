const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="text-center mt-72">
          <p className="mx-4">Loading...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
