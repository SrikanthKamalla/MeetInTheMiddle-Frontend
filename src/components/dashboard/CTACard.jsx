import React from "react";
import { motion } from "framer-motion";

const CTACard = ({ 
  title, 
  description, 
  buttonText, 
  onButtonClick,
  bgColor = "bg-[#0b0626]",
  textColor = "text-white"
}) => (
  <div className={`flex justify-between items-center mt-10 ${bgColor} rounded-2xl p-6 shadow-lg`}>
    <div className={`flex flex-col ${textColor} max-w-[70%]`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm opacity-90">{description}</p>
    </div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-[#0b0626] bg-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-gray-100 transition"
      onClick={onButtonClick}
    >
      {buttonText}
    </motion.button>
  </div>
);

export default CTACard;