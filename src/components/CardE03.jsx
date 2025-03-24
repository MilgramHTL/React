import React from "react";

export default function Card({ name, jobtitle, picture }) {
  return (
    <div className="border grid grid-cols-2 h-40">
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <p>{jobtitle}</p>
      </div>
      <div className="w-full flex-1">
        <img src={picture} alt="" className="object-cover w-full h-40"></img>
      </div>
    </div>
  );
}
