import React from "react";

const ActivityItem = ({ user, action, context, time, bgColor = "bg-purple-50" }) => (
  <div className={`p-4 ${bgColor} rounded-lg`}>
    <h3 className="font-medium">
      <span className="font-semibold">{user}</span> {action}
    </h3>
    <p className="text-sm text-gray-500">
      {context} • {time}
    </p>
  </div>
);

export default ActivityItem;