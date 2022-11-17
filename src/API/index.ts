import Axios from "axios";

export const tweetsAPI = async () =>
  await Axios.get("http://127.0.0.1:8000/timeline/");

export const recomendationsAPI = async () =>
  await Axios.get("http://127.0.0.1:8000/recomendations/");

export const trendingAPI = async () =>
  await Axios.get("http://127.0.0.1:8000/trending/");
