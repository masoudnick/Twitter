import { Link } from "react-router-dom";
import { Notification, Entities } from "./interfaces";

interface NotificationProps {
  notification: Notification;
}

const split_message = (text: string, entities: Entities[]): string => {
  let out = entities.map((entitity) => {
    let username = text.substring(entitity.fromIndex, entitity.toIndex);
    console.log(username);

    text += text.replace(
      username,
      <Link to={entitity.username}>{username}</Link>
    );
  });
  // console.log(out);

  return text;
};

const NotificationItem = ({ notification }: NotificationProps) => {
  return (
    <>
      <article className="notification-item flex justify-between duration-200 px-4 py-3 cursor-pointer border-b border-slate-200 hover:bg-black/[.03]">
        <div className="mr-3 basis-12 flex justify-end">
          {notification.icon === "person" && (
            <svg
              className="text-primary"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <g>
                <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
              </g>
            </svg>
          )}
          {notification.icon === "heart" && (
            <svg
              className="text-pink"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <g>
                <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
              </g>
            </svg>
          )}
          {notification.icon === "retweet" && (
            <svg
              className="text-success"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <g>
                <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"></path>
              </g>
            </svg>
          )}
        </div>
        <div className="flex flex-col grow">
          <div className="mb-3">
            <ul className="flex users-list">
              {notification.fromUsers.map((user) => (
                <li
                  className="w-8 h-8 rounded-full overflow-hidden relative user-item"
                  key={user.id}
                >
                  <Link to={`/${user.username}`}>
                    <img src={`images/users/${user.username}.jpg`} alt="" />
                    <div className="hover-profile absolute duration-200 w-full h-full inset-0"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-15px" dir="ltr">
            <p>{notification.message}</p>
          </div>
          {notification.tweet && (
            <div
              className="text-15px text-gray mt-3"
              dir={notification.rtl ? "rtl" : "ltr"}
            >
              <p>{notification.tweet}</p>
            </div>
          )}
        </div>
      </article>
      {/* <article className="notification-item flex justify-between duration-200 px-4 py-3 cursor-pointer border-b border-slate-200 hover:bg-black/[.03]">
        <div className="mr-3 basis-12 flex justify-end">
          <svg className="text-pink" viewBox="0 0 24 24" width="30" height="30">
            <g>
              <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col grow">
          <div className="mb-3">
            <ul className="flex users-list">
              <li className="w-8 h-8 rounded-full overflow-hidden relative user-item">
                <img src="images/users/nickparvar.jpg" alt="" />
                <div className="hover-profile absolute duration-200 w-full h-full inset-0"></div>
              </li>
            </ul>
          </div>
          <div className="text-15px" dir="ltr">
            <p>
              <Link className="font-bold hover:underline" to="">
                Ali
              </Link>{" "}
              followed you
            </p>
          </div>
        </div>
      </article>
      <article className="notification-item flex justify-between duration-200 px-4 py-3 cursor-pointer border-b border-slate-200 hover:bg-black/[.03]">
        <div className="mr-3 basis-12 flex justify-end shrink-0">
          <svg
            className="text-success"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <g>
              <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col grow">
          <div className="mb-3">
            <ul className="flex users-list">
              <li className="user-item w-8 h-8 rounded-full overflow-hidden relative">
                <img src="images/users/nickparvar.jpg" alt="" />
                <div className="hover-profile absolute duration-200 w-full h-full inset-0"></div>
              </li>
              <li className="user-item w-8 h-8 rounded-full overflow-hidden relative">
                <img src="images/users/nickparvar.jpg" alt="" />
                <div className="hover-profile absolute duration-200 w-full h-full inset-0"></div>
              </li>
            </ul>
          </div>
          <div className="text-15px" dir="ltr">
            <p>
              <Link className="font-bold hover:underline" to="">
                Ali
              </Link>{" "}
              Retweeted your reply
            </p>
          </div>
          <div className="mt-3 text-15px text-gray" dir="auto">
            <p>
              When the promised saviour, reappears; He will treat all human
              beings with justice, regardless of the colour, race or value of
              their world, and will not discriminate between any ethnic group or
              race.
            </p>
          </div>
        </div>
      </article> */}
    </>
  );
};

export default NotificationItem;
