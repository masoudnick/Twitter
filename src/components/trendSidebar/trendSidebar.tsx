import "./trendSidebar.scss";
import { Link } from "react-router-dom";

import Recomendations from "./recomendations";

const TrendSidebar = () => {
  return (
    <aside className="trend-sidebar flex-[0_0_auto] mr-2.5">
      <div className="search-box mb-3 py-1">
        <form
          className="search-form flex flex-row items-center rounded-full"
          action=""
        >
          <div className="text-gray pl-5">
            <svg viewBox="0 0 24 24" width="19">
              <g>
                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
              </g>
            </svg>
          </div>
          <div className="grow">
            <input
              className="p-3 bg-transparent w-full text-dark border border-transparent"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              placeholder="Search Twitter"
            />
          </div>
        </form>
      </div>
      <section className="sidebar-box mb-4 overflow-hidden">
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
                  <path d="M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z"></path>
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
                  Voters look ahead to the upcoming 2022 midterm elections
                </p>
              </div>
            </div>
            <div className="trending-icon flex shrink-0 justify-center items-center border rounded-xl text-gray duration-200">
              <svg viewBox="0 0 24 24" width="30" height="30">
                <g>
                  <path d="M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z"></path>
                </g>
              </svg>
            </div>
          </li>
          <li className="trending-item duration-200 px-4 py-3">
            <div className="mr-3 text-gray text-13px">
              <span>Trending</span>
            </div>
            <div className="mt-0.5 font-bold text-15px">
              <p>Islamic Republic of Iran</p>
            </div>
            <div className="mt-1 text-gray text-13px">
              <span>8,147 Tweets</span>
            </div>
          </li>
          <li className="trending-item duration-200 px-4 py-3">
            <Link className="flex py-2 text-primary" to="">
              Show more
            </Link>
          </li>
        </ul>
      </section>
      <Recomendations />
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
