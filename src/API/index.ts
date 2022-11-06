import Axios from "axios";

export const getTweetsTimeline = async () =>
  await Axios.get("http://127.0.0.1:8000/timeline/");
