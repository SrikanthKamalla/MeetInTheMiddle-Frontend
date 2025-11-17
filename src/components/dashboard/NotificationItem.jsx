import React from "react";

const NotificationItem = ({ title, message, bgColor = "bg-red-50" }) => (
  <div className={`p-4 ${bgColor} rounded-lg`}>
    <h4 className="font-semibold">{title}</h4>
    <p className="text-sm text-gray-600">{message}</p>
  </div>
);

export default NotificationItem;