import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const MeetingItem = ({ title, date, time, people, place, bgColor = "bg-blue-50" }) => (
  <div className={`p-4 ${bgColor} rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between`}>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">
        {date} at {time}
      </p>
      <p className="text-sm text-gray-500 flex gap-2">
        <IoPersonOutline className="mt-1" />
        {people}
        <FaMapMarkerAlt className="mt-1" /> {place}
      </p>
    </div>
  </div>
);

export default MeetingItem;