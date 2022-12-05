import { useEffect, useState } from "react";
import { notificationAPI } from "../../API";
import { Loading } from "../../components";
import { Notification } from "./interfaces";
import NotificationItem from "./notificationItem";

const NotificationsList = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const getTweets = () => {
    notificationAPI()
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((error) => {
        setNotifications([]);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getTweets();
    }, 1500);
  }, []);
  return (
    <>
      {notifications.map((notification) => (
        <NotificationItem notification={notification} key={notification.id} />
      ))}
      {!notifications.length && <Loading />}
    </>
  );
};

export default NotificationsList;
