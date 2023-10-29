const Loading = ({ isLoading }) => {
  return <div>{isLoading && <p className="mx-4">Loading...</p>}</div>;
};

export default Loading;
