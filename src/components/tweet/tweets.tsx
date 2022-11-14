import { useEffect, useState } from "react";
import { getTweetsApi } from "../../API";
import Tweet from "./interfaces";
import SingleTweet from "./singleTweet";

const Tweets = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const getTweets = () => {
    getTweetsApi()
      .then((res) => {
        setTweets(res.data);
      })
      .catch((error) => {
        setTweets([]);
      });
  };

  useEffect(() => {
    getTweets();

    // setTimeout(() => {}, 2000);
  }, []);
  return (
    <>
      {tweets.map((tweet) => (
        <SingleTweet tweet={tweet} key={tweet.id} />
      ))}
    </>
  );
};

export default Tweets;
