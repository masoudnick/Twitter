import { Link } from "react-router-dom";
import { Recomendations } from "../../components";
import { SearchForm } from "../../components";
import { TrendSidebar, Trending } from "../../components";

import "./explore.scss";

const Explore = () => {
  return (
    <>
      <section className="flex flex-row justify-between grow">
        <main className="main-content w-full">
          <div className="flex flex-col w-full border-x border-slate-100 min-h-full">
            <section className="header flex flex-col sticky">
              <div className="flex items-center pl-5 pr-4">
                <div className="search-box py-1 grow">
                  <SearchForm />
                </div>
                <button
                  className="flex items-center btn-hover-gray ml-10"
                  type="button"
                >
                  <div className="btn-icon relative">
                    <div className="hover-effect"></div>
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <g>
                        <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
              <nav className="flex justify-between border-b border-slate-100">
                <Link
                  className="flex items-start px-6 bg-hover-gray duration-200 min-w-[60px]"
                  to=""
                >
                  <div className="flex items-center relative py-4">
                    <span className="font-bold">For you</span>
                    <div className="w-full h-1 absolute bottom-0 bg-primary rounded-full"></div>
                  </div>
                </Link>
                <Link
                  className="flex p-4 px-6 bg-hover-gray duration-200 min-w-[56px]"
                  to=""
                >
                  <span className="text-gray font-medium">Trending</span>
                </Link>
                <Link
                  className="flex p-4 px-6 bg-hover-gray duration-200 min-w-[56px]"
                  to=""
                >
                  <span className="text-gray font-bold">News</span>
                </Link>
                <Link
                  className="flex p-4 px-6 bg-hover-gray duration-200 min-w-[56px]"
                  to=""
                >
                  <span className="text-gray font-bold">Sports</span>
                </Link>
                <Link
                  className="flex p-4 px-6 bg-hover-gray duration-200 min-w-[56px]"
                  to=""
                >
                  <span className="text-gray font-bold">Entertainment</span>
                </Link>
              </nav>
            </section>
            <section>
              <div className="top-poster media-box relative">
                <Link className="flex border border-slate-100" to="/home">
                  <img
                    className="w-full"
                    src="images/media/1538525847157604357/FVnxEFAWYAMWmrC.webp"
                    alt="Ali Qapu Palace"
                    loading="lazy"
                  />
                </Link>
                <div className="media-overlay gradiant-overlay flex items-center justify-center absolute inset-0 w-full h-full select-none">
                  <div className="media-meta text-white ml-2 mb-1">
                    <div className="text-13px">
                      <span>Formula 1</span>
                      <span className="text-15px px-1">.</span>
                      <span>Starts tomorrow</span>
                    </div>
                    <div className="my-1 text-[23px] font-extrabold">
                      Abu Dhabi Grand Prix 2022
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Trending
              showTitle={false}
              showReadMore={false}
              classes="border-b border-slate-100 pb-1 mb-1"
            />
            <Recomendations classes="border-b border-slate-100 pb-1 mb-1" />
          </div>
        </main>
        <TrendSidebar showTrending={false} showRecomendations={true} />
      </section>
    </>
  );
};

export default Explore;
