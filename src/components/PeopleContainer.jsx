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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {people.map((element) => {
          return (
            <div>
              <Card
                name={element.name}
                jobtitle={element.jobtitle}
                picture={element.avatar}
              />
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}
