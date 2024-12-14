async function getData(apiUrl) {
  const apiKey = process.env.REACT_NEWS_API_KEY;
  console.log("Api key", apiKey);
  const url = `${apiUrl}&apiKey=${apiKey}`;
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const res = await response.json();
    //console.log(res);
    return res;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getData;
