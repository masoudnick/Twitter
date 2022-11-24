import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trendingAPI } from "../../API";
import Loading from "../loading/loading";

interface Trend {
  id: number;
  type: string;
  name: string;
  url: string;
  description: string | undefined;
  domainContext: string | undefined;
  timeString: string | undefined;
  metaDescription: string | undefined;
  groupedTrends: {
    name: string;
    url: string;
  };
}
interface TrendingProps {
  showTitle: boolean;
  showReadMore: boolean;
  classes: string | undefined;
}

const Trending = ({ showTitle, showReadMore, classes }: TrendingProps) => {
  const [trends, setTrends] = useState<Trend[]>([]);

  const getTrends = () => {
    trendingAPI()
      .then((res) => {
        setTrends(res.data);
      })
      .catch((error) => {
        setTrends([]);
      });
  };

  useEffect(() => {
    getTrends();
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <section className={"sidebar-box overflow-hidden " + classes}>
      {trends.length > 0 ? (
        <>
          {showTitle && (
            <h2 className="font-extrabold text-xl px-4 py-3">
              What’s happening
            </h2>
          )}
          <div className="trending-list">
            {trends.map((trend) =>
              trend.type === "event" ? (
                <div
                  className="trending-item flex flex-row justify-between duration-200 px-4 py-3 cursor-pointer"
                  onClick={() => {
                    window.open(trend.url, "_blank");
                  }}
                  key={trend.id}
                >
                  <div>
                    <div className="mr-3 text-gray text-xs">
                      <span>{trend.domainContext}</span>
                      {trend.timeString && (
                        <>
                          <span className="px-1">.</span>
                          <span>{trend.timeString}</span>
                        </>
                      )}
                    </div>
                    <div className="my-0.5 text-sm fonr-bold">
                      <p className="font-bold">{trend.name}</p>
                    </div>
                    {trend.metaDescription && (
                      <div className="mt-0.5">
                        <p className="text-gray text-xs">
                          {trend.metaDescription}
                          {trend.groupedTrends && (
                            <Link
                              className="text-primary pl-1 hover:underline"
                              to={trend.groupedTrends.url}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(trend.groupedTrends.url, "_blank");
                              }}
                            >
                              {trend.groupedTrends.name}
                            </Link>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="trending-icon flex shrink-0 justify-center items-center border rounded-xl text-gray duration-200">
                    <svg viewBox="0 0 24 24" width="30" height="30">
                      <g>
                        <path d="M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              ) : (
                <div
                  className="trending-item duration-200 px-4 py-3 cursor-pointer"
                  onClick={() => {
                    window.open(trend.url, "_blank");
                  }}
                  key={trend.id}
                >
                  <div className="mr-3 text-gray text-13px">
                    <span>{trend.domainContext}</span>
                  </div>
                  <div className="mt-0.5 font-bold text-15px">
                    <p>{trend.name}</p>
                  </div>
                  {trend.description && (
                    <div className="mt-0.5 text-gray text-15px">
                      <p>{trend.description}</p>
                    </div>
                  )}
                  <div className="mt-1 text-gray text-13px">
                    <span>{trend.metaDescription}</span>
                  </div>
                </div>
              )
            )}
            {showReadMore && (
              <div className="trending-item duration-200 px-4 py-3">
                <Link className="flex py-2 text-primary" to="">
                  Show more
                </Link>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center min-h-[11rem]">
          <Loading />
        </div>
      )}
    </section>
  );
};

export default Trending;
