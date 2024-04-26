import React from "react";

const ButtonTask = ({ text, color }) => {
  return (
    <div>
      <button
        className={`bg-${color}-100 text-xs text-${color}-500 font-semibold p-1 px-4 rounded-xl`}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonTask;
