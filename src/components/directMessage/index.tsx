import { useState, useRef } from "react";
import "./style.scss";

const DirectMessage = () => {
  const [isDirectMessageOpen, setDirectMessageOpen] = useState<Boolean>(false);
  const directMessageRef = useRef<null | HTMLDivElement>(null);

  const toggleDirectMessage = (): void => {
    setDirectMessageOpen(!isDirectMessageOpen);
  };
  return (
    <div
      className="direct-message fixed bottom-0 right-0 rounded-t-2xl bg-white mr-5 h-[80vh] max-h-[530px] w-[350px] max-w-[400px]"
      ref={directMessageRef}
      style={isDirectMessageOpen ? { overflowY: "auto" } : { maxHeight: 53 }}
    >
      <div className="flex flex-col ">
        <div className="flex items-center px-4 h-[53px]">
          <h2 className="font-bold text-xl grow">Messages</h2>
          <div className="flex">
            <button
              className="flex items-center btn-hover-gray mr-4"
              type="button"
            >
              <div className="btn-icon relative">
                <div className="hover-effect"></div>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <g>
                    <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
                  </g>
                </svg>
              </div>
            </button>
            <button
              className="flex items-center btn-hover-gray"
              type="button"
              onClick={toggleDirectMessage}
            >
              <div className="btn-icon relative">
                <div className="hover-effect"></div>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  {isDirectMessageOpen ? (
                    <g>
                      <path d="M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z"></path>
                    </g>
                  ) : (
                    <g>
                      <path d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z"></path>
                    </g>
                  )}
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="chats-list">
          <div className="chat-item flex p-4">
            <div className="mr-3 w-12 h-12 rounded-full overflow-hidden shrink-0 relative">
              <img
                src="images/users/1417052605776375813/Jc9RL5o7_normal.jpg"
                alt=""
              />
              <div className="hover-profile absolute duration-200 w-full h-full inset-0"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-15px font-default w-full">
                <div className="flex text-dark">
                  <div className="flex max-w-[190px]">
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap font-bold">
                      Masoud
                    </span>
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap text-gray ml-2">
                      @nickparvar12314566
                    </span>
                  </div>
                  <div className="flex">
                    <div className="text-gray px-2 shrink-0">.</div>
                    <div className="flex shrink-0">
                      <time dateTime="2022-11-25T19:33:39.788Z">Nov 25</time>
                    </div>
                  </div>
                </div>

                <p
                  className="text-ellipsis text-gray text-15px overflow-hidden whitespace-nowrap"
                  dir="ltr"
                >
                  سلام
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;
