import React from "react";

export default function Card({name, jobtitle, description}) {
  return (
    <div className="bg-blue-500 border w-100">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="placeholder"
        className="w-100"
      />
      <p className="font-bold">{name}</p>
      <p>{jobtitle}</p>
      <p>{description}</p>
    </div>
  );
}
