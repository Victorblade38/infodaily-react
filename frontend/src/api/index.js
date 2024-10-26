async function getData(category) {
  const url = `https://api.worldnewsapi.com/top-news?api-key=35fec290539d4c11abaefab329241c89&source-country=in&language=en`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const res = await response.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getData;
