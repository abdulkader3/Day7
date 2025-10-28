import React from "react";

const BUTTON = ({
    button_title,
}) => {
  return (
    <>
      <button className="bg-pink-400 text-white font-semibold px-3  py-2 hover:scale-125 transition-all hover:rounded-4xl active:rounded-4xl active:scale-95">
        {button_title}
      </button>
    </>
  );
};

export default BUTTON;
