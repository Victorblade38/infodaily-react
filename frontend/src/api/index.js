async function getData(apiUrl) {
  const apiKey = import.meta.env.NEWS_API_KEY;
  const url = `${apiUrl}&apiKey=${apiKey}`;
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
