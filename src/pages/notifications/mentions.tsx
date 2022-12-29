import { Link } from "react-router-dom";

const Mentions = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <img
          className="w-full"
          src="/images/illustration_unmention.png"
          alt=""
        />
      </div>
      <div className="p-7 font-default">
        <div className="font-extrabold leading-8 text-[26px] mb-3">
          <h1>Control which conversations you’re mentioned in</h1>
        </div>
        <div className="text-gray text-[15px]">
          Likes, mentions, Retweets, and a whole lot more — when it comes from a
          verified account, you’ll find it here.{" "}
          <Link
            className="text-dark font-bold underline decoration-1 hover:decoration-2"
            to=""
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mentions;
