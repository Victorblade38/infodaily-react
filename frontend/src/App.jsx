import search from "./assets/search.png";
import bookmark from "./assets/bookmark.png";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import getData from "./api";

function App() {
  const [data, setData] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const query = e.target.input.value;
      const res = await getData(query);
      const topNews = res["top_news"];
      const filterNews = topNews.map((item) => item["news"][0]);
      setData(filterNews);
    } catch (error) {
      setError("Failed to fetch data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCard = (card) => {
    // Check if the card is already saved
    const isSaved = savedCards.some((saved) => saved.url === card.url);
    if (isSaved) {
      // If already saved, remove it from the saved list
      setSavedCards(savedCards.filter((saved) => saved.url !== card.url));
    } else {
      // If not saved, add it to the saved list
      setSavedCards([...savedCards, card]);
    }
  };

  const toggleShowSaved = () => {
    setShowSaved(!showSaved);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData("mumbai");
        const topNews = res["top_news"];
        const filterNews = topNews.map((item) => item["news"][0]);
        setData(filterNews);
      } catch (error) {
        setError("Failed to fetch data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col gap-4 xl:gap-10 justify-center items-center bg-gray-300 dark:bg-gray-600 lg:bg-gradient-to-b lg:from-gray-300 lg:to-gray-600  lg:dark:bg-gradient-b-t  lg:dark:from-gray-600  lg:dark:to-gray-800">
      <div className="p-2">
        <div className="flex flex-row justify-between xl:mb-8 mt-4">
          <form
            className="flex flex-row"
            onSubmit={onSubmitHandler}
            id="search-form"
          >
            <input
              type="text"
              name="input"
              placeholder="search"
              className=" md:w-72 lg:w-96 focus:outline-none text-[12px] p-2 xl:p-3  placeholder:text-slate-400 rounded-md shadow-md"
              disabled
            />
            <button
              className="bg-slate-100 px-4 ml-2 rounded-md shadow-md"
              disabled
            >
              <img src={search} alt="Search" className="w-4" />
            </button>
          </form>
          <button
            className="bg-white p-2 xl:px-4 ml-2 rounded-md shadow-md"
            onClick={toggleShowSaved}
          >
            <img src={bookmark} alt="Bookmark" className="w-4" />
          </button>
        </div>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div
            style={{
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For IE and Edge
            }}
            className="lg:h-[640px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-y-auto p-2"
          >
            {(showSaved ? savedCards : data).map((item, index) => (
              <Cards
                key={index}
                title={item.title}
                url={item.url}
                urlToImage={item.urlToImage}
                onSave={() => handleSaveCard(item)}
                isSaved={savedCards.some((saved) => saved.url === item.url)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
