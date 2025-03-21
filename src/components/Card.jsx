import React, { useState } from "react";

export default function Card({name, jobtitle, description}) {
  const [clickAmount, setclickAmount] = useState(0);


  return (
    <div className="bg-blue-500 border w-100" onClick={() => setclickAmount(clickAmount + 1)}>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="placeholder"
        className="w-100"
      />
      <p className="font-bold">{name}</p>
      <p>{jobtitle}</p>
      <p>{description}</p>
      <div>Amount of clicks: {clickAmount}</div>
    </div>
  );
}
