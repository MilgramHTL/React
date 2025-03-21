import React, { useState } from 'react';

export default function Button({ title, onClick, enabled }) {
  let [isClicked, setIsClicked] = useState(false);

  let style = enabled ? (isClicked ? "bg-red-400" : "bg-green-400") : "bg-gray-400";

  let ifClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={`p-2 m-2 ${style}`} onClick={ifClick}>
      {title}
    </button>
  );
}