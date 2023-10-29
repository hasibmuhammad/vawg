import { AiOutlineSearch } from "react-icons/ai";
const Search = ({ handleSearch }) => {
  // console.log(handleSearch);
  return (
    <div className="relative w-full">
      <span className="absolute top-5 left-5 ">
        <AiOutlineSearch />
      </span>
      <input
        className="w-full rounded-full py-4 pl-10 pr-4"
        type="search"
        placeholder="Search Games..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
