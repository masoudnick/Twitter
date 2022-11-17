import { useEffect, useState } from "react";
import { tweetsAPI } from "../../API";
import { Tweet } from "./interfaces";
import Loading from "../loading/loading";
import SingleTweet from "./singleTweet";

const Tweets = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const getTweets = () => {
    tweetsAPI()
      .then((res) => {
        setTweets(res.data);
      })
      .catch((error) => {
        setTweets([]);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getTweets();
    }, 1500);
  }, []);
  return (
    <>
      {tweets.map((tweet) => (
        <SingleTweet tweet={tweet} key={tweet.id} />
      ))}
      {!tweets.length && <Loading />}
    </>
  );
};

export default Tweets;
