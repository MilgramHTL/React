import React from "react";
import Card from "./CardE03";
import { useState } from "react";
import { useEffect } from "react";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://67b845fc699a8a7baef35fe5.mockapi.io/person")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);
  return (
    <div>
      <h1>People</h1>
      <div>
        {people.map((element) => {
          return <div className="w-40">Card({
            name: element.name,
            jobtitle: element.jobtitle,
            picture: element.avatar,
          });
          </div>
        })}
        ;
      </div>
    </div>
  );
}
