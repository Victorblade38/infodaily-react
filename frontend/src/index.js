import axios from "axios";

async function getData(apiUrl) {
  console.log("API URL being sent to the backend:", apiUrl);
  try {
    // Use full URL in development
    const response = await axios.get(
      `https://nodejs-serverless-function-express-infodaily.vercel.app/api/hello?apiUrl=${encodeURIComponent(
        apiUrl
      )}`
    );

    console.warn("Fetched data:", response.data);
    return response.data;
  } catch (error) {
    console.warn("Frontend Error fetching data:", error.message);
    return null;
  }
}

export default getData;
