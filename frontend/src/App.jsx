import search from "./assets/search.png";
import bookmark from "./assets/bookmark.png";
import darkModeIcon from "./assets/dark-mode.png";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import getData from "./index";

function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [savedCards, setSavedCards] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleShowSaved = () => {
    setShowSaved(!showSaved);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (!query) {
      alert("Search a valid term");
    }
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-11-22&to=2024-11-22&sortBy=popularity`;
    fetchData(apiUrl);
    setSearchTerm("");
  };

  const fetchData = async (apiUrl) => {
    try {
      const w = await getData(apiUrl);
      if (w && w.articles) {
        setData(w.articles);
        console.log(w.articles.length);
      } else {
        console.log("No articles found in the response or invalid response.");
        console.error("Invalid response from getData():", w);
      }
    } catch (error) {
      setError("Failed to fetch data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business`;
    fetchData(apiUrl);
  }, []);

  return (
    <div
      className={`min-h-screen min-w-screen flex flex-col gap-4 xl:gap-10 justify-center items-center ${
        theme === "light" ? "bg-gray-50" : "bg-gray-800"
      }`}
    >
      <div className=" flex flex-row justify-between xl:mb-8 mt-4">
        <form
          className="bg-white flex flex-row rounded-md md:shadow-md"
          onSubmit={onSubmitHandler}
          id="search-form"
        >
          <input
            type="text"
            name="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search"
            className=" md:w-72 lg:w-96 focus:outline-none text-[12px] p-2 xl:p-3  placeholder:text-slate-400 rounded-md"
          />
          <button className=" px-4 ml-2 active:bg-gray-400">
            <img src={search} alt="Search" className="w-4" />
          </button>
        </form>
        <button
          className="bg-white p-2 xl:px-4 ml-2 rounded-md md:shadow-md"
          onClick={toggleShowSaved}
        >
          <img src={bookmark} alt="Bookmark" className="w-3" />
        </button>
        <button
          className="bg-white p-2 xl:px-4 ml-2 rounded-md md:shadow-md"
          onClick={toggleTheme}
        >
          <img src={darkModeIcon} alt="Bookmark" className="w-3" />
        </button>
      </div>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">API Error</p>
      ) : (
        <div className=" h-[800px] lg:h-[640px] grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 overflow-y-auto no-scrollbar">
          {(showSaved ? savedCards : data).map((item, index) => (
            <Cards
              key={index}
              title={item.title}
              url={item.url}
              theme={theme}
              urlToImage={item.urlToImage}
              onSave={() => handleSaveCard(item)}
              isSaved={savedCards.some((saved) => saved.url === item.url)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
