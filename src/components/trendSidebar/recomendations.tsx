import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { recomendationsAPI } from "../../API";
import { Verified } from "../index";
import Loading from "../loading/loading";
import "./trendSidebar.scss";

type user = {
  id: number;
  name: string;
  username: string;
  profile_image_url: string;
  verified: boolean;
};

interface RecomendationsProps {
  classes: string | undefined;
}

const Recomendations = ({ classes }: RecomendationsProps) => {
  const [users, setUsers] = useState<user[]>([]);

  const getRecomended = () => {
    recomendationsAPI()
      .then((res) => {
        setUsers(res.data.sort(() => 0.5 - Math.random()).slice(0, 3));
      })
      .catch((error) => {
        setUsers([]);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getRecomended();
    }, 2000);
  }, []);

  return (
    <section className={"sidebar-box overflow-hidden " + classes}>
      {users.length > 0 ? (
        <>
          <h2 className="font-extrabold text-xl px-4 py-3">Who to follow</h2>
          <ul className="trending-list">
            {users.map((user) => (
              <li
                className="trending-item flex flex-row justify-between duration-200 px-4 py-3"
                key={user.id}
              >
                <div className="mr-3 w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Link className="relative" to={"/" + user.username}>
                    <img src={user.profile_image_url} alt="" />
                    <div className="hover-profile absolute duration-200 w-full h-full inset-0"></div>
                  </Link>
                </div>
                <div className="flex justify-between items-center grow">
                  <div className="flex flex-col w-[165px]">
                    <Link
                      className="flex text-dark font-bold hover:underline"
                      to={"/" + user.username}
                    >
                      <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                        {user.name}
                      </span>
                      {user.verified && <Verified />}
                    </Link>
                    <Link
                      className="text-gray text-15"
                      to={"/" + user.username}
                    >
                      @{user.username}
                    </Link>
                  </div>
                  <button
                    className="btn-dark duration-200 px-4 rounded-full text-white font-bold h-8 ml-3"
                    type="button"
                  >
                    Follow
                  </button>
                </div>
              </li>
            ))}

            <li className="trending-item duration-200 px-4 py-2">
              <Link className="flex py-2 text-primary" to="">
                Show more
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Recomendations;
