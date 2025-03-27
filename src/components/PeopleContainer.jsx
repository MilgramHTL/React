import React from "react";
import Card from "./DemoCard";
import { useState } from "react";
import { useEffect } from "react";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://67b845fc699a8a7baef35fe5.mockapi.io/person")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      });
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPeople(filtered);
  };
  return (
    <div className="p-8">
      <div className="fixed border mb-2 bg-amber-100 w-10vw h-28 p-4">
        <input
          className="border p-3"
          placeholder="Search"
          type="text"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
      </div>
      <div className="bg-blue-200 grid grid-cols-2 lg:grid-cols-4 gap-2 p-6 pt-32">
        {filteredPeople.map((element) => {
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
      </div>
    </div>
  );
}
