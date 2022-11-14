import { Link } from "react-router-dom";
import { TrendSidebar, Tweets } from "../../components";
import React, { useRef, useState } from "react";
import { CircularProgressBar } from "../../components";
import "./home.scss";

const Home = () => {
  const [disableTweetButton, setDisableTweetButton] = useState<boolean>(true);
  const [tweetLength, setTweetLength] = useState<number>(0);
  const tweetTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleChangeTweet = (): void => {
    let tweetText: string = tweetTextareaRef.current.value;
    setTweetLength(tweetText.length);
    tweetText.length
      ? setDisableTweetButton(false)
      : setDisableTweetButton(true);
    // setCommentText(commentText);
    tweetTextareaRef.current.style.height =
      tweetTextareaRef.current.scrollHeight + "px";
  };

  return (
    <>
      <section className="flex flex-row justify-between grow">
        <main className="main-content w-full">
          <div className="home-timeline flex flex-col w-full border-x border-slate-100 min-h-full">
            <section className="header flex flex-row items-center pl-4 pr-1.5 sticky">
              <h2 className="font-bold text-xl grow">Home</h2>
              <button
                className="flex items-center justify-center w-9 h-9 rounded-full bg-hover-gray duration-200"
                type="button"
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <g>
                    <path d="M2 4c1.66 0 3-1.34 3-3h1c0 1.66 1.34 3 3 3v1C7.34 5 6 6.34 6 8H5c0-1.66-1.34-3-3-3V4zm7.89 4.9C11.26 7.53 12 5.35 12 2h2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1zm7.32 3.1c-.97-.42-1.81-.97-2.53-1.69-.71-.71-1.27-1.56-1.68-2.52-.42.96-.98 1.81-1.69 2.52-.72.72-1.56 1.27-2.53 1.69.97.42 1.81.97 2.53 1.69.71.71 1.27 1.56 1.69 2.52.41-.96.97-1.81 1.68-2.52.72-.72 1.56-1.27 2.53-1.69z"></path>
                  </g>
                </svg>
              </button>
            </section>
            <section className="write-tweet-box flex flex-row border-b px-4 pt-2 pb-1 mb-1 border-slate-100">
              <div className="mr-3">
                <Link
                  className="flex w-12 h-12 rounded-full overflow-hidden relative"
                  to=""
                >
                  <img src="images/users/nickparvar.jpg" alt="" />
                  <div className="hover-profile absolute duration-200 w-full h-full inset-0"></div>
                </Link>
              </div>
              <div className="tweet-content grow">
                <div className="">
                  <textarea
                    className="tweet-text border-0 py-3 text-xl w-full"
                    rows={1}
                    cols={1}
                    placeholder="What’s happening?"
                    onChange={handleChangeTweet}
                    ref={tweetTextareaRef}
                    dir="auto"
                  ></textarea>
                </div>
                <div className="toolbar flex justify-between pt-3 pb-2 border-t border-slate-100">
                  <div className="flex">
                    <button
                      className="flex items-center justify-center w-9 h-9 relative rounded-full text-primary bg-hover-primary-light duration-200"
                      type="button"
                    >
                      <label htmlFor="tweet-text">
                        <input
                          className="w-full h-full overflow-hidden absolute opacity-0 -z-1"
                          name="tweet-text"
                          type="file"
                          accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime"
                          multiple
                        />
                      </label>
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <g>
                          <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      className="flex items-center justify-center w-9 h-9 rounded-full text-primary bg-hover-primary-light duration-200"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <g>
                          <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      className="flex items-center justify-center w-9 h-9 rounded-full text-primary bg-hover-primary-light duration-200"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <g>
                          <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      className="flex items-center justify-center w-9 h-9 rounded-full text-primary bg-hover-primary-light duration-200"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <g>
                          <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      className="flex items-center justify-center w-9 h-9 rounded-full text-primary bg-hover-primary-light duration-200"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <g>
                          <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      className="flex items-center justify-center w-9 h-9 rounded-full text-primary bg-hover-primary-light duration-200"
                      type="button"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <g>
                          <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center">
                    {tweetLength > 0 && (
                      <>
                        <div className="progress-bar relative">
                          <div className="-rotate-90">
                            {tweetLength <= 250 && (
                              <CircularProgressBar
                                viewBox={20}
                                width={20}
                                height={20}
                                radius={9}
                                strokeColor="#1D9BF0"
                                percentage={(tweetLength * 100) / 280}
                              />
                            )}
                            {250 < tweetLength && tweetLength < 280 && (
                              <CircularProgressBar
                                viewBox={30}
                                width={30}
                                height={30}
                                radius={14}
                                strokeColor="#FFD400"
                                percentage={(tweetLength * 100) / 280}
                              />
                            )}
                            {tweetLength >= 280 && (
                              <CircularProgressBar
                                viewBox={30}
                                width={30}
                                height={30}
                                radius={14}
                                strokeColor="#f4212e"
                                percentage={(tweetLength * 100) / 280}
                              />
                            )}
                          </div>
                          {250 < tweetLength && (
                            <span
                              className={
                                280 > tweetLength
                                  ? "flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 text-xs m-auto"
                                  : "flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 text-xs m-auto text-danger"
                              }
                            >
                              {280 - tweetLength}
                            </span>
                          )}
                        </div>
                        <div className="divider-line mx-3"></div>
                      </>
                    )}
                    <button
                      className="bg-primary bg-hover-primary px-4 h-9 rounded-full duration-200 font-bold text-white"
                      type="button"
                      disabled={tweetLength === 0}
                    >
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <Tweets />
            </section>
          </div>
        </main>
        <TrendSidebar />
      </section>
    </>
  );
};

export default Home;
