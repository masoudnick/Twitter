import { useState } from "react";
import { Media } from "./interfaces";
import { Link } from "react-router-dom";
import ProgressBar from "../progressBar/progressBar";

interface MediaProps {
  media: Media;
  mediaNum: number;
  mediaIndex: number;
}

const TweetMedia = ({ media, mediaNum, mediaIndex }: MediaProps) => {
  const [mediaLoadingStatus, setMediaLoadingStatus] =
    useState<string>("failed");

  const handleLoadTweetMedia = (imgUrl: string, target: any): void => {
    if (mediaLoadingStatus === "failed") {
      const tweetMediaBox = target.closest(".tweet-media-box");
      const tweetMediaImg = tweetMediaBox.querySelector(".tweet-media-cover");
      setMediaLoadingStatus("pending");

      setTimeout(() => {
        tweetMediaImg.src = imgUrl;
      }, 2000);
      tweetMediaImg.onload = () => {
        tweetMediaBox.classList.add("loaded");
        setMediaLoadingStatus("success");
      };
    }
  };
  return (
    <div
      className={
        mediaIndex === 0 && mediaNum > 1
          ? "media-box grow basis-0 relative mr-0.5"
          : "media-box grow basis-0 relative"
      }
      key={media.media_key}
    >
      <Link className="flex border border-slate-100" to="">
        <img
          className="w-full"
          src={media.media_url.tiny}
          alt={media.alt_text}
          loading="lazy"
        />
      </Link>
      <div
        className="media-overlay flex items-center justify-center absolute inset-0 w-full h-full select-none"
        onClick={(e) => {
          handleLoadTweetMedia(media.media_url.small, e.target);
        }}
      >
        {mediaLoadingStatus === "failed" && (
          <button className="btn-load text-white px-4 font-bold rounded-full duration-200">
            Load image
          </button>
        )}
        <div className="media-meta">
          {mediaLoadingStatus === "failed" && (
            <span className="badge">25 KB</span>
          )}
          {mediaLoadingStatus === "success" && media.alt_text && (
            <span className="badge font-bold font-default">ALT</span>
          )}
        </div>
      </div>
      {mediaLoadingStatus === "pending" && <ProgressBar />}
    </div>
  );
};

export default TweetMedia;
