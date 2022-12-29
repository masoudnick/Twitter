import { Link } from "react-router-dom";

const Verified = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mx-auto max-w-[400px] px-8 font-default">
      <div>
        <img src="/images/verification-check.png" alt="verification check" />
      </div>
      <div className="font-extrabold text-3xl text-[31px] mb-3">
        Nothing to see here — yet
      </div>
      <div className="text-gray text-[15px]">
        Use the action menu — those three little dots on a Tweet — to untag
        yourself and leave a conversation.{" "}
        <Link
          className="text-dark font-bold underline decoration-1 hover:decoration-2"
          to=""
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Verified;
