import React, { useEffect, useState } from "react";

interface NotificateProps {
  variant: "error" | "success";
  msg: string;
}

const Notificate = (notificationContent: NotificateProps) => {
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  useEffect(() => {
    if (!notificationContent.msg || !notificationContent.variant) return;
    setIsNotificationActive(true);
    setTimeout(() => {
      setIsNotificationActive(false);
    }, 2000);
  }, [notificationContent]);

  return (
    <div
      className={`${
        isNotificationActive ? "flex" : "hidden"
      } justify-center align-center absolute top-0 left-0 right-0 py-4 ${
        notificationContent.variant === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      <span className="text-white font-semibold text-[1.2rem]">
        {notificationContent.msg}
      </span>
    </div>
  );
};

export default Notificate;
