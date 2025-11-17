import React from "react";

const SectionHeader = ({ icon, title, color = "gray-500" }) => (
  <div className="flex items-center gap-2 border-b pb-3 mb-3">
    <div className={`text-${color} text-xl`}>
      {icon}
    </div>
    <h2 className="text-xl font-semibold">{title}</h2>
  </div>
);

export default SectionHeader;