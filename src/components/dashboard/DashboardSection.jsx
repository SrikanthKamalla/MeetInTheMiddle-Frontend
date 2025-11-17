import React from "react";
import SectionHeader from "./SectionHeader";

const DashboardSection = ({ 
  children, 
  icon, 
  title, 
  bgColor = "bg-white",
  headerColor = "gray-500",
  maxHeight = "max-h-64" 
}) => (
  <div className={`${bgColor} shadow-md rounded-xl p-5 flex flex-col`}>
    <SectionHeader icon={icon} title={title} color={headerColor} />
    <div className={`flex flex-col gap-4 ${maxHeight} overflow-y-auto pr-2`}>
      {children}
    </div>
  </div>
);

export default DashboardSection;