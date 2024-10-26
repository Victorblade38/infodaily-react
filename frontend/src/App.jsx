import search from "./assets/search.png";
import bookmark from "./assets/bookmark.png";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center bg-slate-800 bg-gradient-to-r from-gray-500 to-gray-800">
      <div className="bg-gray-300 p-20 rounded-lg shadow-xl shadow-gray-700">
        <div className="flex flex-row justify-between mb-8">
          <form className="flex flex-row ">
            <input
              type="text"
              placeholder="search"
              className="w-96 focus:outline-none p-3 placeholder:text-slate-400 rounded-md shadow-md"
            />
            <button className="bg-blue-400 px-4 ml-2 rounded-md shadow-md">
              <img src={search} width={20} />
            </button>
            <select className="col-span-1 px-4  rounded-md ml-8  focus:outline-none shadow-md">
              <option value="general">Category </option>
              <option value="general">General</option>
              <option value="general">Politics</option>
              <option value="general">Entertainment</option>
              <option value="general">Sports</option>
              <option value="general">Economics</option>
            </select>
          </form>
          <button className="bg-white px-4 ml-2 rounded-md shadow-md">
            <img src={bookmark} width={20} />
          </button>
        </div>
        <div
          style={{
            height: "640px",
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For IE and Edge
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto"
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
