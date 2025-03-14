import React from "react";

export default function List({items}) {
    return (
      <div className="w-50 h-max text-white items-center">
        <ul>
            {items.map((item, index) => (
                <li key={index} className="h-10 pl-3 mb-1 bg-cyan-500 ">{item}</li>
            ))}
        </ul>
      </div>
    );
  }