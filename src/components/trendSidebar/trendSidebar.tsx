import "./trendSidebar.scss";
import { Link } from "react-router-dom";
import Recomendations from "./recomendations";
import Trending from "./trending";
import SearchBox from "../searchBox/searchForm";

interface TrendSidebarProps {
  showTrending: boolean;
  showRecomendations: boolean;
}

const TrendSidebar = ({
  showTrending,
  showRecomendations,
}: TrendSidebarProps) => {
  return (
    <aside className="trend-sidebar flex-[0_0_auto] mr-2.5">
      <div className="search-box mb-3 py-1 bg-white">
        <SearchBox />
      </div>
      {showTrending && (
        <Trending showTitle={true} showReadMore={true} classes="mb-4" />
      )}
      {showRecomendations && <Recomendations classes="mb-4" />}
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

            <svg className="inline-block px-0.5" viewBox="0 0 24 24" width="16">
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
