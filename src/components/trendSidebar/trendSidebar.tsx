import "./trendSidebar.scss";
import { Link } from "react-router-dom";

import React from "react";

const TrendSidebar = () => {
  return (
    <aside className="trend-sidebar flex-[0_0_auto] mr-2.5">
      <div className="search-box rounded-full mb-3 mt-1">
        <form className="flex flex-row items-center" action="">
          <div className="text-gray pl-4">
            <svg viewBox="0 0 24 24" width="18">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
          <div className="grow">
            <input
              className="p-3 bg-transparent w-full text-dark"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              placeholder="Search Twitter"
            />
          </div>
        </form>
      </div>
      <section className="trending-box mb-4 overflow-hidden">
        <h2 className="font-extrabold text-xl px-4 py-3">What’s happening</h2>
        <ul className="trending-list">
          <li className="trending-item flex flex-row justify-between duration-200 px-4 py-3">
            <div>
              <div className="mr-3 text-gray text-xs">
                <span>Soccer</span>
                <span className="px-1">.</span>
                <span>LIVE</span>
              </div>
              <div className="my-0.5 text-sm fonr-bold">
                <p className="font-bold">Benfica vs Paris Saint-Germain</p>
              </div>
              <div className="mt-0.5">
                <p className="text-gray text-xs">
                  Trending with
                  <Link className="text-primary pl-1 hover:underline" to="">
                    Mbappe
                  </Link>
                </p>
              </div>
            </div>
            <div className="trending-icon flex shrink-0 justify-center items-center border rounded-xl text-gray duration-200">
              <svg viewBox="0 0 24 24" width="30" height="30">
                <g>
                  <path d="M14 11.25H6c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-4H6c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.25 8H6c-.414 0-.75.336-.75.75s.336.75.75.75h4.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                  <path d="M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-18.25 8.5V4.25c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v15c0 .452.12.873.315 1.25H4c-.413 0-.75-.337-.75-.75zm16.25.75c-.69 0-1.25-.56-1.25-1.25v-6.5h2.5v6.5c0 .69-.56 1.25-1.25 1.25z"></path>
                </g>
              </svg>
            </div>
          </li>
          <li className="trending-item duration-200 px-4 py-3">
            <div className="mr-3 text-dark font-bold text-base">
              <span>#AlaskaDaily</span>
            </div>
            <div className="my-0.5 text-gray text-sm">
              <p>
                Starring Hilary Swank, TONIGHT at 10/9c on ABC & Stream on Hulu.
              </p>
            </div>
            <div className="mt-1 flex items-center text-gray text-xs">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <g>
                  <path d="M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z"></path>
                </g>
              </svg>
              <p className="ml-1">Promoted by Alaska Daily</p>
            </div>
          </li>
          <li className="trending-item flex flex-row duration-200 px-4 py-3">
            <div className="">
              <div className="mr-3 text-gray text-xs">
                <span>World news</span>
                <span className="px-1">.</span>
                <span>LIVE</span>
              </div>
              <div className="my-0.5 text-sm fonr-bold">
                <p className="font-bold">
                  Protests continue in Iran after death of Mahsa Amini in police
                  custody
                </p>
              </div>
            </div>
            <div className="trending-icon flex shrink-0 justify-center items-center border rounded-xl text-gray duration-200">
              <svg viewBox="0 0 24 24" width="30" height="30">
                <g>
                  <path d="M14 11.25H6c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-4H6c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.25 8H6c-.414 0-.75.336-.75.75s.336.75.75.75h4.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                  <path d="M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-18.25 8.5V4.25c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v15c0 .452.12.873.315 1.25H4c-.413 0-.75-.337-.75-.75zm16.25.75c-.69 0-1.25-.56-1.25-1.25v-6.5h2.5v6.5c0 .69-.56 1.25-1.25 1.25z"></path>
                </g>
              </svg>
            </div>
          </li>
          <li className="trending-item duration-200 px-4 py-3">
            <Link className="flex py-2 text-primary" to="">
              Show more
            </Link>
          </li>
        </ul>
      </section>
      <section className="trending-box mb-4 overflow-hidden">
        <h2 className="font-extrabold text-xl px-4 py-3">Who to follow</h2>
        <ul className="trending-list">
          <li className="trending-item flex flex-row justify-between duration-200 px-4 py-3">
            <div className="mr-3 w-12 h-12 rounded-full overflow-hidden">
              <Link to="">
                <img src="images/users/nickparvar.jpg" alt="" />
              </Link>
            </div>
            <div className="flex justify-between items-center grow">
              <div className="flex flex-col">
                <Link className="text-dark font-bold hover:underline" to="">
                  Masoud
                </Link>
                <Link className="text-gray text-15" to="">
                  @nickparvar
                </Link>
              </div>
              <button
                className="btn-dark duration-200 px-4 rounded-full text-white font-bold w-20 h-8 ml-3"
                type="button"
              >
                Follow
              </button>
            </div>
          </li>
          <li className="trending-item flex flex-row justify-between duration-200 px-4 py-3">
            <div className="mr-3 w-12 h-12 rounded-full overflow-hidden shrink">
              <Link to="">
                <img src="images/users/nickparvar.jpg" alt="" />
              </Link>
            </div>
            <div className="flex justify-between items-center grow">
              <div className="flex flex-col">
                <Link className="text-dark font-bold hover:underline" to="">
                  Masoud
                </Link>
                <div className="flex flex-row items-center">
                  <Link
                    className="text-gray text-15px overflow-hidden text-ellipsis whitespace-nowrap shrink"
                    to=""
                  >
                    @nickparvar
                  </Link>
                  <span className="px-1 ml-1.5 text-gray text-11px font-medium bg-gray-200 rounded-sm">
                    Follows you
                  </span>
                </div>
              </div>
              <button
                className="btn-dark duration-200 px-4 rounded-full text-white font-bold w-20 h-8 ml-3"
                type="button"
              >
                Follow
              </button>
            </div>
          </li>
          <li className="trending-item duration-200 px-4 py-2">
            <Link className="flex py-2 text-primary" to="">
              Show more
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <nav className="px-4 flex flex-wrap">
          <Link
            className="text-gray pr-3 text-13px hover:underline"
            to=""
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Terms of Service
          </Link>
          <Link
            className="text-gray pr-3 text-13px hover:underline"
            to=""
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-gray pr-3 text-13px hover:underline"
            to=""
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Cookie Policy
          </Link>
          <Link
            className="text-gray pr-3 text-13px hover:underline"
            to=""
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Accessibility
          </Link>
          <Link
            className="text-gray pr-3 text-13px hover:underline"
            to=""
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Ads info
          </Link>
          <button
            className="text-gray pr-3 text-13px hover:underline"
            type="button"
          >
            <span>More</span>

            <svg viewBox="0 0 24 24" width="16">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </button>
          <div className="text-gray pr-3 text-13px hover:underline">
            © 2022 Twitter, Inc.
          </div>
        </nav>
      </section>
    </aside>
  );
};

export default TrendSidebar;
