import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navSidebar.scss";

const NavSidebar = () => {
  return (
    <aside className="nav-sidebar">
      <div className="nav-sidebar px-3 overflow-y-auto h-full fixed top-0">
        <div className="logo my-0.5 flex items-center justify-center rounded-full  btn-hover-primary">
          <Link className="flex items-center relative" to="/home">
            <svg viewBox="0 0 24 24" className="text-primary" width="30">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <div className="hover-effect"></div>
          </Link>
        </div>
        <nav className="mt-0.5">
          <NavLink
            to="/home"
            end
            className="flex items-start font-default"
            children={({ isActive }) => {
              return (
                <>
                  <div className="nav-item p-3 flex flex-row items-center rounded-full">
                    {isActive ? (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
                        </g>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
                        </g>
                      </svg>
                    )}
                    <span
                      className={
                        isActive
                          ? "font-semibold mr-4 ml-5 text-xl"
                          : "mr-4 ml-5 text-xl"
                      }
                    >
                      Home
                    </span>
                  </div>
                </>
              );
            }}
          />
          <NavLink
            to="/explore"
            end
            className="flex items-start"
            children={({ isActive }) => {
              return (
                <>
                  <div className="nav-item p-3 flex flex-row items-center rounded-full">
                    {isActive ? (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M10.64 3.157l-.36 3.593h4.99l.38-3.892 2.99.299-.36 3.593h2.97v2.5h-3.22l-.55 5.5h2.77v2.5h-3.02l-.39 3.892-2.98-.299.36-3.593H9.23l-.39 3.892-2.98-.299.36-3.593H2.75v-2.5h3.72l.55-5.5H3.75v-2.5h3.52l.38-3.892 2.99.299zm3.83 11.593l.55-5.5h-4.99l-.55 5.5h4.99z"></path>
                        </g>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path>
                        </g>
                      </svg>
                    )}
                    <span
                      className={
                        isActive
                          ? "font-semibold mr-4 ml-5 text-xl"
                          : "mr-4 ml-5 text-xl"
                      }
                    >
                      Explore
                    </span>
                  </div>
                </>
              );
            }}
          />
          <NavLink
            to="/notifications"
            end
            className="flex items-start"
            children={({ isActive }) => {
              return (
                <>
                  <div className="nav-item p-3 flex flex-row items-center rounded-full">
                    {isActive ? (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path>
                        </g>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
                        </g>
                      </svg>
                    )}
                    <span
                      className={
                        isActive
                          ? "font-semibold mr-4 ml-5 text-xl"
                          : "mr-4 ml-5 text-xl"
                      }
                    >
                      Notifications
                    </span>
                  </div>
                </>
              );
            }}
          />
          <NavLink
            to="/messages"
            end
            className="flex items-start"
            children={({ isActive }) => {
              return (
                <>
                  <div className="nav-item p-3 flex flex-row items-center rounded-full">
                    {isActive ? (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
                        </g>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                        </g>
                      </svg>
                    )}
                    <span
                      className={
                        isActive
                          ? "font-semibold mr-4 ml-5 text-xl"
                          : "mr-4 ml-5 text-xl"
                      }
                    >
                      Messages
                    </span>
                  </div>
                </>
              );
            }}
          />
          <NavLink
            to="/bookmarks"
            end
            className="flex items-start"
            children={({ isActive }) => {
              return (
                <>
                  <div className="nav-item p-3 flex flex-row items-center rounded-full">
                    {isActive ? (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path>
                        </g>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                        </g>
                      </svg>
                    )}
                    <span
                      className={
                        isActive
                          ? "font-semibold mr-4 ml-5 text-xl"
                          : "mr-4 ml-5 text-xl"
                      }
                    >
                      Bookmarks
                    </span>
                  </div>
                </>
              );
            }}
          />
          <NavLink
            to="/lists"
            end
            className="flex items-start"
            children={({ isActive }) => {
              return (
                <>
                  <div className="nav-item p-3 flex flex-row items-center rounded-full">
                    {isActive ? (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"></path>
                        </g>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
                        </g>
                      </svg>
                    )}
                    <span
                      className={
                        isActive
                          ? "font-semibold mr-4 ml-5 text-xl"
                          : "mr-4 ml-5 text-xl"
                      }
                    >
                      Lists
                    </span>
                  </div>
                </>
              );
            }}
          />
          <NavLink
            to="/"
            end
            className="flex items-start"
            children={({ isActive }) => {
              return (
                <>
                  <div className="nav-item p-3 flex flex-row items-center rounded-full">
                    {isActive ? (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
                        </g>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="26" height="26">
                        <g>
                          <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                        </g>
                      </svg>
                    )}
                    <span
                      className={
                        isActive
                          ? "font-semibold mr-4 ml-5 text-xl"
                          : "mr-4 ml-5 text-xl"
                      }
                    >
                      Profile
                    </span>
                  </div>
                </>
              );
            }}
          />
          <button className="nav-item p-3 flex flex-row items-center rounded-full">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <g>
                <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
              </g>
            </svg>
            <span className="mr-4 ml-5 text-xl">More</span>
          </button>
        </nav>
        <button
          className="btn-tweet bg-primary my-2 px-8 rounded-full text-white font-bold duration-200"
          type="button"
        >
          Tweet
        </button>
        <div className="p-3 flex flex-row items-center my-3 cursor-pointer bg-hover-gray duration-200 overflow-hidden rounded-full">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="images/users/nickparvar.jpg" alt="" />
          </div>
          <div className="mx-3 grow">
            <p className="font-bold">مـسعـود</p>
            <p className="text-gray">@nickparvar</p>
          </div>
          <div className="relative">
            <svg viewBox="0 0 24 24" width="20">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
            <span className="unread-item bg-primary absolute rounded-full"></span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NavSidebar;
