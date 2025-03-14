import React from "react";

export default function Card({name, jobtitle, description}) {
  return (
    <div className="bg-blue-500 border w-full">
      <p className="font-bold">{name}</p>
      <p>{jobtitle}</p>
      <p>{description}</p>
    </div>
  );
}
